import { RootState } from "@/lib/store";

export const selectOrders = (state: RootState) => state.cartReducer.cart;
export const selectShipping = (state: RootState) => state.cartReducer.shipping;
export const selectTotalPrice = (state: RootState) =>
  state.cartReducer.totalPrice;
