import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {LoginResponse, User} from '../../type/api/auth'
import {loginUserAction} from '../action/auth'
import {setAuthorization} from '../../service/api'
import {formatAuthUser} from '../../utils/redux/auth'
export interface AuthState {
  user: User
}
const initialState: AuthState = {
  user: {
    id: '',
    token: '',
    role: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserAction.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      setAuthorization(action.payload.token)
      state.user = formatAuthUser(action.payload)
    })
  },
})
