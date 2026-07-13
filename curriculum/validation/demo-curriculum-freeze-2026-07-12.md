# Demo curriculum freeze — 2026-07-12

## Frozen learner-facing scope

The demo curriculum freezes at `SIM-01` and includes the zero-Python sequence, all 23 mapped lessons through `L-06-03`, and `CUM-01` plus `SIM-01`. `SIM-02` content exists but runtime integration is explicitly post-demo.

## Audit result

`PASS — no demo-blocking learner-facing defects found.`

- All 23 deterministic validators in the frozen scope pass their self-tests.
- All curriculum JSON parses.
- All 23 lesson IDs are unique and packaged; prerequisites point backward, including `L-01-01` → `L-01-02` → `L-01-03` beginner progression.
- The union of lesson objective mappings covers all 15 current AI-901 objectives.
- Official source IDs used by the mapped lessons resolve in the current source register.
- `CUM-01` remediation routes cover all 15 objectives and point to packaged lessons.
- Strict gates remain intact: `L-06-03` 12/12 per form plus prerequisites; `CUM-01` 16/16 per form; `SIM-01` 24/24 plus retained transfer evidence.
- Frozen readiness artifacts are untimed or have fully equivalent untimed modes, persistent labels, keyboard order, text status/feedback, live-region support, reduced-motion support, privacy-limited evidence, and scene-transition clearing.
- Learner-facing language identifies practice as course-authored, rejects exam guarantees, and grants no authority for service, Azure, external, or destructive action.

## Demo rule

Fix only a reproducible blocker in this frozen scope. Do not expand lessons, rebalance questions, or integrate `SIM-02` before the demo. Reverify the official AI-901 study guide and volatile Foundry details after the freeze before production publication.
