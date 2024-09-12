import {AxiosPromise} from 'axios'
import Api from '../service/api'
import {LoginParams, LoginResponse} from '../type/api/auth'

export const login = (body: LoginParams): AxiosPromise<LoginResponse> =>
  Api.post(`/users/login`, body)
