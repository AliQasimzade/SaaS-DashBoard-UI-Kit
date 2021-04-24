import { FETCH_ITEMS } from '../actions/actionTypes';

const initialState = { items: {} };

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ITEMS:
			return { ...state, items: action.data };
		default:
			return state;
	}
};

export default productReducer;
