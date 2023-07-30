
import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state: { cart: { cart: any; }; }) => state.cart.cart;

export const itemCostsSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.map((item: { product: { price: number; }; quantity: number; }) => ({ 
    ...item, 
    totalCost: (item.product.price * item.quantity).toFixed(2)
  }))
);
export const cartItemSelectorLength = createSelector(
    cartItemsSelector,
    (cartItems) => cartItems.length
  );