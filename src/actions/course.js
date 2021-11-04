import axios from 'axios'
import { COURSES } from '../constants/actionTypes'

/**
 * get all courses name from indexes
 * @param {Array} indexes array of indexes ID
 * @returns courses name
 */
// eslint-disable-next-line import/prefer-default-export
export const fetchCourses = (indexes) => async (dispatch) => {
    dispatch({
        type: COURSES.LOAD,
    })

    axios
        .get(`${process.env.REACT_APP_API}/get_all_items`, {
            params: {
                collection: 'index',
                id: JSON.stringify(indexes),
            },
        })
        .then((res) => {
            dispatch({
                type: COURSES.LOAD_SUCCESS,
                data: res.data,
            })
        })
        .catch((e) => {
            console.error(e)
            dispatch({
                type: COURSES.LOAD_FAILURE,
            })
        })
}