import { combineReducers } from 'redux'
import  contactReducer from './reducer.js'


const rootReducer = combineReducers({
  data: contactReducer
})

export default rootReducer