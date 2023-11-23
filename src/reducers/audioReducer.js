
export const audioReducer = (state, action) => {
    const {
        type,
        payload: {
            linkMusic
        }
    } = action;

    switch(type) {
        case 'GET_LINK_MUSIC':
            return {
                ...state,
                linkMusic: linkMusic,
            }
        default:
            return state;
    }
}