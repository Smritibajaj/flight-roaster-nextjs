// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { flights } from "../services/flights";

const store = configureStore({
  reducer: {
    // Add the API slice to the store
    [flights.reducerPath]: flights.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flights.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
