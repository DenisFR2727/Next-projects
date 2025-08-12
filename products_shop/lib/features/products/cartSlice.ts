import { IProducts } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct extends IProducts {
  amount: number;
}

interface CartState {
  cart: CartProduct[];
  totalPrice: number;
  shipping: number;
  shippingPriceTotal: number;
  togglePanel: boolean;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  shipping: 10,
  shippingPriceTotal: 0,
  togglePanel: false,
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
      state.totalPrice = state.totalPrice + state.shipping;
    },
    removeOrder(state, action: PayloadAction<number>) {
      const isProduct = state.cart.some(
        (product) => product.id === action.payload
      );
      if (!isProduct) return;

      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.totalPrice = state.cart.reduce(
        (acc, next) => acc + next.price * next.amount,
        0
      );
      state.totalPrice = state.totalPrice + state.shipping;
    },
    togglePanel(state, action: PayloadAction<boolean>) {
      state.togglePanel = action.payload;
    },
  },
});
export const {
  addProductToCart,
  amountToPriceProduct,
  removeOrder,
  togglePanel,
} = cartSlice.actions;
export default cartSlice.reducer;
