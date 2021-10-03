import { combineReducers } from 'redux'
import { teacher } from './teachers'

export default combineReducers({
    user: teacher,
})