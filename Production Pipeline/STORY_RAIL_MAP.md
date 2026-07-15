# Horizon Archive Story Rail Map

This is the surface-safe, ordered map from the accepted live demo to the intended ending. It tracks adjacency and production maturity without exposing unrevealed story details in chat.

## Position summary

- Team 2 live-demo position: `TBD from latest accepted Demo Increment`
- Team 2 active packet: `NONE`
- Team 1 railhead: `TBD`
- Ordered Advance lead: `0 packets`
- Whole-story rail status: `NOT STARTED | IN PROGRESS | END-TO-END OUTLINED`
- Intended ending represented: `NO`

## Route integrity rules

1. Add packets in story order; never skip an unresolved gap.
2. Every packet's start state must match the preceding packet's end state.
3. Team 1 works the first unfinished row after its current railhead.
4. Team 2 works the oldest `READY FOR WORKING` row after its accepted live-demo position.
5. Team 1 may advance any distance ahead; Team 2 never skips forward to reduce the gap.
6. If Team 2 invalidates an assumption, mark affected future rows `IMPACT REVIEW` without discarding unaffected work.
7. Chat reports use packet IDs and surface-safe working titles only.

## Ordered route

| Order | Packet | Surface-safe chapter/location | Predecessor | Advance status | Working status | Story | Location | Python skill | AI-901 check | Puzzle | Rough code | Dependencies/impact |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `RP-001` | `TBD — nearest segment beyond live demo` | `Current accepted demo boundary` | `SEED` | `NOT READY` | `DRAFT` | `DRAFT` | `DRAFT` | `DRAFT` | `DRAFT` | `NOT STARTED` | Establish exact current boundary |

## Whole-story coverage gate

Mark the route `END-TO-END OUTLINED` only when:

- the intended ending has an ordered row;
- every row has a predecessor and successor relationship;
- every story beat and location has a surface-safe purpose;
- every required Python skill and AI-901 knowledge check has an ordered place;
- every puzzle has entry, success, failure, recovery, and knowledge-evidence contracts;
- cross-packet state and inventory dependencies are identified;
- no unresolved gap exists between the live-demo boundary and ending; and
- all future uncertainties are labeled rather than silently assumed.

After this gate, Team 1 performs continuity and impact maintenance only unless Martin expands or changes the intended story.
