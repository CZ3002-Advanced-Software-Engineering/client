import { USER } from '../constants/actionTypes'

const user = (state = { isAuthenticated: false }, action) => {
    switch (action.type) {
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

export default user