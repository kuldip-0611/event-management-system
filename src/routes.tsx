import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import PrivateRoute from './privateRoutes'
import PageNotFound from './components/PageNotFound'
import LoginScreen from './components/LoginScreen'

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="/" element={<LoginScreen />} />

      <Route element={<PrivateRoute />}></Route>
    </Routes>
  )
}
export default Router
