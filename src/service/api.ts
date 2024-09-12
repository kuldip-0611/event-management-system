import axios, {AxiosInstance} from 'axios'
import baseUrl from '../config/settings'

const Api: AxiosInstance = axios.create({
  baseURL: baseUrl,
})

export const setAuthorization = (token: string) => {
  Api.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  }
}

export const urls = {
  example: '',
}

export default Api
