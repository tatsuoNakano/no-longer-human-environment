# Global Constraints

## Hard Limits
- 1 function <= 20 lines
- Cyclomatic complexity <= 3
- Max parameters: 2
- No nested ternary
- No early return more than once per function

## Forbidden
- any / unknown
- class (unless explicitly allowed)
- mutation of input arguments
- inline object literals in function calls

## Required
- All functions must be pure unless stated otherwise
- Side effects must be isolated in `/infra`
- All exported functions require tests

- Do not write implementation code unless a failing test exists
- If no test is present, stop and ask to create one
