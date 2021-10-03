import { USER } from '../constants/actionTypes'
import data from '../tempdata/teacher.json'

export const fetchUser = () => (dispatch) => {
    dispatch({
        type: USER.LOAD,
    })
    dispatch({
        type: USER.LOAD_SUCCESS,
        data,
        isError: false,
    })
}

export const login = () => ({
    type: USER.LOGIN,
    payload: 'i am in login',
})