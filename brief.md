# Brief: Implement cartTotal

- Target file: `src/cart.js`
- Constraints: Plain JavaScript (ES Modules), strictly no dependencies.

## Function Contract

`cartTotal(items, options)`

### Inputs:

- `items`: Array of objects `[{ name: string, price: number, qty: number }]`
- `options`: Object `{ vatRate: number, freeShipFrom: number, shipFee: number }`

### Business Rules & Specifications:

1. Empty Cart: If `items` is empty (`items.length === 0`), return `0` immediately (no VAT, no shipping).
2. Input Validation:
   - If any `price < 0`, throw `RangeError`.
   - If any `qty` is not a positive integer (`!Number.isInteger(qty) || qty <= 0`), throw `RangeError`.
3. Calculations:
   - `subtotal` = Sum of all `(price * qty)`.
   - `vat` = `subtotal * options.vatRate`.
   - `shipping` = `0` if `subtotal >= options.freeShipFrom`, else `options.shipFee`.
   - Result must be a `Number` rounded to the whole đồng (`Math.round(...)`).
4. Worked Example:
   - 2 _ 180000 + 1 _ 45000 = 405000 subtotal
   - VAT (8%) = 32400
   - Shipping = 30000 (since 405000 < 500000)
   - Total returns `467400`
