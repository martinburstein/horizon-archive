# Model / Deployment Choices Physical Motif

[![Three rings around a two-part core](model-deployment-rings-64x64.png)](model-deployment-rings-64x64.png)

One native `64 x 64` physical Terminal overlay distinguishes three decision layers around one decision/reason core. It contains no embedded text; live labels are mandatory.

## Semantic geometry

| Layer | Physical ring | Shape/value/pattern cue |
|---|---|---|
| Model | outer ring | continuous beveled octagon; largest coherent boundary |
| Deployment | middle ring | four paired corner brackets with open edge gates |
| Request configuration | inner ring | eight alternating stepped dashes; smallest variable boundary |
| Decision / reason | central core | one bounded rectangle split vertically: filled diamond decision on the left, two unequal reason bars on the right |

Color reinforces the layers but never defines them. Continuous mass, bracket count, dash rhythm, scale, and core partition remain distinct in grayscale.

## Production contract

- **Native asset:** [model-deployment-rings-64x64.png](model-deployment-rings-64x64.png), transparent RGBA.
- **2x nearest-neighbor QA:** [128 x 128](qa/model-deployment-rings-2x-128x128.png).
- **Grayscale QA:** [64 x 64](qa/model-deployment-rings-grayscale-64x64.png).
- **Ring-isolation QA:** [combined / model / deployment / request at 2x](qa/ring-isolation-2x-512x128.png).
- **Renderer:** [build_model_deployment_motif.py](build_model_deployment_motif.py); integer geometry only and no reference asset inputs.
- **AB-01 anchor:** `x=156, y=211` in the `640 x 360` world.
- **Painted bounds:** `x=6–58, y=6–60`; 53 x 55 logical pixels.
- **Hotspot:** retain `x=156, y=205, w=68, h=76`; ≥44 x 44 at native 1x.

The motif replaces only the physical Terminal overlay. It does not alter AB-01's route, landmark, exit, world boundary, or lore. It never enters the interface band, and canonical footer rows `461–479` remain untouched.

## Accessibility boundary

Physical rings communicate nesting and support recognition, but do not replace the exact live labels “Model,” “Deployment,” “Request configuration,” “Decision,” and “Reason.” Runtime focus, spoken names, instructions, and feedback remain required.
