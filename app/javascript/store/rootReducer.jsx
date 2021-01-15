import {combineReducers} from 'redux'
import booksReducer from "./reducers/booksReducer";
import authenticationReducer from "./reducers/authenticationReducer";
import authorizationReducer from "./reducers/authorizationReducer";
import searchReducer from "./reducers/searchReducer";

export default combineReducers({
    books: booksReducer,
    search_books: searchReducer,
    authentication: authenticationReducer,
    authorization: authorizationReducer,
})