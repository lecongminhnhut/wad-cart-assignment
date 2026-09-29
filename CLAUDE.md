# Development Rules & Invariants

## Stack

- Runtime: Node.js (ES Modules, "type": "module")
- Test runner: Built-in `node:test` and `node:assert/strict`

## Quality Gate Commands

- Run unit tests: `npm test`
- Run gate check (lint + test): `npm run gate`

## Invariants & Strict Rules

- NEVER install or introduce any external dependencies (production or development).
- NEVER return a string from `cartTotal` (e.g. using `toFixed()` without converting back to Number).
- Only modify `src/cart.js` and `test/cart.test.js`.
