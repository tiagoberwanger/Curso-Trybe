//importe o método applyMiddleware 
import { 
    createStore, 
    applyMiddleware, 
    combineReducers,
    compose
} from 'redux';
import reducer from '../reducers'
import thunk from 'redux-thunk';

//combinar os reducers
const rootReducer = combineReducers({ reducer });

//aplique o middleware
const store = createStore(
    rootReducer, 
    compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;


