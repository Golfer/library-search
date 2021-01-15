import axios from 'axios'
import {
    SEARCH_BY_PARAMS_BOOKS_ERROR,
    SEARCH_BY_PARAMS_BOOKS_START,
    SEARCH_BY_PARAMS_BOOKS_SUCCESS
} from './actionTypes'


export function search_books(type, q) {
    const searchParams = {
        search: {type, q}
    }

    return async dispatch => {
        dispatch(SearchByParamsBooksStart())
        try{
            const response = await axios.post('/api/v1/search', searchParams)
            const data_books = [...response.data.books]
            const searchData = []
            data_books.map(book => {
                searchData.push({
                    id: book.id,
                    title: book.title,
                    description: book.description,
                    author_list: book.author_list
                })
            })

            dispatch(SearchByParamsBooksSuccess(searchData))

        } catch (e) {
            const errors = e.response.data.errors
            dispatch(SearchByParamsBooksError(errors))
        }
    }

}

export function SearchByParamsBooksError(e) {
    return {
        type: SEARCH_BY_PARAMS_BOOKS_ERROR,
        error: e
    }
}

export function SearchByParamsBooksStart() {
    return {
        type: SEARCH_BY_PARAMS_BOOKS_START,
    }
}

export function SearchByParamsBooksSuccess(books) {
    return {
        type: SEARCH_BY_PARAMS_BOOKS_SUCCESS,
        books: books
    }
}
