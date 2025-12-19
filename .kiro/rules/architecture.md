# Architecture Rules

## Layering
- domain: pure logic only
- application: orchestration only
- infra: side effects only

## Dependency Direction
infra -> application -> domain

Domain must not import:
- fs
- process
- dotenv
- external libraries (except zod)
