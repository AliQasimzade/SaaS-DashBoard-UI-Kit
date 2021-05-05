import productReducer from "./productReducer";
import changeListReducer from "./changeListReducer";
import adminTableReducer from "./adminTableReducer";

import { combineReducers } from 'redux';
export default combineReducers({ productReducer, changeListReducer,adminTableReducer });