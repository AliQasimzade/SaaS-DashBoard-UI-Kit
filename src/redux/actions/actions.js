import { FETCH_ITEMS,CHANGE_LIST } from './actionTypes';

export const addData = (data) => {
	return { type: FETCH_ITEMS, data };
};

export const changeList = (key) =>{
	return { type:CHANGE_LIST, key};
}

