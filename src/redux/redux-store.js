import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import appReducer from "./appReducer";

let reducers = combineReducers( {
    app: appReducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunkMiddleware)))

export default store