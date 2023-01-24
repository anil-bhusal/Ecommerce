import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger'
import userSlice from "./reducers/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import itemSlice from "./reducers/itemSlice";

const persistConfig = {
  key: 'user',
  storage,
}

const reducer = combineReducers({
  user: userSlice,
  item: itemSlice
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store)