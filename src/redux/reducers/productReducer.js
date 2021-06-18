import { ADD_DATA, UPDATE_DATA } from "../actions/actionTypes";

const initialState = { items: [] };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, items: action.data };
    case UPDATE_DATA:
      return {
        ...state,
        items: [...state.items, action.newData],
      };
    default:
      return state;
  }
};

export default productReducer;
