import axios from 'axios'
import { ATTENDANCE } from '../constants/actionTypes'
import { fetchUser } from './user'
import { store } from '../store/store'

const { REACT_APP_API } = process.env

/**
 * get a class attendance
 * @param {String} course course ID
 * @param {String} index index ID
 * @param {String} date date of class
 * @returns the attendance record
 */
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
        .then(() => {
            const { students } = store.getState().attendance
            dispatch(fetchUser(students.map((item) => item.student)))
        })
        .catch(() => {
            dispatch({
                type: ATTENDANCE.FETCH_ATTENDANCE_ERROR,
            })
        })
}

/**
 * create new attendance record when taking attendance
 * @param {String} course course ID
 * @param {String} index index ID
 * @returns the attendance record
 */
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

/**
 * submit a particular attendance
 * @param {String} attendanceId attendance ID
 * @param {Array} students students record
 * @returns {*}
 */
export const submitAttendance = (attendanceId, students) => (dispatch) => {
    console.log('students being passed in')
    console.log(students)
    console.log('attendace id passed in')
    console.log(attendanceId)
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
        .then(() => {
            const { students } = store.getState().attendance
            console.log(students)
            dispatch(fetchUser(students.map((item) => item.student)))
        })
        .catch((e) => {
            dispatch({ type: ATTENDANCE.SUBMIT_ATTENDANCE_ERROR })
            console.error(e)
        })
}