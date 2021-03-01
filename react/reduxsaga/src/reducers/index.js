import { combineReducers } from 'redux'
import UserReducer from './users'

export default combineReducers({
    users: UserReducer
});