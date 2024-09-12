import React, {useState} from 'react'
import {useAppDispatch} from '../../store'
import LoginForm from '../forms/LoginForm/LoginForm'
import ScreenTemplate from '../ScreenTemplate/ScreenTemplate'
import {LoginFormFields} from '../forms/LoginForm/loginForm.props'
import {loginUserAction} from '../../store/action/auth'
import {useTranslation} from 'react-i18next'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import AddEventForm from '../forms/LoginForm/AddEventForm/AddEventForm'
import './addEventScreen.css'
import Spacer from '../Spacer/Spacer'
import {addEventAction} from '../../store/action/events'

const AddEventScreen = () => {
  const {t} = useTranslation()
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = async (values: LoginFormFields) => {
    setLoading(true)
    try {
      await dispatch(loginUserAction({code: values.code, role: values.role})).unwrap()
      toast.success(t('loginSuccessFull'))
      navigate('/home')
    } catch (error) {
      toast.error(t('error'))
    }
    setLoading(false)
  }

  const handleAddEvent = async (values: any) => {
    try {
      await dispatch(
        addEventAction({
          eventName: values.eventName,
          eventType: values.eventType,
          gender: values?.gender,
          ageGroup: [values?.ageGroup],
          court: [values?.court],
          paymentStatus: values?.paymentStatus,
          amount: values?.amount,
          food: [values?.food],
          description: values?.description,
          hours: values?.hours,
          contactEmail: values?.contactEmail,
          contactNumber: values?.contactNumber,
          contactPerson: values?.contactPerson,
          lead: values?.leadFound,
          surveyQuestion: values?.surveyQuestion,
          adminRemark: values?.remark,
          eventFormat: values.selectedEvents,
          payment: values?.selectedPaymentType,
          date: values?.startDate,
          toTime: values?.toTime,
          fromTime: values?.fromTime,
          totalWorkerHours: values?.hours,
        }),
      )
      setLoading(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScreenTemplate>
      <Spacer size={16} />
      <p className="add-event-text">{t('createNewEvent')}</p>
      <Spacer size={16} />
      <AddEventForm loading={false} handleAddEvent={(values) => handleAddEvent(values)} />
    </ScreenTemplate>
  )
}

export default AddEventScreen
