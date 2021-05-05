import { ADD_DATA, CHANGE_LIST } from './actionTypes';

export const addData = (data) => {
	return { type: ADD_DATA, data };
};

export const changeList = (key) => {
	return { type: CHANGE_LIST, key };
};
