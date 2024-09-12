/* eslint-disable import/no-extraneous-dependencies */
import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'
import {PersistConfig} from 'redux-persist'
import {authSlice} from './auth'

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
} as PersistConfig<RootState>
export const authActions = authSlice.actions
