# TypeScript Rules

- Use `type` over `interface`
- Explicit return types are mandatory
- All unions must be discriminated
- No optional properties (`?`) unless justified
- Prefer readonly arrays and objects

## Example

BAD:
function fn(x) { return x }

GOOD:
type Input = { readonly value: number }

const fn = (input: Input): number => {
return input.value
}
