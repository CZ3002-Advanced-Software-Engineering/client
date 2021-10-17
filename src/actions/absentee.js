import axios from 'axios'
import { ABSENTEE } from '../constants/actionTypes'

// eslint-disable-next-line import/prefer-default-export
export const fetchAbsentees = (teacher) => (dispatch) => {
    dispatch({
        type: ABSENTEE.LOAD,
    })
    axios
        .get(`${process.env.REACT_APP_API}/view_absentees`, {
            params: {
                teacher_oid: teacher,
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