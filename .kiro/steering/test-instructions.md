# Test Instructions (Jest)

These instructions apply when writing tests.

## Procedure
1. Identify one public function.
2. Describe behavior in plain language.
3. Write exactly one failing test.
4. Do not write implementation.
5. Stop after the test compiles.

## Structure
- One describe block per function
- One it block per behavior
- No shared state between tests

## Constraints
- All inputs must be explicitly typed
- Do not use `{}` without a type alias
- Avoid mocks unless explicitly allowed
