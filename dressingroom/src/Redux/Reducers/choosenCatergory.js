const initialState = "topclothes";

const ChoosenCatergoryReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SET_CATERGORY":
            state = action.payload;
            return state;
        default :
        return state;
    }
};
export default ChoosenCatergoryReducer