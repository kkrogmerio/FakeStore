import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import { Product, CartState } from '../../types/cart';

const initialState: CartState = {
    products: [],
    cart: [],
    loading: false,
    error: null,
    currentProductId: null,
    currentProduct: null
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchProductById: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.currentProductId = action.payload;
      state.error = null;
    },
    getProductSuccess: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
      state.loading = false;
    },
    getProductFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
  },
});

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFail,
  fetchProductById,
  getProductSuccess,
  getProductFail,
  addToCart,
  removeFromCart,
} = cart.actions;

export default cart.reducer;
