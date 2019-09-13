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
            console.log("Run CL")
            console.log(action)
            return {
                smurfs: action.payload
            }
            case FETCH_SMURF_FAIL:
                return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;