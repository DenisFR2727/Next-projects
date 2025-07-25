import { configureStore } from "@reduxjs/toolkit";
const dummyReducer = (state = {}, action: any) => state;
export const store = configureStore({
  reducer: {
    //  products: {},
  },
});
// Infer the type of makeStore
export type AppStore = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
