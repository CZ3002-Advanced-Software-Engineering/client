import { ATTENDANCE, USER } from '../constants/actionTypes'

// eslint-disable-next-line import/prefer-default-export
export const selectedAttendance = (
    state = { course: '', index: {}, date: '' },
    action
) => {
    switch (action.type) {
        case ATTENDANCE.SELECTED_COURSE:
            return {
                ...state,
                course: action.course,
            }
        case ATTENDANCE.SELECTED_INDEX:
            return {
                ...state,
                index: action.index,
            }
        case ATTENDANCE.SELECTED_DATE:
            return {
                ...state,
                date: action.date,
            }
        case USER.LOG_OUT:
        case ATTENDANCE.RESET_SELECTED:
            return {
                course: '',
                index: '',
                date: '',
            }
        default:
            return state
    }
}