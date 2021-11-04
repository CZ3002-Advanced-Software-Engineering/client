import axios from 'axios'
import { ABSENTEE } from '../constants/actionTypes'
import { store } from '../store/store'
import { fetchUser } from './user'

/**
 * get absentees for teacher taught indexes
 * @param {String} teacher teacher id
 * @returns list of in teacher taught courses
 */
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
        .then(() => {
            const { data } = store.getState().absentee
            dispatch(fetchUser(data.map((item) => item.student)))
        })
        .catch((error) => {
            dispatch({ type: ABSENTEE.LOAD_FAILURE })
            console.error(error)
        })
}

/**
 * get all absent records for student
 * @param student student id
 * @returns student record for absentees
 */
export const fetchStudentAbsentee = (student) => (dispatch) => {
    dispatch({
        type: ABSENTEE.LOAD,
    })

    axios
        .get(`${process.env.REACT_APP_API}/view_student_absent`, {
            params: {
                student_oid: student,
            },
        })
        .then((res) => {
            dispatch({
                type: ABSENTEE.LOAD_SUCCESS,
                data: res.data,
            })
        })
        .then(() => {
            const { data } = store.getState().absentee
            dispatch(fetchUser(data.map((item) => item.student)))
        })
        .catch((error) => {
            dispatch({ type: ABSENTEE.LOAD_FAILURE })
            console.error(error)
        })
}