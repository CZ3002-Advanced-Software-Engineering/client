import { USER } from '../constants/actionTypes'
import data from '../tempdata/auth.json'

export const fetchUser = (username) => (dispatch) => {
    //    simulate axios fetching error
    const error = false

    dispatch({
        type: USER.LOAD,
    })

    if (error) {
        dispatch({
            type: USER.LOAD_FAILURE,
            data: {},
        })
    } else {
        dispatch({
            type: USER.LOAD_SUCCESS,
            data,
            isError: false,
        })
    }
}

export const login = (username, password, domain, data) => async (dispatch) => {
    dispatch({
        type: USER.LOGIN_REQUEST,
        username,
        password,
    })

    const user = await data.filter(
        (user) =>
            user.username === username &&
            user.password === password &&
            user.domain === domain
    )

    if (user.length === 0) {
        dispatch({
            type: USER.LOGIN_FAILURE,
        })
    } else {
        dispatch({
            type: USER.LOGIN_SUCCESS,
            data: user[0],
        })
    }
}