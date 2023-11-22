import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import noticeAdminSlice from "./slices/noticeAdminSlice";
import playlistSlice from "./slices/playlistSlice";
import btnPlaySlice from "./slices/btnPlaySlice";

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}
const persistConfigPlaylist = {
    key: 'rootPlaylist',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);
const persistedPlaylistReducer = persistReducer(persistConfigPlaylist, playlistSlice.reducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
        noticeAdmin: noticeAdminSlice.reducer,
        playlist: persistedPlaylistReducer,
        btnPlay: btnPlaySlice.reducer,
    }
})

export const persistor = persistStore(store);

export default store;