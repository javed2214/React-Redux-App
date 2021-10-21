import { USER_REGISTER, USER_LOGIN, USER_LOADED, USER_LOGOUT } from '../constants'
import { url } from '../../api/index'
import axios from 'axios'

export const register = (user) => {
    return (dispatch) => {
        axios.post(`${url}/api/auth/register`, user)
            .then((resp) => {
                if(resp.data.token) {
                    localStorage.setItem('token', resp.data.token)
                    let success = false
                    if(resp.data.success) success = true
                    dispatch({
                        type: USER_REGISTER,
                        token: resp.data.token,
                        success: resp.data.success
                    })
                }
            })
            .catch((err) => {
                console.log('Error in Registering User!')
            })
    }
}

export const login = (user) => {
    return (dispatch) => {
        axios.post(`{url}/api/auth/login`, user)
            .then((resp) => {
                if(resp.data.token){
                    localStorage.setItem('token', resp.data.token)
                    let success = false
                    if(resp.data.success) success = true
                    dispatch({
                        type: USER_LOGIN,
                        token: resp.data.token,
                        success: true
                    })
                }
            })
            .catch((err) => {
                console.log('Error in Logging User!')
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: USER_LOGOUT
        })
    }
}

export const loadUser = () => {
    return (dispatch, getState) => {
        
    }
}