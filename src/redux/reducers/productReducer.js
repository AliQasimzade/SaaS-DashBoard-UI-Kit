import { ADD_DATA } from '../actions/actionTypes';

const initialState = { items: [] };

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DATA:
			return { ...state, items: action.data };
		default:
			return state;
	}
};

export default productReducer;
