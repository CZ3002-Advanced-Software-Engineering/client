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
            alert('Username password entered is incorrect')
        })
}

export const logOut = () => (dispatch) => {
    dispatch({
        type: USER.LOG_OUT,
    })
    alert('You have been logged out')
}

export const fetchUser = (ids) => (dispatch) => {
    dispatch({
        type: USER.LOAD,
    })

    axios
        .get(`${REACT_APP_API}/get_all_items`, {
            params: { collection: 'student', id: JSON.stringify(ids) },
        })
        .then((res) => {
            dispatch({
                type: USER.LOAD_SUCCESS,
                data: res.data,
            })
        })
        .catch((e) => {
            dispatch({
                type: USER.LOAD_FAILURE,
            })
            console.error(e)
        })
}