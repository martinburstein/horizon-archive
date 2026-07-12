# Animation and Transitions

## Timing model

Render logic may update at 60 Hz, but drawings change on an authored cadence.

| Motion | Drawing cadence | Typical cycle |
|---|---:|---:|
| Ambient light / Machine pulse | 6-10 fps | 8-16 drawings |
| Character idle | 4-8 fps with 0.8-3 s holds | 6-18 drawings |
| Walk | 10-12 fps | 8 drawings nominal |
| Turn / acquire target | 8-12 fps | 3-6 drawings |
| Talk gesture | 8-12 fps | 4-10 drawing phrases, mouth not phoneme-perfect |
| Operate / pickup | 10-15 fps | 6-16 drawings |
| UI selection | immediate plus 2-frame confirmation | 80-140 ms |
| Warning pulse | 4 fps | two shape-distinct frames |

**Design inference:** representative footage uses deliberately held drawings and large pose changes rather than uniform high-frame interpolation. Exact proprietary frame tables are unknown. These are Horizon rules, not claims about original assets.

## Character motion

- Key poses must read as silhouettes at 1x: contact, passing, recoil, reach, settle.
- Move sprites only on integer coordinates. Subpixel world state may exist for timing but rounds once per frame without filtered interpolation.
- Perspective scale chooses from authored size bands (for example 64, 72, 82, 92, 104 px), never continuous filtered resizing.
- Foot contact may lock for 2-3 drawings during a gesture. Avoid sliding while upper-body animation plays.
- Idle loops include irregular holds so the scene does not pulse mechanically.

## Dialogue and subtitles

- Subtitle onset follows speaker pose by 80-160 ms; line remains at least 900 ms plus 45-65 ms per character, capped at 6.5 s before user advance.
- Maximum three lines in the lower band. Break at sense units, not fixed character count alone.
- New speaker resets the text block; it does not cross-fade.
- Player can advance voiced lines, repeat the last line, and inspect transcript history. Skipping never skips an unacknowledged learning gate.
- Conversation choices appear only after the preceding line reaches its minimum readable hold.

## Scene transitions

- Standard room exit: 6-frame stepped dissolve over 240-360 ms using an original 8 x 8 Machine mask, then 4-frame reveal. No soft fade.
- Adjacent-room quick exit: double activation may skip walk-up but still shows a 120 ms route confirmation.
- Map/travel: hard cut to an original schematic, route line animates in 2 px segments, then stepped dissolve to destination.
- Chapter boundary: 8-16 drawing authored card; input available after 500 ms, skip available after 1.2 s.
- Terminal open: physical node answers for 2 drawings, interface expands from its screen edge in 4 px steps over 180-260 ms. Do not zoom a smooth DOM panel.
- Terminal close: persist allowed session state first, then reverse in 120-180 ms; focus returns to the physical node.

## Cutscene/gameplay boundary

- Cutscenes use the same 640 x 480 pixel grammar and palette limits; they may temporarily reclaim the lower band only when subtitles remain accessible in a dedicated 640 x 48 safe strip.
- On return, restore the band, cursor, prior verb, inventory selection, and focus target before accepting input.
- Show a 2-frame cursor wake or focus bracket so control return is unmistakable.
- `Esc` skips only to the next safe authored state. It cannot bypass a mastery acknowledgement or create an impossible inventory/state combination.

## Reduced motion

- Replace stepped dissolves with a single cut plus 120 ms hold.
- Replace pulses with static shape-distinct states.
- Preserve all semantic changes, labels, and focus transitions.

