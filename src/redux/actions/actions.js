import { FETCH_ITEMS,CHANGE_LIST, ADMIN_TABLE } from './actionTypes';

export const addData = (data) => {
	return { type: FETCH_ITEMS, data };
};

export const changeList = (key) =>{
	return { type:CHANGE_LIST, key};
}

export const adminTable = (table) =>{
	return {type:ADMIN_TABLE, table}
}
