import axios from 'axios'
import { ATTENDANCE } from '../constants/actionTypes'
import { store } from '../store/store'
import { fetchUser } from './user'

const { REACT_APP_API } = process.env

// eslint-disable-next-line import/prefer-default-export
export const fetchAttendance = (course, index, date) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.FETCH_ATTENDANCE,
    })

    axios
        .get(`${REACT_APP_API}/view_class_attendance`, {
            params: {
                course,
                group: index,
                date,
            },
        })
        .then((res) => {
            dispatch({
                type: ATTENDANCE.FETCHED_ATTENDANCE,
                data: res.data,
            })
        })
        .catch(() => {
            dispatch({
                type: ATTENDANCE.FETCH_ATTENDANCE_ERROR,
            })
        })
}

export const fetchSessionID = (course, index) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.FETCH_ATTENDANCE,
    })

    axios
        .get(`${REACT_APP_API}/take_attendance/manual`, {
            params: {
                course,
                group: index,
            },
        })
        .then((res) => {
            dispatch({
                type: ATTENDANCE.FETCHED_ATTENDANCE,
                data: res.data,
            })
            // console.log(res.data)
        })
        .then(() => {
            const { students } = store.getState().attendance
            console.log(students)
            dispatch(fetchUser(students.map((item) => item.student)))
        })
        .catch((e) => {
            dispatch({
                type: ATTENDANCE.FETCH_ATTENDANCE_ERROR,
            })
            console.log(e)
        })
}

export const submitAttendance = (attendanceId, students) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.SUBMIT_ATTENDANCE,
    })

    axios
        .put(`${REACT_APP_API}/update_attendance`, {
            params: {
                session_id: attendanceId,
                attendance_record: students,
            },
        })
        .then((res) => {
            dispatch({
                type: ATTENDANCE.SUBMIT_ATTENDANCE_SUCCESS,
                data: res.data,
            })
        })
        .catch((e) => {
            dispatch({ type: ATTENDANCE.SUBMIT_ATTENDANCE_ERROR })
            console.error(e)
        })
}