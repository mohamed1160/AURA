export const calculateTotals = (cart, shippingCost = 0, discount = 0, taxRate = 0.1) => {
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * taxRate;
  const total = Math.max(0, subtotal + shippingCost + tax - discount);
  return { subtotal, tax, total };
};
