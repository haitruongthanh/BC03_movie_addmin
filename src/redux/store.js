import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./slices/demoSlice";
import userSlice from "./slices/userSlice";
import spinnerSlice from "./slices/spinnerSlice";

export const store = configureStore({
  reducer: {
    demoSlice,
    userSlice,
    spinnerSlice,
  },
  //   devTools: false,
});
