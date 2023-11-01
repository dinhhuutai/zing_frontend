import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
    }
})

export const persistor = persistStore(store);

export default store;