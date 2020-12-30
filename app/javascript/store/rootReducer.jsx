import {combineReducers} from 'redux'
import booksReducer from "./reducers/booksReducer";
import authenticationReducer from "./reducers/authenticationReducer";
import authorizationReducer from "./reducers/authorizationReducer";

export default combineReducers({
    books: booksReducer,
    authentication: authenticationReducer,
    authorization: authorizationReducer,
})