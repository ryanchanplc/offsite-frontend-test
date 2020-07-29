import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'redux/reducers/index'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const logger = createLogger()
let middleWares = []
if (process.env.NODE_ENV === 'development') {
  middleWares = [...middleWares, thunk, logger]
} else {
  middleWares = [...middleWares, thunk]
}
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['search', 'free', 'recommends'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWares)
)

export const persistor = persistStore(store)
