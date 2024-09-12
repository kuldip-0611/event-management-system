import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
import {RootState} from './store/slices'
import {setAuthorization} from './service/api'

const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.auth.user.token)
  console.log(token, 'token')
  if (token) {
    setAuthorization(token)
    return <Outlet />
  }

  return <Navigate to="/login" />
}

export default PrivateRoute
