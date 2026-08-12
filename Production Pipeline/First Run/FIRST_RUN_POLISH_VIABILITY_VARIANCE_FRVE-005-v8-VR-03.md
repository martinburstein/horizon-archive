# First Run Polish Viability Variance - v8 Corrected Helper Fixture

Envelope ID: `FRVE-005-v8-VR-03`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order / shell / predecessor: `FRWO-005-v8` /
`FRSH-005-v1-VR-36` / `FRCA-005-v7`

Disposition: **`HOLD / SOLE CREDENTIAL-CLEARED FIXTURE STOPPED AT
PT03_HELPER_COMPILE / CURRENT-RUN DLL IDENTITY DIFFERS / HELPER ROOT AND DLL
RETAINED / ZERO REQUEST, SEND, API, MEDIA, OR A1 / FRESH MISSION REQUIRED`**

Date: **2026-08-12**

Science source inspected: `6d3634e81c42390fd8197acd588651b974cc8a38`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science context reuse is explicitly disclosed because the collaboration
service rejected a fresh Science spawn at its thread limit. The role reread
the complete required intake/profile and exact active controls before acting.

Independent preflight passed all five frozen source identities, parser-zero
checks, corrected helper source `1,693 /
98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97`, and
all nine controlled-path absence predicates.

Science then ran exactly one credential-cleared fixture through the retained
stdin parent. The parent started one child. The corrected helper source passed
PT02 and compiled an ordinary `4,096`-byte DLL, but its current-run SHA-256 was:

```text
root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v8-5fbbd31e-8b50-4cb4-a0d3-c2f0d4b9e8aa
dll=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v8-5fbbd31e-8b50-4cb4-a0d3-c2f0d4b9e8aa\Host06FileIdentity.dll
length=4096
attributes=Archive
sha256=5fa8f9dfbb4c29dcb0469286ef27dc4008ed5342a6cb04b72c6a3545dbeb6566
```

This differs from VR-36's frozen historical DLL SHA-256
`39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9`.
The carrier stopped fail-closed at `PT03_HELPER_COMPILE`, exit `87`, with zero
stdout. Because helper identity was not accepted, identity-conditioned cleanup
correctly refused deletion. The exact helper root and DLL remain; the other
seven controlled paths remain absent.
Science has no cleanup authority for the unaccepted DLL identity and performed
no deletion.

There was no retry. Credential presence remained cleared; request
constructions, `SendAsync`, API sends, media/pixel operations, product changes,
and A1 consumption are exact zero.

Variance classification: **`REQUIRED CORRECTION / CURRENT-HOST ADD-TYPE DLL
OUTPUT IS NOT A STABLE CROSS-RUN HASH PREDICATE / MISSION MUST ADJUDICATE THE
RETAINED OWNED HELPER AND DEFINE A SAFE CURRENT-RUN IDENTITY CONTRACT`**.

## Exact Mission handoff

Fresh Mission must preserve the exact retained helper root and DLL and may
inspect only those exact owned entries. It must not delete them until their
ordinary-file, size, source relationship, and safe cleanup authority are
independently established. It must reconcile the dynamic compiler-output
identity contract without weakening source identity, reflection surface,
native handle identity, one-link/non-reparse checks, or identity-conditioned
cleanup. Any corrected shell requires another credential-cleared Science
proof before Quartermaster.

Repository QA quarantine, protected PDF, training tree, Martin's real
browser/profile/save, accepted media, v7 paths/residuals, opaque roots, VR-65,
hidden lore, and unrelated work were not touched. The one-path rail, unchanged
`L02-03`, equal-dignity MH-40 outcomes, RP-012, all null deltas, and
`successor=null` remain immutable. Maturity does not advance.

Office of Science Administrator signs **`HOLD / FRVE-005-v8-VR-03 / SOLE
FIXTURE PT03 / CURRENT-RUN DLL HASH VARIANCE / NO RETRY / MISSION NEXT`**.
