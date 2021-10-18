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

export const selectStatus = (status, id, time) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.SELECTED_STATUS,
        status,
        id,
        time,
    })
}

export const resetSelected = () => (dispatch) => {
    dispatch({
        type: ATTENDANCE.RESET_SELECTED,
    })
}