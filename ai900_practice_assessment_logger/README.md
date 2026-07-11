# AI-900 Practice Assessment Logger

This tool helps Martin work through the official Microsoft Learn AI-900 practice assessment while creating a personal study log in `study capture mode`.

It is intentionally **not** a scraper or offline question bank. It does **not** save verbatim Microsoft question text, answer choices, raw HTML, or a reusable answer key.

Allowed logged data includes:

- question number
- assessment URL
- broad topic tags
- number of answer choices
- selected choice labels only, such as `A/B/C/D`
- visible correct/incorrect status, if checked
- `needs_review`
- short paraphrased takeaways
- weak-area summary

## Install

```bash
npm install
npx playwright install chromium
```

## Run

```bash
npm start
```

Optional review-card generation:

```bash
npm run build-cards
```

The main logger also writes flashcard prompts automatically.

## Workflow

1. The browser opens the official Microsoft Learn AI-900 practice assessment.
2. Answer the current question in the browser.
3. Click `Check Your Answer` if you want correctness logged.
4. Return to the terminal and press Enter.
5. Add a short takeaway in your own words.
6. Mark whether the question needs review.
7. Let the script advance or click `Next` manually.
8. Repeat through the assessment.

If a prior session log already exists, the tool asks whether to resume or overwrite it.

## Outputs

Generated in `output/`:

- `ai900_practice_session.csv`
- `ai900_practice_session.json`
- `ai900_review_plan.md`
- `ai900_flashcard_prompts.md`

Stored fields are limited to:

- `question_number`
- `total_questions`
- `source_url`
- `topic_tags`
- `number_of_choices`
- `selected_choice_indices_or_letters`
- `result`
- `needs_review`
- `user_takeaway`
- `timestamp`

## Boundary

Do not use this tool to recreate or redistribute the Microsoft assessment. The logger is for personal study tracking only.

It does not write:

- verbatim question text
- verbatim answer choices
- raw HTML
- screenshots
- a standalone answer key
