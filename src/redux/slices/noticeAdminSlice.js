import { createSlice } from "@reduxjs/toolkit";


export default createSlice({
    name: 'noticeAdmin',
    initialState: {
        hidden: false,   // ẩn hiện notice lúc mới vào
        state: false,    // đẩy ra đẩy vào
        status: false,   // notice lỗi hay thành công
        title: '',
        text: '',
    },
    reducers: {
        hiddenNotice: (state) => {
            state.state = false;
            state.hidden = true;
        },
        errorNotice: (state, action) => {
            state.state = true;
            state.status = false;
            state.title = 'fail';
            state.text = action.payload;
            state.hidden = true;
        },
        successNotice: (state, action) => {
            state.state = true;
            state.status = true;
            state.title = 'success';
            state.text = action.payload;
            state.hidden = true;
        }
    }
})