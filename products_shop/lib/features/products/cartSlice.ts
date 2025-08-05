import { IProducts } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: IProducts[];
}

const initialState: CartState = {
  cart: [],
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
        state.cart.push(action.payload);
      }
    },
  },
});
export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
