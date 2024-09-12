import {createAsyncThunk} from '@reduxjs/toolkit'
import {withToastForError} from '../../utils/redux/thunk'
import {addEvent} from '../../api/event'
import {AddEventParams} from '../../type/api/event'

export const addEventAction = createAsyncThunk(
  'event/addEvent',
  withToastForError<AddEventParams, any>(async (data) => {
    const response = await addEvent(data)
    return response.data
  }),
)
