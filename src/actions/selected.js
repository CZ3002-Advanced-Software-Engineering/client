import { ATTENDANCE } from '../constants/actionTypes'

/**
 * selects course
 * @param {String} course course name
 */
export const selectCourse = (course) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.SELECTED_COURSE,
        course,
    })
}

/**
 * selects index
 * @param {String} index index name
 */
export const selectIndex = (index) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.SELECTED_INDEX,
        index,
    })
}

/**
 * selects date
 * @param {String} date date value
 */
export const selectDate = (date) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.SELECTED_DATE,
        date,
    })
}

/**
 * view attendance record of a particular index on a specific date
 * @param {String} course course name
 * @param  {String} index index name
 * @param {String}  date date value
 */
export const viewAttendance = (course, index, date) => (dispatch) => {
    dispatch({
        type: ATTENDANCE.FETCH_ATTENDANCE,
    })
}

/**
 * selects the status of a student in an attendance record
 * @param{String} status status name
 * @param {String} id student id
 * @param {String} time time of change
 */
export const selectStatus = (status, id, time) => (dispatch) => {
    if (status === 'absent') {
        const setTime = '-'
        dispatch({
            type: ATTENDANCE.SELECTED_STATUS,
            status,
            id,
            time: setTime,
        })
    } else {
        const setTime = time
        dispatch({
            type: ATTENDANCE.SELECTED_STATUS,
            status,
            id,
            time: setTime,
        })
    }
}

/**
 * filler function to reset all selected values
 */
export const resetSelected = () => (dispatch) => {
    dispatch({
        type: ATTENDANCE.RESET_SELECTED,
    })
}