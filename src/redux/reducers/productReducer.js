import { ADD_DATA, UPDATE_DATA, DELETE_DATA } from "../actions/actionTypes";

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
    case DELETE_DATA:
      return {
        ...state,
        items: state.items.filter((item) => action.key !== item.id),
      };
    default:
      return state;
  }
};

export default productReducer;
