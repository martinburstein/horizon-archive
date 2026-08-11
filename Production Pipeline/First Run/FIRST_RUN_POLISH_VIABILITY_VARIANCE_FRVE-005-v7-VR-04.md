# Horizon Archive First Run Polish Viability Variance

Variance ID: `FRVE-005-v7-VR-04`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order: `FRWO-005-v7 / Stranded Lens Cradle - Direct Image API Source,
Native Handle Identity, and Fixed Lesson Integration`

Disposition: **`HOLD / FAILED PRE-HELPER STATEMENT AND EXCEPTION NOT
RETAINED / SYNTHETIC EXECUTION TRANSPORT VIABLE / NO PRODUCTION RETRY`**

Date: **2026-08-11**

Science source inspected:
`6652c0545cf0449f2aa00e08a8fc328a6c77819f`

Quartermaster return: `FRCA-005-v3`

Decisive prior viability: `FRVE-005-v7-VR-03`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-08`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science independently reproduced the authorized nonsecret execution-control
shape with a short synthetic script and exact Windows PowerShell
`5.1.26100.8875`, Desktop edition, in a 64-bit process. Before launching that
child, the diagnostic process removed `OPENAI_API_KEY` from its own process
environment without reading it. The child accessed only one task-specific
environment value containing synthetic script text. It made no network call,
constructed no request, and touched no helper, live, media, product, residual,
or protected path.

The following stages passed:

```text
task-specific inherited script present
-> Language.Parser.ParseInput reports zero parse errors
-> ScriptBlock.Create succeeds
-> call-operator invocation enters and exits the synthetic block
```

Therefore the retained failure is not attributable to environment inheritance,
the PowerShell parser, `ScriptBlock.Create`, or call-operator invocation as a
class. The exact failed production statement remains unknown.

The Quartermaster return intentionally retained only
`STABLE_LOCAL_FAILURE`, two absence booleans, and no script, stage marker,
exception type, fully-qualified error ID, or predicate ID. That retention
firewall correctly protected diagnostics, but it also removed the minimum
nonsecret evidence needed to identify the first failed pre-helper statement.
Science may not reconstruct or attribute an unretained production statement
from a synthetic candidate alone.

Science therefore issues **`HOLD`**. No corrected production retry is
authorized by this variance.

Variance classification: **`REQUIRED CORRECTION / PRE-HELPER EXECUTION
CONTROL EVIDENCE AVAILABILITY / OPEN`**.

## Exact localized PS5.1 hazard and evidence limit

Synthetic reflection proved that Windows PowerShell 5.1 `New-Item` exposes a
`Path` parameter and does not expose a `LiteralPath` parameter. A no-write
synthetic invocation of:

```powershell
New-Item -ItemType Directory -LiteralPath 'synthetic-never-resolved' -WhatIf
```

failed during parameter binding with the stable
`NamedParameterNotFound` family before filesystem path resolution or root
creation. In the same one-process synthetic block, this form created one
disposable short-path directory successfully:

```powershell
[void][System.IO.Directory]::CreateDirectory($syntheticProbeRoot)
```

The harness then deleted only that exact empty directory with the
nonrecursive `Directory.Delete(path, false)` form and proved it absent.

This is a real, reproducible PS5.1 pre-creation hazard and a viable primitive
for a later exact shell. It is **not** evidence that the unretained
Quartermaster block used `New-Item -LiteralPath`; neither `FRCA-005-v3` nor
another authorized artifact contains that failed statement. Treating the
synthetic match as historical fact would invent evidence. It cannot support a
production retry by itself.

## Required shell-level correction before fresh Science

Mission is the earliest owner of the underspecified cross-discipline
production-host contract. A lawful repair must issue a new versioned shell
variance that freezes, before any fresh Quartermaster action:

1. the exact short launcher and exact task-specific environment-variable name;
2. the exact pre-helper script bytes, byte length, and lowercase SHA-256, with
   no source file and no secret, credential, header, request, response, or
   payload value in that script identity evidence;
3. one exact parser/invocation form and one exact helper-root creation
   primitive compatible with Windows PowerShell 5.1;
4. stable nonsecret predicate IDs for environment retrieval, parser success,
   invocation entry, version, bitness, pre-existing-root rejection,
   root-creation entry, and root-creation completion;
5. an outer retention rule limited to the earliest stable predicate ID,
   exception class or fully-qualified error ID from an allowlist, and exact
   cleanup/absence booleans, with no path, stack, message, source excerpt,
   native tuple, diagnostic body, secret, or payload retention; and
6. a mandatory fresh Science no-request fixture over the exact frozen form
   before Mission may authorize a fresh Quartermaster retry.

Mission may use the synthetically proved `Directory.CreateDirectory` primitive
as a candidate, but only a new exact shell plus fresh Science validation can
make it production authority. Mission may not route directly to Quartermaster
from this HOLD.

## Ordinal, root, cleanup, and protected-state proof

Independent exact-path checks after the synthetic harness proved:

```text
syntheticProbeRootAbsent=true
helperRootAbsent=true
helperDllAbsent=true
liveRootAbsent=true
ordinal2StageAbsent=true
ordinal2TargetAbsent=true
ordinal3StageAbsent=true
ordinal3TargetAbsent=true
productRasterAbsent=true
productProvenanceAbsent=true
```

Direct Image API sends remain exact `0`. Ordinal `1` remains permanently
consumed, opaque, inaccessible, and unchanged. Ordinals `2` and `3` remain
unstarted, unconsumed, and unavailable. No credential was read; no endpoint,
header, request object, serialized request, response parser, live root,
`SendAsync`, attempt handle, media byte, pixel, preview, import, copy,
provenance, product test, build, browser, or E2E action occurred.

The immutable manifest was independently re-read only as JSON control data.
Its file SHA, stored count, stored byte sum, and canonical stored-entry digest
remain exact. Accepted-media byte streams and pixels were not opened. The
runtime selected-source guard still admits only exact ordinals `2` and `3`.

Repository QA quarantine, the protected PDF, training tree, Martin's real
browser/profile/save, hidden lore, accepted-media pixels, OS-temp parent,
ordinal-1 residual, managed directory, user/untracked work, and VR-65 were not
opened, enumerated for content, changed, or targeted. The thirteen inherited
process records and separate Commandant search-scope record remain separate
and OPEN.

## Maturity, changes, and exact Mission handoff

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression remains `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`.

Science changed no product, test, runtime, lesson, save, media, manifest,
candidate, map, scoreboard, maturity, process classification, residual,
schedule, or automation state. The only repository changes authorized for
this stage are this variance and synchronized `NEXT_INSTANCE_HANDOFF.md`.

One fresh Mission Captain / `mission_captain` reads the complete current
intake, full Mission profile, this variance, `FRCA-005-v3`, complete
`FRWO-005-v7`, decisive `FRVE-005-v7-VR-03`, complete effective shell,
treatment, blueprint, `FRCE-005-v1-VR-05`, immutable `FRAM-001-v1`, and the
exact pre-helper execution boundary. Mission issues one versioned shell
`REVISE` or `HOLD` result that either freezes the complete diagnostic-safe
execution-control contract above and returns it to fresh Science, or preserves
the stop. It may not authorize Quartermaster, execute a helper, allocate a
controlled root, read a credential, call the API, consume an ordinal, inspect
media/pixels, change product/tests, run E2E, reveal, advance maturity, close an
OPEN record, access a residual or VR-65, schedule, automate, push, release, or
call `FIRST RUN COMPLETE`.

Office of Science Administrator signs **`HOLD /
FRVE-005-v7-VR-04`** from exact source
`6652c0545cf0449f2aa00e08a8fc328a6c77819f`.
