import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, USER_LOADED } from '../constants'
import jwtDecode from 'jwt-decode'

const initialState = {
    token: localStorage.getItem('token'),
    username: null,
    email: null,
    _id: null,
    success: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_REGISTER:
        case USER_LOGIN:
        case USER_LOADED:
            const user = jwtDecode(action.token)
            return {
                ...state,
                token: action.token,
                username: user.username,
                email: user.email,
                _id: user._id,
                success: action.success
            }
        case USER_LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                username: null,
                email: null,
                _id: null,
                success: false
            }
        default:
            return state
    }
}