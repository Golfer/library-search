import {
    FETCH_BOOKS_START,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR
} from '../../actions/actionTypes'

const initialState = {
    books: [],
    showBooks: false
}

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BOOKS_START:
            return {
                ...state, showBooks: false
            }
        case FETCH_BOOKS_SUCCESS:

            return {
                ...state,
                books: action.books,
                showBooks: true,
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state, error: action.error
            }
        default:
            return {
                ...state
            }
    }
}