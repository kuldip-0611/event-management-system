import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import PrivateRoute from './privateRoutes'
import PageNotFound from './components/PageNotFound'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'
import AddEventScreen from './components/AddEventScreen'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/add-event" element={<AddEventScreen />} />
      </Route>
    </Routes>
  )
}
export default Router
