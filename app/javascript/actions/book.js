import axios from 'axios'
import {
    FETCH_BOOKS_START,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_SUCCESS,
} from './actionTypes'

export function fetchBooks() {
    return async dispatch => {
        dispatch(fetchBooksStart())
        try {
            const response = await axios.get('/api/v1/books')
            const data_books = [...response.data.books]
            const books = []
            data_books.map(book => {
                books.push({
                    id: book.id,
                    title: book.title,
                    description: book.description,
                    author_list: book.author_list
                })
            })

            dispatch(fetchBooksSuccess(books))
        } catch (e) {
            dispatch(fetchBooksError(e))
        }
    }
}

export function fetchBooksStart() {
    return {
        type: FETCH_BOOKS_START
    }
}

export function fetchBooksSuccess(books) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books: books
    }
}

export function fetchBooksError(e) {
    return {
        type: FETCH_BOOKS_ERROR,
        error: e
    }
}