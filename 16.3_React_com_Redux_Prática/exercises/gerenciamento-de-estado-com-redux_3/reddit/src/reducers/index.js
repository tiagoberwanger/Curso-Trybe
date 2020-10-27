import { combineReducers } from 'redux'
import loginReducer from '../reducers/login'
import registerReducer from '../reducers/register'

const rootReducers = combineReducers ({ 
    loginReducer,
    registerReducer,
})

export default rootReducers;