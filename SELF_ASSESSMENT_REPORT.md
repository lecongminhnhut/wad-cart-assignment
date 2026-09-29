# Self-assessment - IA#1

Submitted by: 24120211 - Lê Công Minh Nhựt
Total I claim: 95/100

| Criterion   | Max | Claim | Evidence                                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | --- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Behaviour   | 30  | 30    | `src/cart.js`: returns 0 for empty cart (`!items \|\| items.length === 0`); throws `RangeError` on negative price (`item.price < 0`) and non-positive/non-integer qty (`!Number.isInteger(item.qty) \|\| item.qty <= 0`); waives shipping when `subtotal >= freeShipFrom`; returns a whole number via `Math.round()`.                                                          |
| Tests       | 20  | 20    | `test/cart.test.js`: 8 isolated tests covering worked example (467400), empty cart (0), exact free-shipping threshold (500000), below threshold (529999), negative price (`RangeError`), non-positive integer qty (`RangeError`), fractional quantity (`qty: 1.5` -> `RangeError`), and numeric return type (`typeof === "number"`). `npm run gate` reports all tests passing. |
| The harness | 20  | 18    | `CLAUDE.md` defines stack, commands, and strict 'NEVER' invariants; `package.json` includes `"gate": "npm run lint && npm test"`; `.github/workflows/ci.yml` runs gate automatically on push and reports green. Claiming 18/20 as gate uses built-in node checks instead of a standalone linter package.                                                                       |
| The brief   | 15  | 14    | `brief.md` specifies allowed file modifications (`src/cart.js`), zero external dependencies, function signature `cartTotal(items, options)`, RangeError error conditions, and the worked example. Claiming 14/15 as brief went through one manual revision.                                                                                                                    |
| AI-LOG.md   | 15  | 13    | `AI-LOG.md` documents tool usage, prompts, diff reviews, and re-briefing steps to handle fractional quantities. Claiming 13/15 as log entries are kept concise per slide instructions.                                                                                                                                                                                         |

## What I did not manage

All core functionality and test suites pass completely. Initially, the agent missed defensive checks for missing options and omitted testing fractional quantities (`qty: 1.5`), which required a second re-briefing prompt to resolve.

## What I would do differently

Set up a Git pre-commit hook to run `npm run gate` automatically before every commit.
