import { RECEIVE_API, ERROR_API} from '../actions/index'

const initialState = {
    character: {},
    loading: true,
    error: ''
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_API:
            return {
                ...state, 
                character: action.character[0], 
                loading: false, 
            }
        case ERROR_API:
            return {
                ...state, 
                error: action.error, 
            }
        default:
            return state;
    }
}

export default reducer;