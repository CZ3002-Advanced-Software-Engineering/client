import axios from 'axios'
import { ATTENDANCE } from '../constants/actionTypes'
import { fetchUser } from './user'
import { store } from '../store/store'

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