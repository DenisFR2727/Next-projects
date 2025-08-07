import { IProducts } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct extends IProducts {
  amount: number;
}

interface CartState {
  cart: CartProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<IProducts>) {
      const isAddProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!isAddProduct) {
        state.cart.push({ ...action.payload, amount: 1 });
        state.totalPrice += action.payload.price;
      }
    },
    amountToPriceProduct(
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.amount = action.payload.amount;
      }

      state.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
      );
    },
  },
});
export const { addProductToCart, amountToPriceProduct } = cartSlice.actions;
export default cartSlice.reducer;
