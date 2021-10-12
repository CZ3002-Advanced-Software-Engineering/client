import { combineReducers } from 'redux'
import user from './user'
import course from './course'
import { selectedAttendance } from './selected'
import { attendance } from './attendance'
import { absentee } from './absentee'

export default combineReducers({
    user,
    course,
    selectedAttendance,
    attendance,
    absentee,
})