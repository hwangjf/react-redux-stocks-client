import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stocksReducer from './stocksReducer'

const rootReducer  = combineReducers({
  user: userReducer,
  stocks: stocksReducer
})

export default rootReducer