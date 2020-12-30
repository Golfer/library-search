import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR
} from '../../actions/actionTypes'

const initialState = {
    user: {},
    errors: {}
}

export default function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {
                ...state, user: action.user, errors: {}
            }
        case REGISTER_USER_ERROR:
            return {
                ...state, errors: action.errors
            }
        default:
            return {
                ...state
            }
    }
}