import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'playlist',
    initialState: {
        songs: [],
        currentSong: 0,
        isRandom: false,
        isRepeat: false,
        indexSongRandom: [],
    },
    reducers: {
        resetIndexSongRandom: (state, action) => {
            state.indexSongRandom = [];
        },
        pushIndexSongRandom: (state, acion) => {
            state.indexSongRandom = acion.payload;
        },
        nextMusic: (state, action) => {
            state.currentSong = state.currentSong + 1 >= state.songs.length ? 0 : state.currentSong + 1;
            state.isRepeat = false;
        },
        prevMusic: (state, action) => {
            state.currentSong = state.currentSong - 1 < 0 ? state.songs.length - 1 : state.currentSong - 1;
            state.isRepeat = false;
        },
        isRandom: (state, action) => {
            state.isRandom = !state.isRandom;
            state.isRandom || (state.indexSongRandom = []);
        },
        isRepeat: (state, action) => {
            state.isRepeat = !state.isRepeat;
        },
        startPlaylist: (state, action) => {
            state.songs = action.payload.songs;
            state.currentSong = action.payload.index;
            state.indexSongRandom = [];
        },
        changeSong: (state, action) => {
            state.currentSong = action.payload;
        },
    }
})