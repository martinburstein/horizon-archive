# First Run Polish Viability Envelope - Dictionary-Safe ImagesResponse

Envelope ID: `FRVE-005-v10`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Disposition: **`POLISH VIABILITY READY / PT11 ROOT CAUSE REPRODUCED /
GENERIC-DICTIONARY KEY MEMBERSHIP + FORWARD-COMPATIBLE METADATA / 15 OF 15
SYNTHETIC PASS / ZERO API OR MEDIA`**

Source ledger: `FRCA-005-v10`

Date: **2026-08-12**

Exact next recipient: one fresh Operations Planning Major /
`operations_planning_major`

## Science decision

Science reproduced a deterministic PT11 defect: PowerShell 5.1
`JavaScriptSerializer.DeserializeObject` returns generic dictionaries, while
the v10 semantic parser invokes `.Contains(key)`. That method cannot be
resolved on the returned generic dictionary in this host; a valid response can
therefore fail before its fields are adjudicated. This is sufficient root
cause for correction without access to the discarded response.

Official OpenAI documentation defines ImagesResponse data items with optional
`b64_json`, `revised_prompt`, and `url`, and official compatibility guidance
permits adding JSON response properties. A future parser must use exact
case-sensitive key-set membership (`$object.Keys -ccontains $name`), preserve
the existing duplicate-detecting syntax guard, require `created` plus exactly
one data item and one string `b64_json`, and ignore bounded unknown metadata.
Known security/identity-critical fields remain validated.

## Corrected semantic rules

- required: nonnegative integral `created`; exactly one `data` item; string
  `b64_json`;
- optional known echoes, when present: exact `opaque / png / high /
  3840x2160`;
- `url` and `revised_prompt`, when present, must be JSON `null`; any non-null
  value rejects URL substitution or prompt revision;
- usage and token-detail objects may contain future unknown properties, but
  every present known numeric field remains a nonnegative integer;
- unknown top-level, data-item, usage, and token-detail properties are ignored
  only after the unchanged strict syntax/duplicate guard validates the entire
  bounded JSON;
- extra data items, missing/wrong-type payload, duplicate keys, malformed JSON,
  noncanonical/oversize Base64, wrong echoes, URL, revised prompt, or unsafe
  known usage values still reject.

The dictionary-safe semantic fixture passed **15 / 15** positive and
adversarial cases, including future top/data/usage properties, null official
optional image fields, non-null URL/revised-prompt rejection, extra outputs,
missing/wrong payload, fractional identities/usage, wrong size, and exact
known echoes. Credential reads, requests, API sends, media, pixels, temp roots,
and products were all zero.

All corrected 4K budgets and every helper/materialization/PNG/private-review/
canon/validation/cleanup boundary from `FRSH-005-v1-VR-41` remain unchanged.
C1 is consumed and inaccessible.

## Exact Operations handoff

Martin has explicitly approved one further paid attempt. Fresh Operations may
issue one separately versioned finite attempt with no retry, fresh paths, the
dictionary-safe forward-compatible semantic rules above, the exact
`40,500,000 / 40,000,000 / 30,000,000` response/Base64/PNG envelope, and all
unchanged controls. It then routes fresh Mission for new retained sources,
parser fixtures, and a credential-cleared no-send fixture. Science authorizes
no call.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-005-v10 / DICTIONARY-SAFE FORWARD-COMPATIBLE PARSER / 15 OF 15 /
ZERO API OR MEDIA / FRESH OPERATIONS NEXT`**.
