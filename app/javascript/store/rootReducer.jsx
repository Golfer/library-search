import {combineReducers} from 'redux'
import booksReducer from "./reducers/booksReducer";

export default combineReducers({
    books: booksReducer
})