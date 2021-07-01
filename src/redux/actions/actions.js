import {
  ADD_DATA,
  CHANGE_LIST,
  UPDATE_DATA,
  DELETE_DATA
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


export const deleteData = (key) => {
  return {type:DELETE_DATA, key}
}
