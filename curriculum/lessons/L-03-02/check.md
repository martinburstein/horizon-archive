# L-03-02 check and remediation reference

Passing implementations are `reference_primary.py` and `reference_transfer.py`. Run `python validate_control_flow.py --self-test` to verify both references and unfinished starters.

- `function_signature`: use the required function name and two parameters.
- `uses_for_loop`: visit every input rather than coding sample positions.
- `uses_if_else`: implement both outcomes explicitly.
- `sample_return`: return the complete expected list.
- `boundary_behavior`: `>=` includes equality.
- `unseen_reuse_no_mutation`: use parameters and leave caller inputs unchanged.
- `derived_output_no_bypass`: print the returned variable, not a literal answer.

If only the first result appears, move `return` outside the loop. If only one result total appears, move `append` inside both branches.
