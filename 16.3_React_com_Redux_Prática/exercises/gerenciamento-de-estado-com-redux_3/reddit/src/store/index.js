import { createStore, combineReducers } from 'redux'
import loginReducer from '../reducers/login'
import registerReducer from '../reducers/register'

const rootReducer = combineReducers ({ 
    loginReducer,
    registerReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;