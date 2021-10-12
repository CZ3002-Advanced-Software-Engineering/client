import { COURSES, USER } from '../constants/actionTypes'

const courses = (
    state = {
        isLoading: false,
        isError: false,
        isFetched: false,
        courses: [],
        indexes: [],
    },
    action
) => {
    switch (action.type) {
        case COURSES.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case COURSES.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFetched: true,
                indexes: action.data,
                courses: [
                    ...new Map(
                        action.data.map((item) => [item.course, item.course])
                    ).values(),
                ],
            }
        case COURSES.LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isFetched: false,
            }
        case USER.LOG_OUT:
            return {
                isLoading: false,
                isError: false,
                isFetched: false,
                courses: [],
                indexes: [],
            }
        default:
            return state
    }
}

export default courses