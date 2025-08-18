import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/products/cartSlice";
import filterProductsSlice from "./features/products/filterProductsSlice";

const rootReducer = combineReducers({
  cartReducer: cartSlice,
  filterReducer: filterProductsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
