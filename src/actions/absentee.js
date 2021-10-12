import axios from 'axios'
import { ABSENTEE } from '../constants/actionTypes'

// eslint-disable-next-line import/prefer-default-export
export const fetchAbsentees = (course, index, date) => (dispatch) => {
    dispatch({
        type: ABSENTEE.LOAD,
    })
    axios
        .get(`${process.env.REACT_APP_API}/view_absentees`, {
            params: {
                course,
                group: index,
                date,
            },
        })
        .then((res) => {
            dispatch({
                type: ABSENTEE.LOAD_SUCCESS,
                data: res.data,
            })
        })
        .catch((error) => {
            dispatch({ type: ABSENTEE.LOAD_FAILURE })
        })
}