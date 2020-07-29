import { combineReducers } from 'redux'

import recommendReducer from './RecommendReducer'
import freeReducer from './FreeReducer'
import searchReducer from './SearchReducer'
const rootReducer = combineReducers({
  recommends: recommendReducer,
  free: freeReducer,
  search: searchReducer,
})

export default rootReducer
