import { RECEIVE_API} from '../actions/index'

const initialState = {
    character: {
        books: [],
        aliases: []
    },
    error: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_API:
            return {
                ...state, character: action.character[0], 
            }
        default:
            return state;
    }
}

export default reducer;