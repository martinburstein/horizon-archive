# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / SCALAR-NORMALIZED
SYNCHRONIZATION LOCALIZATION ONLY / FRSH-003-v1-VR-34`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Exact next owner: **fresh Combat Engineer**

Immediate control: `FRSH-003-v1-VR-34`

Immediate return / predecessor authority: Combat VR-33 synchronization-
localization scalar-comparison execution-control failure / `FRSH-003-v1-VR-33`

Mission VR-34 inspected source:
`75c7e4b0c4538de97078e551e367e6cbb503b5e3`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

VR-34 independently adjudicates the VR-33 Combat return
`headMatch=false head=75c7e4b0c4538de97078e551e367e6cbb503b5e3 headExit=0`.
The emitted hash textually equals the expected source, so the false comparison is an
internally inconsistent scalar and an execution-control failure, not identity-drift
evidence. No later VR-33 scalar is accepted.

Fresh Combat may run only the VR-34 sequence. Every native command must be the sole
native command in its own execution-tool call. Capture and suppress its complete
output and diagnostics, then capture its value and `$LASTEXITCODE` in that same call.
For `HEAD`, `origin/main`, and every blob call, select only the first captured line,
cast it to string, trim it, require exit `0` and exactly 40 hexadecimal characters,
normalize it to lowercase for emission, and compare by
`[StringComparison]::OrdinalIgnoreCase`. Never compare the raw array or wrapped
stream.

The required resolution pattern is:

```powershell
$raw = @(& git rev-parse HEAD 2>$null)
$exit = $LASTEXITCODE
$value = ([string]($raw | Select-Object -First 1)).Trim()
$match = [string]::Equals($value, $expected, [StringComparison]::OrdinalIgnoreCase)
```

Apply the identical normalization to `origin/main` and all six literal blob calls.
For tracked and cached quiet, capture `$LASTEXITCODE` immediately after the native
command in the same call.

Emit only, in order:

```text
headMatch=<true|false> head=<40-lowercase-hex|null> headExit=<integer|null>
originMainMatch=<true|false> originMain=<40-lowercase-hex|null> originMainExit=<integer|null>
trackedQuietExit=<integer|null>
indexQuietExit=<integer|null>
frrcBlobMatch=<true|false> frrcBlob=<40-lowercase-hex|null> frrcBlobExit=<integer|null>
e2eBlobMatch=<true|false> e2eBlob=<40-lowercase-hex|null> e2eBlobExit=<integer|null>
staticTestBlobMatch=<true|false> staticTestBlob=<40-lowercase-hex|null> staticTestBlobExit=<integer|null>
appBlobMatch=<true|false> appBlob=<40-lowercase-hex|null> appBlobExit=<integer|null>
drownedArchiveBlobMatch=<true|false> drownedArchiveBlob=<40-lowercase-hex|null> drownedArchiveBlobExit=<integer|null>
packageBlobMatch=<true|false> packageBlob=<40-lowercase-hex|null> packageBlobExit=<integer|null>
```

Exact pass requires both revision matches `true`, both revision hashes equal the
post-commit expected source reported by Mission, every native exit `0`, both quiet
exits `0`, all six blob matches `true`, and these exact frozen hashes:

```text
frrcBlob=fc91a863be99b11c44405071324e3502b959e621
e2eBlob=0b72f1463c729a8e22337af0115c3316652c2565
staticTestBlob=5910af4e4f6754acbc5193ff021f374fe90a96f2
appBlob=802ceffb1a07c3b166dc2f7f06ab38138dc37596
drownedArchiveBlob=1bc2f9d93c59a396ddee7ed83cde1600f76b62e7
packageBlob=2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da
```

Stop at the first non-exact scalar. Do not emit a literal operand, pathname,
filename, diagnostic, command, timing, captured stream, or other field. Do not
inspect or claim untracked cleanliness.

Stop immediately after the sixth exact blob line. Run no fixture, PBA, build, test,
validator, preview, served identity, port/PID, containment, root, browser, E2E,
diagnostic, live-summary verification, cleanup, or live review. Perform no repository
write and run no post-check command. Return to fresh Mission.

VR-22 focused `68/68`, related `74/74`, cold full `972/972`, validators `40/40`;
VR-30 six exact frozen blob scalars; and VR-30 production build
`moduleCount=1 builtSubstringCount=1 nativeExit=0` recorded in `8.8s` remain accepted
without rerun. The fixture and scalar PBA remain pending. Dynamic Host 05 `<=2ms`,
sampled task `<=100ms`, runtime request, and offline runtime gates remain reserved for
the later sole E2E/live checkpoint.

All OPEN divergences remain separate and OPEN:

- **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN / VR-17`**;
- **`UNAUTHORIZED DIVERGENCE / BROAD REPOSITORY FILENAME ENUMERATION / OPEN /
  VR-23`**;
- **`UNAUTHORIZED DIVERGENCE / UNTRACKED PATHNAME ENUMERATION / OPEN / VR-24
  COMBAT ATTEMPT`**;
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-25
  MISSION`**; and
- **`UNAUTHORIZED DIVERGENCE / LITERAL CONTROL PATHNAME OUTPUT / OPEN / VR-28
  MISSION STAGING`**.

None is waived, merged, closed, cured, or used as candidate evidence.

All frozen candidate, threshold, player, learning, accessibility, privacy, save,
route, world, equal MH-40, null-delta, `successor=null`, ending, immutable-media
`17 / 37,410,731`, diagnostic non-evidence/non-verifier, and one-E2E meanings remain
exact.

No Quartermaster, Image Specialist, Intelligence, release, schedule, automation, or
`FIRST RUN COMPLETE` action is authorized.

The dedicated Mission shell/handoff commit and final `HEAD == origin/main` proof are
reported from Git after commit because this handoff cannot contain the hash that first
contains itself.
