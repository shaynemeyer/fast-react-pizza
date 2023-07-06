export interface cartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface cartState {
  cart: shoppingCart;
}

export interface shoppingCart {
  cart: Array<cartItem>;
}
