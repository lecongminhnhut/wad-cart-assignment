import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal } from "../src/cart.js";

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test("the example from the slides", () => {
  const items = [
    { name: "Áo thun", price: 180000, qty: 2 },
    { name: "Sổ tay", price: 45000, qty: 1 },
  ];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal(items, options), 467400);
});

test("returns zero for an empty cart without charges", () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };

  assert.equal(cartTotal([], options), 0);
});

test("waives shipping at the exact free-shipping threshold", () => {
  const items = [{ name: "Balo", price: 500000, qty: 1 }];
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 };

  assert.equal(cartTotal(items, options), 500000);
});

test("charges shipping below the free-shipping threshold", () => {
  const items = [{ name: "Balo", price: 499999, qty: 1 }];
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 };

  assert.equal(cartTotal(items, options), 529999);
});

test("throws RangeError for a negative price", () => {
  const items = [{ name: "Balo", price: -1, qty: 1 }];
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 };

  assert.throws(() => cartTotal(items, options), RangeError);
});

test("throws RangeError for a non-positive integer quantity", () => {
  const items = [{ name: "Balo", price: 100000, qty: 0 }];
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 };

  assert.throws(() => cartTotal(items, options), RangeError);
});

test("throws RangeError for a fractional quantity", () => {
  const items = [{ name: "Balo", price: 100000, qty: 1.5 }];
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 };

  assert.throws(() => cartTotal(items, options), RangeError);
});

test("returns a number rounded to the nearest đồng", () => {
  const items = [{ name: "Balo", price: 100, qty: 1 }];
  const options = { vatRate: 0.085, freeShipFrom: 500000, shipFee: 0 };

  assert.equal(cartTotal(items, options), 109);
  assert.equal(typeof cartTotal(items, options), "number");
});
