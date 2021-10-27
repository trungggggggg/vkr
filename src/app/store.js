import { configureStore } from "@reduxjs/toolkit";
import tactlReducer from "components/TimerA/tactlSlice";
export const store = configureStore({
  reducer: {
    tactl: tactlReducer,
  },
});
