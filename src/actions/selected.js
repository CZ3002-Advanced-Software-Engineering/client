import { ATTENDANCE } from '../constants/actionTypes'

export const selectCourse = (course) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.SELECTED_COURSE,
        course,
    })
}

export const selectIndex = (index) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.SELECTED_INDEX,
        index,
    })
}

export const selectDate = (date) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.SELECTED_DATE,
        date,
    })
}

export const viewAttendance = (course, index, date) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.FETCH_ATTENDANCE,
    })
}