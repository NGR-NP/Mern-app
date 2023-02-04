import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../auth/authSlice";
import cartReducer from "../cart/cartSlice";
import toastReducer from "../custonToast/toastSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const authPersistedReducer = persistReducer(persistConfig, authReducer);
const cartPersistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authPersistedReducer,
    cart: cartPersistedReducer,
    toast: toastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});
export let persistor = persistStore(store);
