import {
  ADD_DATA,
  CHANGE_LIST,
  UPDATE_DATA,
  GET_CHART_DATA,
  CHANGE_CHART_DATA,
  TASK_CHART_DATA
} from "./actionTypes";

export const addData = (data) => {
  return { type: ADD_DATA, data };
};

export const changeList = (key) => {
  return { type: CHANGE_LIST, key };
};
export const updateData = (newData) => {
  return { type: UPDATE_DATA, newData };
};

export const getChartData = (data) => {
  return { type: GET_CHART_DATA, data };
};

export const changeChartData = (data) => {
  return { type: CHANGE_CHART_DATA, data };
};

export const getChartTask = (data) => {
  return {type: TASK_CHART_DATA, data}
}
