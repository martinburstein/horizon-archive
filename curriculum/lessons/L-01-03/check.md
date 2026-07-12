# L-01-03 Retrieval and Mastery Key

## Retrieval answers

1. The last traceback line normally names the error type and gives a short message.
2. It gives the source location Python was using; inspect that line first.
3. One controlled change lets the rerun test a specific explanation. Random edits hide which change mattered and can add new errors.
4. No. The calibration copy is separate from world navigation. The completed route remains open.

## Primary diagnosis

- Type: `NameError`
- Line: `2`
- Undefined name: `route_lable`
- Repair: change it to the assigned variable `route_label`
- Output: `ROUTE VERIFIED`

## Transfer diagnosis

- Type: `IndentationError`
- Line: `3`
- Repair: indent `print("CALIBRATION READY")` by four spaces so it belongs to the `if` block
- Output: `CALIBRATION READY`

## Mastery rule

Require both diagnoses before edit, 8/8 on both forms, 4/4 retrieval, and no unresolved critical tag. Wrong attempts preserve the working copy, completed checks, route access, and all required learning content.

