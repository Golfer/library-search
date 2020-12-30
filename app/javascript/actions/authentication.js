import axios from 'axios'
import { push } from 'react-router-redux'
import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from './actionTypes'
import {authorizationUserSuccess, autoLogout} from "./authorization";

export function authentication(email, password, first_name, last_name) {

    return async dispatch => {
        const signUpParams = {
            user: {
                email, password, first_name, last_name
            }
        }

        try{
            const response = await axios.post('/api/v1/users', signUpParams)
            const user = response.data
            localStorage.setItem('token', user.access_token)
            localStorage.setItem('csrfToken', user.csrf_token)
            localStorage.setItem('userId', user.email)

            dispatch(registerUserSuccess(user))
            dispatch(authorizationUserSuccess(user.access_token, user.csrf_token))
            dispatch(autoLogout(user.access_token_expired_at))
            dispatch(push('/books'))
        } catch (e) {
            const errors = e.response.data.errors
            dispatch(registerUserError(errors))
        }
    }
}

export function registerUserSuccess(user) {
    return {
        type: REGISTER_USER_SUCCESS,
        user: user,
        errors: {}
    }
}

export function registerUserError(errors) {
    return {
        type: REGISTER_USER_ERROR,
        errors: errors
    }
}