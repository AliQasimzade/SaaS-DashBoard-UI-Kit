import { CHANGE_LIST } from "../actions/actionTypes";

const initialState = {
  key: 0,
};

const changeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return { ...state,
        key: action.key};
    default:
      return state;
  }
};

export default changeListReducer;
