# First Run Functional Report - Geometry Evidence-Source Correction

Report ID: `FRCE-003-v1-VR-46`

Disposition: **`HOLD / GEOMETRY CORRECTION TECHNICALLY READY / VALIDATION
COMMAND-SELECTION DIVERGENCE / NO E2E / RETURN TO FRESH MISSION`**

Governing shell: `FRSH-003-v1-VR-46`

Starting revision: `2de12705454acd1f4eb7b96ec8837bbecf3155c7`

Correction candidate: `8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97`

Recorded: **2026-08-10**

## Context and scope

Fresh-child capacity remained unavailable, so root expressly authorized the
existing Combat context to perform this correction. Context reuse is disclosed
and is not candidate evidence.

The committed candidate changes exactly:

- `playtest/e2e-playthrough.mjs`; and
- `horizon-archive-game/test/sixfoldWeir.test.js`.

No product, CSS, markup, content, runtime, fixture, media, manifest,
diagnostic-transport, summary, verifier, threshold, viewport, layout order, or
candidate identity changed.

## Correction

Each Sixfold layout now creates one post-media, post-settle geometry epoch that
holds the seven live DOM sources underlying all nine measured rectangles. Both
pre- and post-focus geometry snapshots consume that same epoch handle.

The geometry reader now fails explicitly when any required source is missing,
disconnected, from another document, non-finite, or empty. It can no longer
accept a detached element's zero rectangle and fan that source failure out as
document, inverse-scroll, residual, lattice, and aggregate product failures.

After `Tab -> Shift+Tab`, the harness waits two animation frames before the
post snapshot. All existing document-equality, inverse-scroll, residual-zero,
lattice, direct geometry, containment, overlap, target-size, viewport,
semantic, focus, diagnostic, transport, and aggregate gates remain unchanged.
No failing layout, dimension, transported value, or expected outcome is
hardcoded or suppressed.

The existing static test now proves the shared epoch source, all seven source
bindings, explicit missing/disconnected/empty failures, the unchanged focus
sequence, the two-frame settle, and reuse of the same epoch for both snapshots.
The test inventory was not increased.

## Authorized proof

```text
start HEAD == origin/main == 2de12705454acd1f4eb7b96ec8837bbecf3155c7
node --check playtest/e2e-playthrough.mjs: PASS
exact FRRC focused command: 68 tests / 68 pass / 0 fail
focused duration: 199.0393ms
unexpected tracked delta outside two-file allowlist: none
candidate two-file delta present: yes
staged delta before candidate commit: none
two-file diff-check: PASS
candidate commit: 8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97
```

No E2E, preview, browser, root, extractor, diagnostic decode, summary,
verifier, build, fixture build, related/full test, validator, PBA, served
identity, product/media inspection, or cleanup action ran.

## Validation command-selection divergence

Before reading the exact frozen focused command from FRRC-002, Combat invoked
only `node --test horizon-archive-game/test/sixfoldWeir.test.js` from the
repository root. It passed `9/9`, but it was an additional non-frozen focused
subset invocation and is not acceptance evidence. Combat then read the literal
FRRC focused command and invoked that exact aggregate once, producing the
required `68/68` pass.

This is disclosed as **`UNAUTHORIZED DIVERGENCE / VALIDATION COMMAND SELECTION
/ OPEN / VR-46 COMBAT`**. It did not inspect or change product, protected,
media, or user state and did not run a broader or live gate. Combat does not
waive or self-adjudicate it; fresh Mission must decide whether the exact
aggregate pass and complete candidate integrity are sufficient or whether a
new bounded static authority is required.

## Preserved controls

Diagnostic output remains diagnostic-only, non-release, forbidden verifier
input, and no-retry. The diagnostic-transport candidate remains
`6c64eb354b7dbb467df5725e2cae4eb67092ddc7`; its report control remains
`0ac9023037873004f7bd5d75c16f80953d770a4d`.

Immutable product / validation / diagnostic / evidence identities remain:

```text
a91763e28d488f31f8cf7d40ece0b2682246ba9b
4cd7fbf31291671dd28c0743b44a7c49aaad82bb
2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
ca89a679195c11d441a76e6c02983a6436f2ccb2
```

The prior seven OPEN divergences remain separate and OPEN: VR-17 protected-path
enumeration; VR-23 broad filename enumeration; VR-24 untracked pathname
enumeration; VR-25 and VR-28 literal control pathname output; VR-39 exact-port
listener ownership recovery; and VR-41 parser diagnostic scalar output. The
new VR-46 command-selection divergence is separately OPEN and does not merge,
waive, cure, or close any predecessor.

All frozen player, learning, privacy, save, accessibility, route, world,
MH-40, null-delta, `successor=null`, ending, media, and one-E2E meanings remain
exact. No downstream stage, release, schedule, automation, reveal, maturity,
or `FIRST RUN COMPLETE` action is authorized.

