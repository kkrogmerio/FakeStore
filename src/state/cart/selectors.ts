
import { createSelector } from '@reduxjs/toolkit';
import { Cart } from 'src/types/cart';
const cartItemsSelector = (state: { cart: { cart: Cart[]; }; }) => state.cart.cart;

export const itemCostsSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.map((item: Cart) => ({ 
    ...item, 
    totalCost: parseFloat((item.product.price * item.quantity).toFixed(2))
  }))
);
export const cartItemSelectorLength = createSelector(
    cartItemsSelector,
    (cartItems) => cartItems.length
  );