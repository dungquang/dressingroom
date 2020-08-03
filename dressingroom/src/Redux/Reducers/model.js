let initialState = {
    topClothes: '',
    botClothes: ''
};
const ModelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CLOTH':
            state[action.payload.type] = action.payload.img
            return { ...state }//cập nhật lại state
        default:
            return state;
    }
};
export default ModelReducer;
