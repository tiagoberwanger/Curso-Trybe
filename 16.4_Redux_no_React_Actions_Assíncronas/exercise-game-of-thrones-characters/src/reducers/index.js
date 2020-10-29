import { RECEIVE_API, REQUEST_API, ERROR_API} from '../actions/index'

const initialState = {
    character: {
        aliases: [],
        books: [],
    },
    loading: false,
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_API:
            return {
                ...state, 
                loading: true,
            }
        case RECEIVE_API:
            return {
                ...state, 
                loading: false, 
                character: action.character[0], 
            }
        case ERROR_API:
            return {
                ...state, 
                loading: false, 
                error: action.error, 
            }
        default:
            return state;
    }
}

export default reducer;