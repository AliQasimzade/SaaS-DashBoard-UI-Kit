import productReducer from "./productReducer";
import changeListReducer from "./changeListReducer";
import chartDataReducer from "./chartDataReducer";
import taskChartReducer from "./taskChartReducer";
import { combineReducers } from "redux";

export default combineReducers({
  productReducer,
  changeListReducer,
  chartDataReducer,
  taskChartReducer,
});
