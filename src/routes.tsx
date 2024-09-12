import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import PrivateRoute from './privateRoutes'
import PageNotFound from './components/PageNotFound'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'
import AddEventScreen from './components/AddEventScreen'
import {useSelector} from './store'
import {RootState} from './store/slices'

const Router = () => {
  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/add-event" element={<AddEventScreen />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  )
}
export default Router
