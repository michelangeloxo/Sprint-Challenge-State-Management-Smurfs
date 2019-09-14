import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL } from '../action';

const initialState = {
    smurfs: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
            };
        case FETCH_SMURF_SUCCESS:
            
            return {
                smurfs: action.payload
            }
            case FETCH_SMURF_FAIL:
                return {
                ...state,
            };
            case "DELETE_COMPLETED":
                
                return { ...state, todoList: state.todoList.filter(todo => !todo.completed)
                }; 
        default:
            return state;
    }
};

export default reducer;