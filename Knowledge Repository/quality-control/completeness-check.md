# Completeness Check

[x] 1. AI-900 homepage exists.
[x] 2. AI-900 study guide exists.
[x] 3. AI-900 practice assessment folder exists.
[x] 4. AI-901 homepage exists.
[x] 5. AI-901 study guide exists.
[x] 6. AI concepts path exists.
[x] 7. Get started with AI applications and agents path exists.
[x] 8. Both Microsoft Learn paths include their path home page.
[x] 9. Both Microsoft Learn paths include module folders.
[x] 10. Module/unit files have source URLs.
[x] 11. Markdown versions are not empty.
[x] 12. Raw versions exist when possible.
[ ] 13. Images/media referenced by Markdown either exist locally or are clearly remote-linked.
[x] 14. No unrelated Horizon Archive art/style files are included.
[x] 15. No generated curriculum material is included.

## Notes

- AI-900 practice assessment is represented by a placeholder source record because no local/exported practice file or logger output was available at build time.
- Microsoft Learn module assets were copied from the existing local AI-901 capture.
- A subset of module image references remains under manual-review because automated Windows path validation is inconsistent on some deeper asset paths in this repository layout.
- Root-relative Microsoft images in captured exam/path home markdown are preserved as source-faithful remote references.

## Follow-up Recommended

- Manually add or log the AI-900 practice assessment source file.
- If you want every Learn image reference fully green in QC, rerun validation with a long-path-aware checker or do a manual spot-check of the flagged modules.
