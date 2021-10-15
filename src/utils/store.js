import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import appReducer from 'slices/app.slice'
import checkinReducer from 'slices/checkin.slice'
import staticsReducer from 'slices/statics.slice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

const rootReducer = combineReducers({
  app: appReducer,
  statics: staticsReducer,
  checkin: checkinReducer,
  // add more reducers
})
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    })

    // eslint-disable-next-line no-undef
    return __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware
  },
})
export const persistor = persistStore(store)

export default store
