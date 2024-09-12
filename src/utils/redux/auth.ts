import {LoginResponse} from '../../type/api/auth'

export const formatAuthUser = (data: LoginResponse) => {
  return {
    id: data.data.user._id,
    role: data.data.user.role,
    token: data.token,
  }
}
