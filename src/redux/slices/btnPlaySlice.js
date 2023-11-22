import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'btnPlay',
    initialState: {
        isPlay: false,
    },
    reducers: {
        playMusic: (state, action) => {
            state.isPlay = true;
        },
        pauseMusic: (state, action) => {
            state.isPlay = false;
        },
    }
})