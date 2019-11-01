import { combineReducers } from 'redux'
import loggedReducer from './logged';
import room from './room';

export default combineReducers({loggedReducer,room})
