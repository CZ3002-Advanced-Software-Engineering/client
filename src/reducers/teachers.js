import { USER } from '../constants/actionTypes'
import data from '../tempdata/teacher.json'

// eslint-disable-next-line import/prefer-default-export
export const teacher = (state = {}, action) => {
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
        case USER.LOGIN:
            return action.payload
        default:
            return state
    }
}