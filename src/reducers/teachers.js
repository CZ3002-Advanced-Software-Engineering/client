import { USER } from '../constants/actionTypes'
import data from '../tempdata/auth.json'

// eslint-disable-next-line import/prefer-default-export
export const user = (state = { isAuthenticated: false }, action) => {
    switch (action.type) {
        case USER.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case USER.LOAD_SUCCESS:
            return {
                ...state,
                data,
                isLoading: false,
                isError: false,
            }
        case USER.LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case USER.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
            }
        case USER.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                data: action.data,
                domain: action.domain,
            }
        case USER.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
            }
        case USER.LOG_OUT:
            return { isAuthenticated: false }
        default:
            return state
    }
}