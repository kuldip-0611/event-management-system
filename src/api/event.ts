import {AxiosPromise} from 'axios'
import Api from '../service/api'
import {AddEventParams} from '../type/api/event'

export const addEvent = (body: AddEventParams): AxiosPromise<any> =>
  Api.post(`/events/create`, body)
