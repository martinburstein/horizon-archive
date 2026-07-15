# Photorealistic Visual Direction

Status: **ACTIVE AUTHORITY**
Effective: 2026-07-15

Implementation and review details are governed by the [Premium Art Style Guide](PREMIUM_ART_STYLE_GUIDE.md). When the two documents differ in specificity, follow the stricter quality requirement while preserving gameplay, accessibility, canon, and safety.

## Goal

Create the most convincing, richly detailed Horizon Archive imagery available through contemporary image generation: cinematic photorealism, physically credible materials and lighting, immense environmental scale, and alien technology that rewards close inspection.

The quality target is deliberately maximal: feature-film environment credibility and flagship current-generation game key art in every important playable view. Do not stop at the first attractive generation. Use exploration, selection, focused edits, material/lighting development, artifact cleanup, responsive review, and live integration before approval.

The game remains a first-person point-and-click adventure. Classic LucasArts titles inform interaction pacing, scene readability, recoverable experimentation, and narrative charm only. Their retro rendering is not an active visual target.

## Image standard

- Favor photorealistic or premium cinematic VFX realism over illustration, painterly stylization, low-resolution art, or pixel-art texture.
- Use high-resolution 16:9 masters, normally at least `1920 x 1080` when supported, and retain the largest clean master.
- Use physically plausible global illumination, volumetric atmosphere, material response, depth of field only when it does not obscure gameplay, and restrained cinematic grading.
- Resolve glass, metal, stone, vapor, water, dust, residue, heat distortion, corrosion, repairs, and interfaces as distinct materials with convincing microstructure.
- Preserve crisp photographic detail through high-quality resampling. Do not add nearest-neighbor scaling, deliberate pixel blocks, palette limitation, stepped diagonals, retro dithering, CRT degradation, scanlines, or simulated 1990s rendering.
- Reject AI artifacts: warped repeated geometry, impossible tangencies, melted junctions, illegible pseudo-text, duplicated components, inconsistent shadows, floating objects, incoherent reflections, and detail that has no physical cause.
- Never lower the art bar merely because a scene is “only a background.” World plates are the central visual product.
- “No holding back” does not mean indiscriminate clutter: preserve a strong visual thesis, calm regions, interaction hierarchy, and physical causality.

## Camera and composition

- First-person environmental camera; no visible protagonist, ship, companions, hands, shadow, reflection, or portrait.
- Landscape-first 16:9 composition with a clear primary interaction region, readable route or return cue, and enough negative space for the separate lower interface.
- Use lens choice and perspective to communicate scale without making the scene tactical, isometric, or cinematic in a way that sacrifices playability.
- Environment states may use distinct camera plates when the player's viewpoint changes. Repeated states from the same viewpoint must remain registered enough that changes read causally.

## Builder realism

- Every grand environment is a long-lived collective work with an occupation, resource flow, transformation, distribution network, maintenance culture, and history of revision.
- Advanced technology should look unfamiliar because of its logic—not because it is random, magical, or covered in generic neon.
- Show graceful failure, redundancy, bypasses, sealed former routes, compatible later additions, and multiple material eras.
- Avoid human doors, stairs, rails, desks, chairs, keyboards, warning signs, familiar vehicles, symmetrical machine faces, and eye-level screens.
- Maintain multiple plausible interpretations until story evidence earns certainty.

## Interaction and overlays

- World plates never contain baked UI or readable instructions.
- Expedition dialogue, verbs, inventory, Python editing, assessment feedback, focus states, and accessibility text remain separate responsive interface layers.
- Interactions must be discoverable through composition, silhouette, contrast, localized motion, material routing, and state change—not outlines or floating icons alone.
- Reduced-motion mode uses a still plate that preserves all gameplay meaning.

## Animation

- Build animation from a stable registered master whenever the object or environment should not physically move.
- For the established Terminal loop, keep body geometry, camera, and environment identical; animate only the approved display/membrane region and its physically plausible local light spill.
- Use subtle persistent operation: scan density, phase contours, heat shimmer, vapor, fluid exchange, or maintenance movement. Avoid strobing, magical pulses, and unexplained global relighting.

## Review gate

A current visual draft passes only when:

1. it reads as photorealistic at first glance and survives close inspection;
2. materials and light behave consistently;
3. the Builder system has visible functional logic at multiple scales;
4. the player can identify the primary interaction and route without baked labels;
5. first-person and no-human/no-ship rules pass;
6. image-generation artifacts and pseudo-writing are absent;
7. high-resolution source and provenance are preserved; and
8. the result is original and does not reproduce a copyrighted scene or composition.
9. the draft has completed the multi-pass production sequence in the Premium Art Style Guide; and
10. it would withstand comparison with premium contemporary science-fiction key art rather than only with prior project drafts.
