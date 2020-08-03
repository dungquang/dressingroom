import { combineReducers } from 'redux'
import ModelReducer from './model';
import productReducer from './product';
import CatergoryReducer from './catergory';
import ChoosenCatergoryReducer from './choosenCatergory';


const rootReducer = combineReducers({
    // all child reducers here
    model: ModelReducer,
    products:productReducer,
    catergories:CatergoryReducer,
    choosenCatergory:ChoosenCatergoryReducer

});
export default rootReducer;