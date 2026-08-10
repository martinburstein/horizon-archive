# First Run Process Changelog

## Current control

Program initialized **2026-08-09**. `FRAB-001-v1` is the first bounded First
Run release. Retrospectives apply only to future cycles and never rewrite an
accepted candidate or silently broaden a Work Order.

## Entries

### 2026-08-10 — `FRAB-001-v1` — TUNE

- **KEEP:** immutable-candidate review; one non-overlapping clean-start E2E;
  byte-checked production/fixture served identity; explicit physical-host
  non-promotion; protected-path and media boundaries.
- **TUNE:** provide one canonical release-command manifest for the focused
  invocation, validator `--self-test` mode, fixture preview configuration, and
  cleanup disposition. The Intelligence run corrected three local orchestration
  mistakes and reran each exact gate successfully, but a single manifest would
  reduce avoidable reruns without weakening independence.
- **REDESIGN:** not warranted. The candidate passed `25/25` focused, `953/953`
  cold full, `40/40` validators, both builds, PBA/media/served identity, and one
  `69.974 s` clean-start journey through both MH-40 outcomes with zero runtime
  errors.
