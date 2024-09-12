import {createAsyncThunk} from '@reduxjs/toolkit'
import {login} from '../../api/auth'
import {LoginParams, LoginResponse} from '../../type/api/auth'
import {withToastForError} from '../../utils/redux/thunk'

export const loginUserAction = createAsyncThunk(
  'auth/loginUser',
  withToastForError<LoginParams, LoginResponse>(async (data) => {
    const response = await login(data)
    return response.data
  }),
)
