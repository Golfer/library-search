import {
    AUTHORIZATION_USER_SUCCESS,
    AUTHORIZATION_USER_ERROR,
    AUTHORIZATION_AUTO_LOGOUT
} from '../../actions/actionTypes'

const initialState = {
    token: null,
    csrfToken: null,
    user: {},
    errors: {}
}

export default function authorizationReducer(state = initialState, action) {
    switch (action.type) {
        case AUTHORIZATION_USER_SUCCESS:
            return {
                ...state,
                token: action.token,
                csrfToken: action.csrfToken,
            }
        case AUTHORIZATION_USER_ERROR:
            return {
                ...state, error: action.error
            }
        case AUTHORIZATION_AUTO_LOGOUT:
            return {
                ...state, token: null,
                csrfToken: null
            }
        default:
            return {
                ...state
            }
    }
}


