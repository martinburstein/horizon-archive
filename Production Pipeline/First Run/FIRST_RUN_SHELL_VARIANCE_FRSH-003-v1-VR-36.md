# First Run Shell Variance Reissue - Pre-Live Preview and Served Identity Only

Variance ID: `FRSH-003-v1-VR-36`

Disposition: **`FIRST RUN SHELL READY / PRE-LIVE PREVIEW AND SERVED IDENTITY
ONLY / FRSH-003-v1-VR-36`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Immediate return / predecessor authority: Combat VR-35 remaining pre-live
fixture and scalar PBA pass / `FRSH-003-v1-VR-35`

Mission source inspected: `d359294f02129779167aa30b7182ca9f978c3a77`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: **2026-08-10**

## Independent adjudication and scalar correction

Mission accepts the exact Combat fixture return:

```text
fixtureModuleCount=1 fixtureBuiltSubstringCount=1 nativeExit=0
```

Mission also accepts the read-only production PBA/media/source-map return as
an exact pass after correcting one stale equality in VR-35:

```text
jsBytes=1667393 cssBytes=119247 mediaCount=17 mediaBytes=37410731 sourceMapCount=0 scanExit=0
```

`FRCA-003-v1` and `FRPR-003-v1` each already record JavaScript `1,667,393`,
CSS `119,247`, and media `17 / 37,410,731` as the accepted immutable production
evidence. The observed JavaScript scalar is therefore the recorded candidate
value, not a product delta. It is `728` bytes above VR-35's stale expected
`1,666,665`, remains below the frozen `1,675,664` and `1,703,258` JavaScript
caps, and requires no build, scan, repair, or product change. CSS remains exact
and below both frozen CSS caps; media and source-map scalars remain exact.

VR-35's exact-equality mismatch is classified **`ACCEPTED VARIANCE /
EVIDENCE-CONTROL SCALAR CORRECTION / NO PRODUCT CHANGE / VR-36`**. Combat's
fixture and PBA checkpoint passes. No rerun is authorized or required.

Mission's final bounded synchronization scalar was:

```text
headMatchExpected=true originMatchExpected=true headExit=0 originExit=0
```

Both revisions matched the inspected source above. Two preliminary scalar
transport attempts produced no usable revision evidence because of wrapper
construction defects; neither emitted repository content or pathnames, ran a
product command, or mutated repository state. They are not candidate evidence.
No untracked-cleanliness claim is made.

VR-22 focused `68/68`, related `74/74`, cold full `972/972`, and validators
`40/40`; VR-30 production build `moduleCount=1 builtSubstringCount=1
nativeExit=0`; VR-35 fixture build; and this corrected scalar PBA remain
accepted without rerun. None issues `PRODUCTION FUNCTIONAL`, release
acceptance, or maturity advance.

## Exact next bounded authority

Exact next owner is a **fresh Combat Engineer**. The only authorized product
checkpoint is the pre-live preview and served-identity portion of the operative
evidence shell `FRSH-003-v1-VR-07`, narrowed by this variance as follows:

1. At the synchronized source above, invoke the existing manifest-owned
   production and TD-012 fixture preview commands exactly once each on their
   already assigned loopback ports `4173` and `4184`.
2. Perform only the existing production/fixture root, deep-route, JavaScript,
   and CSS served-identity comparisons from that shell. All request bodies,
   asset references, diagnostics, paths, filenames, and preview streams must be
   captured and suppressed.
3. Emit only this ordered scalar schema:

```text
productionRootDeepCount=2 productionAssetMatchCount=2 fixtureRootDeepCount=2 fixtureAssetMatchCount=2 cleanupCount=2 portClearCount=2 nativeExit=0
```

4. Exact pass requires root and deep-route success for both previews, byte-
   equal served JavaScript and CSS against their respective on-disk build
   output for both previews, both owned preview processes stopped, both ports
   clear, and wrapper exit `0`.
5. Stop immediately after that scalar. Do not rerun or repair. On exact pass,
   return **`PRE-LIVE PREVIEW AND SERVED IDENTITY PASS / STOP / RETURN TO FRESH
   MISSION`**. On any missing, extra, reordered, duplicate, mismatched,
   timeout, ownership, cleanup, port, capture, or wrapper failure, return
   **`HOLD / PRE-LIVE PREVIEW OR SERVED IDENTITY FAILURE / NO RERUN / RETURN TO
   FRESH MISSION`**.

Fresh Combat may use only the exact accepted preview/identity implementation
already defined by `FRSH-003-v1-VR-07`; this variance changes only its output
transport to the scalar schema above. If that implementation cannot be invoked
without invention or non-scalar output, stop and return HOLD to Mission.

No E2E, browser, complete journey, machine summary, verifier, diagnostic,
live-review, content parse, test, validator, build, fixture build, PBA, media
scan, source-map scan, synchronization, hash, quiet, blob, dependency, source,
filename, glob, or protected-path command is authorized. Dynamic Host 05
`<=2ms`, sampled task `<=100ms`, runtime-request, offline-runtime, save,
learning, route, world, and ending proof remain reserved for the later sole
E2E/live checkpoint.

## Preserved boundaries and classifications

This authority has no player-visible delta. Exact first-run address remains
`FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no release-map
or scoreboard cell advances.

These five classifications remain distinct and OPEN; none is waived, merged,
closed, cured, or used as candidate evidence:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**.

All frozen candidate, threshold, player, learning, copy/owner, `L02-02`, strict
`24/24`, evaluator, remediation, evidence/privacy, save/reload/return,
accessibility, focus, responsive, forced-color, reduced-motion, offline,
request, dependency, source-map, PBA, performance, route, world, equal MH-40,
null-delta, `successor=null`, ending, immutable-media `17 / 37,410,731`,
diagnostic non-evidence/non-verifier, and one-E2E meanings remain exact.

No implementation, product, test, manifest, E2E, content, CSS, module,
dependency, package, lockfile, curriculum, evaluator, save, story, route, map,
scoreboard, maturity, media, or other control change is permitted. No media
generation, edit, replacement, variation, import, movement, deletion,
publication, or reveal is authorized. No branch, packet, lesson, hidden-lore
answer, reward, access, identity, authority, world response, successor,
RP-013, or post-ending content may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, predecessor roots, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete.

No Quartermaster, Image Specialist, Intelligence, reveal, maturity advance,
release, schedule, automation, or `FIRST RUN COMPLETE` action is authorized.

Mission Captain signs **`FIRST RUN SHELL READY / PRE-LIVE PREVIEW AND SERVED
IDENTITY ONLY / FRSH-003-v1-VR-36`**.

Commit and push are intentionally suppressed. Mission reports only the final
scalar revision synchronization above; no broader repository-state claim is
made.
