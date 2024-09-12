import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from 'react-redux'

import {persistReducer, persistStore} from 'redux-persist'
import * as rp from 'redux-persist'
import {configureStore} from '@reduxjs/toolkit'
import {persistConfig, rootReducer, RootState} from './slices'

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [rp.FLUSH, rp.REHYDRATE, rp.PAUSE, rp.PERSIST, rp.PURGE, rp.REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export default store
