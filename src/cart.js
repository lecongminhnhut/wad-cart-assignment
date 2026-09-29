// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  if (!items || items.length === 0) {
    return 0;
  }

  const vatRate = options?.vatRate ?? 0;
  const freeShipFrom = options?.freeShipFrom ?? 0;
  const shipFee = options?.shipFee ?? 0;

  const subtotal = items.reduce((total, item) => {
    if (item.price < 0 || !Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(
        "price must be non-negative and qty must be a positive integer",
      );
    }

    return total + item.price * item.qty;
  }, 0);

  const shipping = subtotal >= freeShipFrom ? 0 : shipFee;
  return Math.round(subtotal + subtotal * vatRate + shipping);
}
