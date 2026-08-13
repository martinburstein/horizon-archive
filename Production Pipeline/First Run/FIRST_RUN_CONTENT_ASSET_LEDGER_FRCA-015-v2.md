# First Run Content and Asset Ledger

Ledger ID: `FRCA-015-v2`

Shell: `FRSH-015-v1` plus `FRSH-015-v1-VR-01`

Build identity: `907d009004ad9f606196140a637eb951aa197965`

Disposition: **HOLD / RETRY INPUT UNAVAILABLE / RETURN TO MISSION**

## Authorized scope and preserved product

Quartermaster attempted only the variance-authorized custody restoration gate
before `FRM15-C03-R1`. The retry was not launched. No stochastic ordinal,
private inspection, deterministic-media operation, import, source field, copy,
geometry, provenance, browser action, test, build, or product effect was added.

The v2 registry remains disabled/null, generic rollback remains active,
accepted media remains `24 / 154163567`, and no product file has changed since
the reused Combat candidate. Forbidden QA images, browser/profile/save state,
hidden lore, archives, PDFs/training material, opaque residuals, accepted media
pixels, prior rejected pixels, and unrelated dirt were not inspected or used.

## Exact preflight

- `HEAD == origin/main == 907d009004ad9f606196140a637eb951aa197965`.
- The frozen guide spec/control, custody control, transform control, E02 prompt,
  and all three G01 guide byte/hash identities matched the governing shell.
- E02 remained `1238` bytes / SHA-256
  `2c759d0c29a1c42218fd96e5005e2444a69b0bddcd5998f6667119ce5d9f2445`.
- G01 remained ordered structure, material, protection with hashes
  `974dba59c839c2671d47282c30c0a472e4892de6dd76a278a70a36082379dade`,
  `014628650fa332347f6726c804426f1952dbc1246d07a4a068c4ac60ffb22d2e`,
  and `ccd198f6bfa09ec485fbe482b93720011d4710de1d3a2627b7a22a340562d91e`.
- The append-only ledger remained SHA-256
  `087d59a0c4e893078f41abd0ea297943b821027d5717d29a84416280d820b5b6`.
- Both carried owned leaf directories were empty. Accepted source, private
  acceptance, and selected provenance remained absent. Product diff since the
  Combat candidate was zero.

## Restoration evidence and blocking verifier

The exact `C02` built-in tool original recorded by the prior run remained an
ordinary, single-link, nonreparse local file. It reconciled to the recorded
identity exactly:

```yaml
bytes: 2714889
sha256: 554e87aeaa83e94d37658b00857feded6ce048fc4394b47a161194d69261332e
device: 6349111972173417248
inode: 11821949022134913
links: 1
```

The frozen custody `adopt` command restored those bytes create-new to the
existing `FRM15-E01` ledger path without appending a duplicate node. Adoption
returned the same bytes, hash, and source identity.

The immediately required frozen five-node verifier then returned:

```yaml
pass: false
nodes: 5
retained_node_bytes: 2746722
ledger_sha256: 087d59a0c4e893078f41abd0ea297943b821027d5717d29a84416280d820b5b6
errors:
  - unavailable node FRM15-R01 at its exact ledger path
```

`FRM15-R01` was identity-deleted from custody in the prior authorized hold.
`VR-01` authorizes restoration from the exact C02 tool original **only** and
requires the original five-node chain (`5491701` retained node bytes) before
launch. It does not authorize restoration or substitution of the deleted C01
parent. The required verifier result is therefore impossible under the granted
restoration scope. The variance explicitly classifies any restoration or
verification failure as `HOLD / RETRY INPUT UNAVAILABLE` before `image_gen`.
Availability of the recorded C01 tool-original path is **UNKNOWN / NOT
CHECKED** because `VR-01` authorized inspection and restoration of the C02
tool original only; no C01 output-path access or search was performed.

## Budget and cleanup

```yaml
guide_families: {used: 1, hard_max: 2}
stochastic_calls: {used: 3, remaining: 3, hard_max: 6}
C03_R1: NOT_LAUNCHED
deterministic_operations: {used: 4, remaining: 8}
private_candidate_inspections: {used: 2, remaining: 6}
selected_source: null
product_imports: 0
browser_or_e2e: 0
final_proof: FULL_PROTECTED
```

After recording the verifier result, the restored E01 custody leaf was
containment- and hash-reproved, then deleted exactly. Rejected raster residual
count is zero. G01 remains four files / `32541` bytes; both carried leaf
directories are again empty. The immutable built-in tool original was not
deleted. No tests or builds were invalidated, so existing Combat and predecessor
evidence remains reused rather than relabeled fresh.

## Exact handoff

Return to Mission Captain. Mission may issue a new versioned variance that
lawfully reconciles every file required by the five-node ledger, or retain the
typed hold. Do not launch `C03-R1`, restore an unlisted parent, append a duplicate
node, substitute another input, or use `C04-C06` under `VR-01`. Image Specialist
receives no content-complete candidate.
