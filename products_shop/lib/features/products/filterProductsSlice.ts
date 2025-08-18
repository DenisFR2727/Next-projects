import { IProducts } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct extends IProducts {
  amount: number;
}

interface FilterProducts {
  serchProducts: string;
}

const initialState: FilterProducts = {
  serchProducts: "",
};
const filterProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchProducts(state, action: PayloadAction<string>) {
      state.serchProducts = action.payload;
    },
  },
});
export const { setSearchProducts } = filterProductsSlice.actions;
export default filterProductsSlice.reducer;
