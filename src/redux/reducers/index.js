import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import recommendReducer from './RecommendReducer'
import freeReducer from './FreeReducer'
import searchReducer from './SearchReducer'
const freeConfig = {
  key: 'free',
  storage: storage,
  blacklist: ['isLoading', 'hasError'],
}
const recommendConfig = {
  key: 'recommends',
  storage: storage,
  blacklist: ['isLoading', 'hasError'],
}
const rootReducer = combineReducers({
  recommends: persistReducer(recommendConfig, recommendReducer),
  free: persistReducer(freeConfig, freeReducer),
  search: searchReducer,
})

export default rootReducer
