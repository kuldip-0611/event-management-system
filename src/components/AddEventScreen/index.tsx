import React, {useState} from 'react'
import {useAppDispatch} from '../../store'
import ScreenTemplate from '../ScreenTemplate/ScreenTemplate'
import {useTranslation} from 'react-i18next'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import AddEventForm from '../forms/LoginForm/AddEventForm/AddEventForm'
import './addEventScreen.css'
import Spacer from '../Spacer/Spacer'
import {addEventAction} from '../../store/action/events'
import moment from 'moment'

const AddEventScreen = () => {
  const {t} = useTranslation()
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleAddEvent = async (values: any) => {
    const updatedWorkersArray = values?.court.map((item: any, index: number) => {
      return {
        name: item,
        noOfWorkers: values?.noOfWorkers?.[index],
      }
    })
    try {
      setLoading(true)
      await dispatch(
        addEventAction({
          eventName: values.eventName,
          eventFormat: values?.selectedEvent,
          eventType: values?.eventType,
          status: values?.eventStatus,
          date: moment(values?.startDate).format('MMMM Do, YYYY') || undefineds,
          toTime: values?.toTime || undefined,
          fromTime: values?.fromTime || undefined,
          gender: values?.gender,
          ageGroup: values?.ageGroup || [],
          court: updatedWorkersArray,
          paymentStatus: values?.paymentStatus,
          amount: values?.amount,
          food: values?.food || [],
          description: values?.description,
          hours: values?.hours,
          contactEmail: values?.contactEmail,
          contactNumber: values?.contactNumber,
          contactPerson: values?.contactPerson,
          lead: values?.foundLead,
          surveyQuestion: values?.surveyQuestion,
          adminRemark: values?.remark,
          payment: values?.selectedPaymentType,
          totalWorkerHours: values?.selectedHours,
        }),
      ).unwrap()
      toast.success(t('eventAdded'))
      navigate('/home')
    } catch (error) {
      toast.error(t('error'))
    }
    setLoading(false)
  }

  return (
    <ScreenTemplate>
      <Spacer size={16} />
      <p className="add-event-text">{t('createNewEvent')}</p>
      <Spacer size={16} />
      <AddEventForm loading={loading} handleAddEvent={(values) => handleAddEvent(values)} />
    </ScreenTemplate>
  )
}

export default AddEventScreen
