import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router'
import {RootState} from './store/slices'
import {setAuthorization} from './service/api'

const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.auth.user.token)
  if (token) {
    setAuthorization(token)
  }
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
