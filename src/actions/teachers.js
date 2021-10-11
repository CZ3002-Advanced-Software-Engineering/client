import axios from 'axios'
import { USER } from '../constants/actionTypes'

const { REACT_APP_API } = process.env

export const login = (username, password, domain) => async (dispatch) => {
    dispatch({
        type: USER.LOGIN_REQUEST,
    })

    axios
        .get(`${REACT_APP_API}/login`, {
            params: {
                username,
                password,
                domain,
            },
        })
        .then((res) => {
            dispatch({
                type: USER.LOGIN_SUCCESS,
                data: res.data,
                domain,
            })
        })
        .catch((e) => {
            dispatch({
                type: USER.LOGIN_FAILURE,
            })
        })
}

export const logOut = () => (dispatch) => {
    dispatch({
        type: USER.LOG_OUT,
    })
}