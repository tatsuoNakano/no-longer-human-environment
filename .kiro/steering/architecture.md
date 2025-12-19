# Architecture Steering

This project assumes code is written by AI.

## Core Structure
- domain: pure logic, no side effects
- application: orchestration only
- infra: side effects only

## Dependency Direction
infra -> application -> domain

## Design Preference
- Prefer composition over abstraction
- Prefer duplication over premature reuse
- Prefer explicit data over implicit behavior

## When in Doubt
Choose the simplest structure that satisfies constraints.
