import { GET_CHART_DATA, CHANGE_CHART_DATA } from "../actions/actionTypes";

const initialState = { items: {} };

const chartDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHART_DATA:
      return { ...state, items: action.data };
    case CHANGE_CHART_DATA:
      return { ...state, items: action.data };
    default:
      return state;
  }
};

export default chartDataReducer;
