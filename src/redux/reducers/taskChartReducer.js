import { TASK_CHART_DATA } from "../actions/actionTypes";

const initialState = { data: {} };

const taskChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_CHART_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default taskChartReducer;