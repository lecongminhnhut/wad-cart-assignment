### 2026-09-30 — cartTotal initial implementation

Tool: GPT-5.6 Luna.
Asked for: Implement `cartTotal` in `src/cart.js` and write unit tests in `test/cart.test.js` based on `brief.md` and `AGENTS.md`.
Changed: Reviewed the diff and accepted agent's use of `reduce` with `Math.round()` to return a whole number (avoiding the `toFixed` string trap).
Not used: Agent missed testing fractional quantities (`qty: 1.5`) and lacked defensive fallbacks for empty options.

### 2026-09-30 — Re-briefing for defensive code and missing tests

Tool: GPT-5.6 Luna.
Asked for: Re-briefed to add defensive checks (`!items`, fallback options) in `src/cart.js` and an isolated test for `qty: 1.5` in `test/cart.test.js`.
Changed: Added `!items` check and `?? 0` fallbacks to prevent runtime crashes; added `throws RangeError for a fractional quantity` test.
Not used: Grouping multiple assertions into existing tests; kept each test failing for exactly one reason.
