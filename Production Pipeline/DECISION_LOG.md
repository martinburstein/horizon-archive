# Two-Team Decision Log

## 2026-07-16 — Fit the complete desktop game shell inside a 16:9 laptop viewport

- Treat Martin's ASUS Vivobook Pro 15 request as a responsive full-viewport contract rather than a physical-inch CSS measurement.
- Use `1920 x 1080` as the representative 16:9 desktop release viewport while keeping the implementation resolution-independent for other 16:9 panels.
- At the representative desktop viewport, the dominant world, dialogue, all current required action controls, and inventory must remain visible inside one browser viewport with no outer horizontal or vertical page scrolling.
- Avoid solving containment through destructive image distortion, illegible controls, excessive dead framing, or a return to fixed legacy canvases.
- Preserve controls at least `44 CSS px`, first-person photoreal world dominance, aspect ratio, keyboard/focus behavior, and stable Terminal geometry.
- Narrow layouts and effective 200% text zoom may reflow vertically; they must preserve containment, readability, focus order, and no horizontal page escape rather than forcing desktop no-scroll behavior.
- Apply this contract to the accepted demo and carry it through the location/visual, gameplay, production-readiness, and future Rail Packet spines.

## 2026-07-16 — Adopt a 12-packet expedition spine and Advance convergence budget

- Use 12 main Rail Packets as the planning target for the first complete expedition, grouped into foundation, expansion, synthesis, and capstone/resolution phases.
- Treat the count as a production constraint rather than immutable canon. Merges, splits, or reordering require a recorded decision and repaired sequence/curriculum dependencies.
- Reserve future packet rows without inventing non-contiguous story content, locations, routes, or code.
- Limit Team 1 to one active Rail Packet and require every Advance tranche to close a named gate, remove an unknown, integrate approved work, or reduce the remaining Gate Review checklist.
- After three consecutive complete Advance cycles on one packet without Gate Review, require a convergence audit and a `CONVERGE`, `TRIM`, `MERGE`, `HOLD`, or `RE-SCOPE WITH MARTIN` decision.
- Prefer integrating or consolidating existing protected seams over adding one module or contract per individual narrative transition.
- Apply the rule immediately to `RP-002`: finish the already-selected comparison transition, then inventory the shortest protected end-to-end path and move toward Gate Review rather than continuing indefinite micro-seam expansion.
- Track breadth in `EXPEDITION_SPINE.md`, convergence in `ADVANCE_BREADTH_GATE.md`, and readiness in `PACKET_SCOREBOARD.md`.
- Use `scripts/validate-horizon-release.ps1` for repeatable automated release checks; full coordinator release still requires `-FullE2E` and a live representative desktop/narrow browser review.

## 2026-07-15 — Establish Builder executable literacy and earned Terminal discovery

- Builders use executable Python as ordinary precise literacy within work, civic practice, maintenance, and landscape operation; it is not a human password scheme pasted onto alien machinery.
- The player writes and runs real Python. The suit renders speech-like Builder content as provisional English and mediates executable work for accessibility, but the project does not explain why the executable notation corresponds exactly to Python.
- A Terminal is a local work coupling. Progress comes from understanding, completing, or debugging an unfinished program whose inputs and result belong to that coupling's visible occupation or landscape function.
- Successful execution must produce a causally related discovery: a surface-safe record, item, route, bounded machine response, restored operation, or newly legible half-finished work. It may not award an unrelated key, accept a password, or open a generic door merely because code ran.
- Reward language should use `execute`, `complete`, `repair`, `resume`, `render`, `reveal`, `compare`, `recover`, or `continue` when those verbs match the observed result. Avoid `password accepted`, `access granted`, `authentication`, `hack`, `crack`, `bypass`, `login`, or `permission earned` unless a later authorized packet establishes that literal function.
- Execution alone does not prove welcome, consent, attention, consciousness, judgment, authorship of the English rendering, or authority over closed/private material. Every packet must state what changed physically, what the suit rendered, what the Pilot inferred, and what remains closed.
- English prose, labels, and accessibility text stay in the suit/expedition layer unless a packet explicitly identifies a provisional translated surface statement. Python and English must never be baked into Builder world plates.
- This decision supersedes earlier project language that framed Python only as a human-authored request translated into otherwise unrelated Builder operations. Existing packets keep their validated skills and state gates, but each must receive a bounded lore/gameplay impact review before new implementation claims final narrative fit.

## 2026-07-15 — Retire fixed legacy viewport gates

- Retire exact `640 x 480`, `640 x 360`, and `320 x 240` presentation requirements as remnants of the abandoned pixel-art expedition.
- Preserve old measurements only as historical evidence or temporary implementation coordinates; they no longer determine acceptance.
- Replace exact-viewport and integer-scale gates with representative desktop/narrow responsive review, readable type, contained controls, accessible target sizes, preserved aspect ratio, and efficient use of available screen space.
- Keep the CRT-inspired surround only as optional visual character. It must not force a small fixed canvas or large black margins.
- Permit Coder to refactor the canonical-frame implementation and regression suite while preserving gameplay, focus, save/resume, privacy, mastery, Demo Tour, first-person composition, and photorealistic art.

## 2026-07-15 — Set a maximum-quality art ceiling

- Establish `Visual Direction/PREMIUM_ART_STYLE_GUIDE.md` as the production-level companion to the active photorealistic charter.
- Judge important views against feature-film environmental VFX credibility and premium current-generation science-fiction game key art, not against earlier Horizon Archive drafts.
- Treat every world plate as a principal visual product requiring deliberate composition, functional design, material development, lighting, artifact cleanup, gameplay-fit review, and final delivery passes.
- Use the strongest available image-generation and editing capabilities with iteration proportional to scene importance. A first plausible generation is exploration, not final art.
- Preserve restraint and visual hierarchy. “No holding back” means no artificial quality ceiling, not maximum object count, effects, saturation, or detail everywhere.
- Require the Storyboarder, Aesthetic Agent, Coder, and Rail Packet workflow to carry this standard into both future rails and the playable demo.

## 2026-07-15 — Replace pixel-art direction with photorealism

- Retire every square-pixel, nearest-neighbor, low-resolution, retro-dithering, Windows-2000-era, Pixel Patrol, and Curse-art-direction requirement.
- Preserve the complete former direction under `Pixelated Draft/`; historical logs may still describe work completed under that strategy.
- Make `Visual Direction/PHOTOREALISTIC_CHARTER.md` the active visual authority for every current and future draft.
- Target premium cinematic photorealism, high-resolution 16:9 source masters, physically credible materials and lighting, artifact-free image generation, and high-quality responsive resampling.
- Keep classic LucasArts influence only in gameplay structure: scene readability, point-and-click exploration, narrative charm, recoverable experimentation, and compact interaction UI.
- Preserve first-person world plates, no protagonist/ship/human trace, Builder functional logic, central-mystery protection, and separate expedition overlays.
- Existing pixel assets may remain temporarily wired into the demo only as explicitly archived migration fallbacks. Their presence is not visual acceptance.
- Supersede `RP001-AESTH-002` as a pixel-consistency requirement. Open `RP001-AESTH-004` for replacement of archived pixel-styled fallback plates with approved photorealistic masters.

Record only decisions that affect multiple roles, packets, or cycles. Specialist details remain in role work logs.

## 2026-07-15 — Adopt two-team pipeline

- New cycles are divided into an Advance Team and a Working Team.
- The Advance Team starts with the nearest unfinished segment beyond the live demo, then advances contiguously toward the ending.
- The Working Team perfects and advances the playable demo.
- Team 1 is Lore Builder Agent, Storyboarder Agent, Curriculum Checker Agent, Gameplay Master Agent, and Coder Agent.
- Storyboarder owns the forward sequence of illustrated first-person locations.
- Curriculum Checker audits Python-to-AI-901 alignment line by line and freezes validated mappings as `SOLIDIFIED`.
- Gameplay Master turns the validated skill into an enjoyable puzzle in partnership with Curriculum Checker.
- Advance Coder creates the protected first playable pass before Working Team polish.
- There is no maximum Advance backlog. The distance between Team 1's railhead and Team 2's live-demo position is expected to grow.
- The coordinator may schedule multiple complete Advance phases for each single methodical Working phase when safe capacity remains.
- Team 1's long-range target is an end-to-end outline of the story, locations, Python puzzles, AI-901 knowledge checks, dependencies, and protected rough route.
- Team 2 deliberately moves more slowly and may spend multiple cycles perfecting one live-demo packet.
- When Team 1 reaches the intended ending it enters continuity-maintenance mode. When Team 2 later catches the completed railhead, the agent workflow is reviewed with Martin.
- Team 2 runs four passes with three unique agents: Player Agent, Coder Agent, Aesthetic Agent, then the same Coder Agent again.
- The Coder Agent may be the same agent used by Team 1, preserving context from Advance construction through Working repair and polish.
- Player Agent completes the loaded puzzles and sends reproducible bugs to Coder Agent.
- Coder Agent repairs gameplay bugs and reloads the demo before aesthetic review.
- Aesthetic Agent reviews the repaired live scene and records visual defects without editing production files.
- Coder Agent implements accepted aesthetic findings, reruns regressions, and performs the final demo reload.
- Every Working Team phase must produce a visible player-facing demo improvement.
- The original nine-agent loop remains preserved in `AGENT_WORKFLOW.md` as a legacy fallback.
