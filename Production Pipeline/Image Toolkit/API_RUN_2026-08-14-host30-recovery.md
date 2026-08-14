# Private API Image Recovery - 2026-08-14 - Host 30

Status: **PRODUCED PENDING INTEGRATION / AUTHORIZED RECOVERY PASS**

Martin explicitly authorized a new 20-call recovery round after the prior
20-call lifetime round returned no artifacts. Lifetime ordinals were preserved:
the first recovery request was attempt 21. Controls remained `gpt-image-2`,
sequential, high quality, opaque PNG, `1920x1088`, no augmentation, and exact
`1920x1080` RGB normalization.

| Lifetime attempt | Recovery attempt | Mode | Result | Technical | Practical | Disposition |
| ---: | ---: | --- | --- | --- | --- | --- |
| 21 | 1 | generate | clean Full HD candidate | pass | hard pass; 20/20 | selected; stop |

## Durable state

- Recovery attempts launched: `1/20`
- Recovery attempts preserved: `19`
- Lifetime attempts launched: `21`
- Prior no-artifact failures: `20`
- Technically valid normalized recovery candidates: `1`
- Practical hard-pass recovery candidates: `1`
- Selected lifetime attempt: `21`
- Selected recovery attempt: `1`
- Selected practical score: `20/20`
- Candidate or master revealed: no
- Production master: created privately at exact Full HD
- Provenance receipt: created
- Runtime integration: not begun
- Product/runtime code delta: none
- Broad product tests/builds/browser/E2E/validators: not run; not invalidated

The first recovery artifact passed every declared hard gate. Remaining notes
concern only a subtle ambient highlight, slight compositional weighting, and
minor shadow debris. They do not justify another paid request.
