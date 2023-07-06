import { createSlice } from '@reduxjs/toolkit';
import { cartItem, cartState } from '../../types/cart';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((c) => c.pizzaId === action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((c) => c.pizzaId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item?.quantity * item?.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((c) => c.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item?.quantity * item?.unitPrice;
      }
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state: cartState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: cartState) =>
  state.cart.cart.reduce(
    (sum: number, item: cartItem) => sum + item.totalPrice,
    0
  );
