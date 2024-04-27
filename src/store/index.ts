import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import simpleSlice from "./features/simpleSlice";

const store = configureStore({
  reducer: {
    myslice: simpleSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;