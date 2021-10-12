import { ATTENDANCE, USER } from '../constants/actionTypes'

// eslint-disable-next-line import/prefer-default-export
export const attendance = (
    state = {
        isLoading: false,
        isFetched: false,
        isFetchedUser: false,
        students: [],
    },
    action
) => {
    switch (action.type) {
        case ATTENDANCE.FETCH_ATTENDANCE:
            return {
                ...state,
                isLoading: true,
            }
        case ATTENDANCE.FETCHED_ATTENDANCE:
            return {
                ...state,
                isLoading: false,
                isFetched: true,
                id: action.data._id,
                date: action.data.date,
                index: action.data.index,
                students: action.data.students,
                teacher: action.data.teacher,
            }
        case ATTENDANCE.FETCH_ATTENDANCE_ERROR:
            return {
                ...state,
                isError: true,
            }
        case USER.LOAD:
            return {
                ...state,
                isLoading: true,
            }
        case USER.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFetchedUser: true,
                students: state.students.map((entry) => {
                    const test = action.data.find(
                        (item) => item._id.$oid === entry.student
                    )
                    return test ? { ...entry, name: test.name } : { ...entry }
                }),
            }
        case USER.LOAD_FAILURE:
            return {
                ...state,
                isError: true,
            }
        case USER.LOG_OUT:
            return {
                isFetched: false,
                isFetchedUser: false,
                isLoading: false,
                students: [],
            }

        default:
            return state
    }
}