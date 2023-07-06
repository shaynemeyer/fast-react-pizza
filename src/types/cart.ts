export interface cartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface cartState {
  cart: {
    cart: Array<cartItem>;
  };
}
