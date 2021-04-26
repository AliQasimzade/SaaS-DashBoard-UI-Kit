import productReducer from "./productReducer";
import changeListReducer from "./changeListReducer";
import { combineReducers } from 'redux';
export default combineReducers({ data: productReducer, changeListReducer });