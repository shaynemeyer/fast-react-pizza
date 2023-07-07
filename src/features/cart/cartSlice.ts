import { createSlice } from '@reduxjs/toolkit';
import { cartItem, cartState, shoppingCart } from '../../types/cart';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: shoppingCart, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state: shoppingCart, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((c) => c.pizzaId !== action.payload);
    },
    increaseItemQuantity(state: shoppingCart, action) {
      // payload = pizzaId
      const item = state.cart.find((c) => c.pizzaId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item?.quantity * item?.unitPrice;
      }
    },
    decreaseItemQuantity(state: shoppingCart, action) {
      // payload = pizzaId
      const item = state.cart.find((c) => c.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item?.quantity * item?.unitPrice;

        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        }
      }
    },
    clearCart(state: shoppingCart) {
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

export const getCart = (state: cartState) => state.cart.cart;

export const getTotalCartQuantity = (state: cartState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: cartState) =>
  state.cart.cart.reduce(
    (sum: number, item: cartItem) => sum + item.totalPrice,
    0
  );

export const getCurrentQuantityById = (id: number) => (state: cartState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
