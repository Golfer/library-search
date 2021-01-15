import {
    SEARCH_BY_PARAMS_BOOKS_START,
    SEARCH_BY_PARAMS_BOOKS_SUCCESS,
    SEARCH_BY_PARAMS_BOOKS_ERROR
} from '../../actions/actionTypes'

const initialState = {
    search_books: [],
    loading: false
}

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BY_PARAMS_BOOKS_START:
            return {
                ...state, loading: true
            }
        case SEARCH_BY_PARAMS_BOOKS_SUCCESS:
            return {
                ...state,
                search_books: action.books,
                loading: false
            }
        case SEARCH_BY_PARAMS_BOOKS_ERROR:
            return {
                ...state, error: action.error, loading: false
            }
        default:
            return {
                ...state
            }
    }
}