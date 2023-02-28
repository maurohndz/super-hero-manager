import { configureStore } from "@reduxjs/toolkit";

// Slice
import userReducer from '../features/user/userSlice'
import charactersApi from '../features/api/charactersApi'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [charactersApi.reducerPath]: charactersApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([charactersApi.middleware]),
});
