import axios from 'axios'

import {
    AUTHORIZATION_USER_SUCCESS,
    AUTHORIZATION_USER_ERROR,
    AUTHORIZATION_AUTO_LOGOUT
} from './actionTypes'

import {push} from "react-router-redux";

export function authorization(email, password){
    return async dispatch => {
        const signInParams = {
            user: {email, password}
        }

        try{
            const response = await axios.post('/api/v1/sessions', signInParams)
            const user = response.data

            localStorage.setItem('token', user.access_token)
            localStorage.setItem('csrfToken', user.csrf_token)
            localStorage.setItem('userId', user.email)
            localStorage.setItem('expirationDate', user.access_token_expired_at)

            dispatch(authorizationUserSuccess(user.access_token, user.csrf_token))
            dispatch(autoLogout(user.access_token_expired_at))
            dispatch(push('/books'))
        } catch (e) {
            const errors = e.response.data.errors
            dispatch(authorizationUserError(errors))
        }
    }
}

export function authorizationUserError(errors) {
    return {
        type: AUTHORIZATION_USER_ERROR,
        errors: errors
    }
}

export function authorizationUserSuccess(token, csrfToken) {
    return {
        type: AUTHORIZATION_USER_SUCCESS,
        token: token,
        csrfToken: csrfToken
    }
}

export function autoLogout(expirationTime) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, 3600*1000)
    }
}

export function logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('csrfToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')

    return {
        type: AUTHORIZATION_AUTO_LOGOUT, token: null, csrfToken: null
    }
}

export function authoLogin() {
    return dispatch => {
        const accessToken = localStorage.getItem('token')
        const csrfToken = localStorage.getItem('csrfToken')

        if (!accessToken || !csrfToken) {
            logOut  ()
        } else {
            const expirationDate = localStorage.getItem('expirationDate')
            dispatch(authorizationUserSuccess(accessToken, csrfToken))
            dispatch(autoLogout(expirationDate))
        }
    }

}