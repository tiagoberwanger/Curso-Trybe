import { ADD_INPUT } from '../redux/actionCreators'

const initialState = {
    form: { 
        name: "",
    }
}

 function reducer (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case ADD_INPUT: 
            return {...state, form: { ...state.form, [action.name]: action.value}};
        default:
            return state;
    }
}

export default reducer;