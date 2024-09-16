import { configureStore } from "@reduxjs/toolkit";
import productPageReducer from "./productPageSlice";

export const store = configureStore({
  reducer: {
    productPage: productPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
