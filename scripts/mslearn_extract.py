from __future__ import annotations

import json
import mimetypes
import re
import time
from copy import deepcopy
from pathlib import Path
from typing import Any
from urllib.parse import urljoin, urlsplit, urlunsplit

import requests
from bs4 import BeautifulSoup, Tag
from markdownify import markdownify as html_to_markdown

try:
    from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
    from playwright.sync_api import sync_playwright
except Exception:  # pragma: no cover
    PlaywrightTimeoutError = Exception
    sync_playwright = None


USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/136.0.0.0 Safari/537.36"
)

MAIN_SELECTORS = [
    "main[role='main']",
    "main",
    "article",
    ".content",
    "#main",
]

PRUNE_SELECTORS = [
    "header",
    "footer",
    "nav",
    "aside",
    "[data-show-more]",
    ".buttons.buttons-right",
    ".feedback-section",
    ".review-container",
    ".contributors-holder",
    ".metadata",
    ".module-progress",
    ".next-unit",
    ".previous-unit",
    ".social-share",
    ".cookie-banner-holder",
    ".expandable-help",
]
NOISE_TEXT = {
    "Read in English",
    "Add",
    "Add to plan",
    "Completed",
    "Add to Collections",
}


def strip_query_fragment(url: str) -> str:
    parts = urlsplit(url)
    path = parts.path if parts.path.endswith("/") else f"{parts.path}/"
    return urlunsplit((parts.scheme, parts.netloc, path, "", ""))


def create_session() -> requests.Session:
    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})
    return session


def normalize_whitespace(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def slug_from_url(url: str) -> str:
    path = urlsplit(strip_query_fragment(url)).path.rstrip("/")
    return path.split("/")[-1]


def wait_between_requests(delay_seconds: float) -> None:
    time.sleep(delay_seconds)


def fetch_html(session: requests.Session, url: str, timeout: int = 60) -> str:
    response = session.get(url, timeout=timeout)
    response.raise_for_status()
    response.encoding = "utf-8"
    return response.text


def raw_html_has_text_content(html: str) -> bool:
    markers = [
        'data-pivot="text"',
        "Text and images",
        'class="zone has-pivot" data-pivot="text"',
    ]
    return any(marker in html for marker in markers)


def render_html_with_playwright(url: str, timeout_ms: int = 60000) -> tuple[str, dict[str, Any]]:
    if sync_playwright is None:
        raise RuntimeError("Playwright is not installed.")

    metadata: dict[str, Any] = {
        "playwright_used": True,
        "text_and_images_selected": False,
        "playwright_error": None,
    }

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto(url, wait_until="networkidle", timeout=timeout_ms)
            controls = [
                page.get_by_role("tab", name=re.compile("text and images", re.I)),
                page.get_by_role("button", name=re.compile("text and images", re.I)),
            ]
            for control in controls:
                if control.count():
                    control.first.click()
                    page.wait_for_timeout(500)
                    metadata["text_and_images_selected"] = True
                    break
            if "knowledge-check" in url:
                page.wait_for_timeout(5000)
            else:
                page.wait_for_timeout(1200)
        except PlaywrightTimeoutError as exc:
            metadata["playwright_error"] = f"timeout: {exc}"
        except Exception as exc:  # pragma: no cover
            metadata["playwright_error"] = str(exc)
        html = page.content()
        browser.close()
        return html, metadata


def get_unit_html(
    session: requests.Session,
    url: str,
    prefer_playwright: bool = True,
    timeout_ms: int = 60000,
) -> tuple[str, dict[str, Any]]:
    initial_html = fetch_html(session, url)
    if raw_html_has_text_content(initial_html):
        return (
            initial_html,
            {
                "playwright_used": False,
                "text_and_images_selected": True,
                "playwright_error": None,
                "fallback_http_fetch": False,
                "content_source": "http_prefetch",
            },
        )
    if prefer_playwright:
        try:
            return render_html_with_playwright(url, timeout_ms=timeout_ms)
        except Exception as exc:
            return (
                initial_html,
                {
                    "playwright_used": False,
                    "text_and_images_selected": False,
                    "playwright_error": str(exc),
                    "fallback_http_fetch": True,
                    "content_source": "http_fallback_after_playwright_error",
                },
            )
    return initial_html, {
        "playwright_used": False,
        "text_and_images_selected": False,
        "playwright_error": None,
        "fallback_http_fetch": False,
        "content_source": "http_only",
    }


def find_main_content(soup: BeautifulSoup) -> Tag:
    for selector in MAIN_SELECTORS:
        tag = soup.select_one(selector)
        if isinstance(tag, Tag):
            return tag
    body = soup.body
    if not isinstance(body, Tag):
        raise ValueError("Unable to locate a main content area.")
    return body


def prune_content(content: Tag) -> Tag:
    cleaned = deepcopy(content)
    for selector in PRUNE_SELECTORS:
        for match in cleaned.select(selector):
            match.decompose()

    for match in cleaned.select("[aria-label='Feedback'], [id*='feedback'], [class*='feedback']"):
        match.decompose()

    for match in cleaned.select("[data-bi-name='add-to-plan'], [title='Add to plan']"):
        match.decompose()

    for match in cleaned.select("[data-pivot]"):
        if match.get("data-pivot") != "text":
            match.decompose()
        else:
            match.attrs.pop("data-pivot", None)
            classes = [item for item in match.get("class", []) if item not in {"zone", "has-pivot"}]
            if classes:
                match["class"] = classes
            elif "class" in match.attrs:
                del match.attrs["class"]

    for match in cleaned.select("[role='tablist'], [role='tab'], .button-group, .pivot-controls"):
        match.decompose()

    for tag in cleaned.find_all(["script", "style", "noscript", "input"]):
        tag.decompose()

    first_heading = cleaned.find(["h1", "h2"])
    if isinstance(first_heading, Tag) and first_heading.name == "h1":
        first_heading.decompose()

    for tag in cleaned.find_all(["a", "button", "span", "p", "div", "li"]):
        text = normalize_whitespace(tag.get_text(" ", strip=True))
        if text in NOISE_TEXT:
            tag.decompose()
            continue
        if text.endswith(" XP") and text[:-3].isdigit():
            tag.decompose()
            continue
        if text.startswith("Next unit:"):
            tag.decompose()
            continue
        if text in {"Previous", "Next"}:
            tag.decompose()

    return cleaned


def normalize_learn_asset_url(url: str) -> str:
    return url.replace("/training/modules/wwl-data-ai/", "/training/wwl-data-ai/")


def absolutize_links(content: Tag, page_url: str) -> None:
    for anchor in content.select("a[href]"):
        anchor["href"] = urljoin(page_url, anchor["href"])
    for image in content.select("img[src]"):
        image["src"] = normalize_learn_asset_url(urljoin(page_url, image["src"]))


def sanitize_markdown(markdown: str) -> str:
    markdown = markdown.replace("\r\n", "\n")
    markdown = re.sub(r"\n{3,}", "\n\n", markdown)
    markdown = re.sub(r"[ \t]+\n", "\n", markdown)
    return markdown.strip() + "\n"


def infer_extension(asset_url: str, response: requests.Response | None = None) -> str:
    guessed = Path(urlsplit(asset_url).path).suffix
    if guessed:
        return guessed
    if response is not None:
        content_type = response.headers.get("Content-Type", "").split(";")[0].strip()
        extension = mimetypes.guess_extension(content_type)
        if extension:
            return extension
    return ".bin"


def download_assets(
    session: requests.Session,
    content: Tag,
    assets_dir: Path,
    page_url: str,
    enable_download: bool = True,
) -> tuple[list[dict[str, Any]], list[str]]:
    assets_dir.mkdir(parents=True, exist_ok=True)
    asset_records: list[dict[str, Any]] = []
    failures: list[str] = []
    seen_urls: dict[str, str] = {}

    for index, image in enumerate(content.select("img[src]"), start=1):
        image_url = urljoin(page_url, image["src"])
        alt_text = normalize_whitespace(image.get("alt", ""))
        if not enable_download:
            asset_records.append({"alt": alt_text, "source_url": image_url, "path": None})
            continue

        if image_url in seen_urls:
            image["src"] = seen_urls[image_url]
            asset_records.append({"alt": alt_text, "source_url": image_url, "path": seen_urls[image_url]})
            continue

        try:
            response = session.get(image_url, timeout=60)
            response.raise_for_status()
            extension = infer_extension(image_url, response)
            local_name = f"image_{index:03d}{extension}"
            local_path = assets_dir / local_name
            local_path.write_bytes(response.content)
            relative_path = f"assets/{local_name}"
            image["src"] = relative_path
            seen_urls[image_url] = relative_path
            asset_records.append({"alt": alt_text, "source_url": image_url, "path": relative_path})
        except Exception:
            failures.append(image_url)
            asset_records.append({"alt": alt_text, "source_url": image_url, "path": None})

    return asset_records, failures


def convert_content_to_markdown(content: Tag) -> str:
    markdown = html_to_markdown(
        str(content),
        heading_style="ATX",
        bullets="-",
        strip=["span"],
    )
    return sanitize_markdown(markdown)


def extract_module_unit_links(session: requests.Session, module_url: str) -> list[dict[str, str]]:
    html = fetch_html(session, module_url)
    soup = BeautifulSoup(html, "html.parser")
    normalized_module_url = strip_query_fragment(module_url)
    module_path = urlsplit(normalized_module_url).path.rstrip("/")
    links: list[dict[str, str]] = []
    seen: set[str] = set()

    for anchor in soup.select("a[href]"):
        href = urljoin(module_url, anchor.get("href", ""))
        normalized_href = strip_query_fragment(href)
        if not normalized_href.startswith(normalized_module_url):
            continue
        if normalized_href == normalized_module_url:
            continue
        candidate_path = urlsplit(normalized_href).path.rstrip("/")
        if not candidate_path.startswith(module_path + "/"):
            continue
        title = normalize_whitespace(anchor.get_text(" ", strip=True))
        if not title or normalized_href in seen:
            continue
        seen.add(normalized_href)
        links.append({"title": title, "url": normalized_href})

    return links


def write_json(path: Path, payload: Any) -> None:
    path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
