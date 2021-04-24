import { FETCH_ITEMS } from './actionTypes';

export const addData = (data) => {
	return { type: FETCH_ITEMS, data };
};

