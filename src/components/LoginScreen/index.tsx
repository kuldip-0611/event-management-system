import React, {useState} from 'react'
import {useAppDispatch} from '../../store'
import LoginForm from '../forms/LoginForm/LoginForm'
import ScreenTemplate from '../ScreenTemplate/ScreenTemplate'
import {LoginFormFields} from '../forms/LoginForm/loginForm.props'
import {loginUserAction} from '../../store/action/auth'
import {useTranslation} from 'react-i18next'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const LoginScreen = () => {
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

  return (
    <ScreenTemplate>
      <LoginForm handleLogin={(values: LoginFormFields) => handleLogin(values)} loading={loading} />
    </ScreenTemplate>
  )
}

export default LoginScreen
