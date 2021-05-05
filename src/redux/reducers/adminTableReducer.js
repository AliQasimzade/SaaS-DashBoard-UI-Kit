import{ADMIN_TABLE} from "../actions/actionTypes";

const initialState = {
    table:0
}

const adminTableReducer = (state = initialState, action) =>{
    switch(action){
        case ADMIN_TABLE:
            return {
                ...state,
                table: action.table
            }

            default:
                return state
    }
}

export default adminTableReducer