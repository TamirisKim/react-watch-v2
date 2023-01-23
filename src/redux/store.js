import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import watch from "./slices/watchSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    watch,
  },
});
