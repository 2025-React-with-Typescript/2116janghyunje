import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { rootReducer } from "./RootReducer";
const initalizeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};
export function useStore() {
  const store = useMemo(() => initalizeStore(), []);
  return store;
}
