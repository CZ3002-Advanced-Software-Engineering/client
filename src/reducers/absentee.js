import { ABSENTEE, USER } from '../constants/actionTypes'

// eslint-disable-next-line import/prefer-default-export
export const absentee = (
    state = {
        isLoading: false,
        isFetched: false,
        isFetchedUser: false,
        data: [],
    },
    action
) => {
    switch (action.type) {
        case ABSENTEE.LOAD:
            return {
                ...state,
                isLoading: true,
            }
        case ABSENTEE.LOAD_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetched: true,
                isLoading: false,
            }
        case ABSENTEE.LOAD_FAILURE:
            return {
                ...state,
                isError: true,
            }
        case USER.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFetchedUser: true,
                data: state.data.map((entry) => {
                    const test = action.data.find(
                        (item) => item._id.$oid === entry.student
                    )
                    console.log(test.name)
                    return test.name
                        ? { ...entry, name: test.name }
                        : { ...entry }
                }),
            }
        case USER.LOAD_FAILURE:
            return {
                ...state,
                isError: true,
            }
        case USER.LOG_OUT:
            return {
                isLoading: false,
                isFetched: false,
                isFetchedUser: false,
                data: [],
            }
        default:
            return state
    }
}