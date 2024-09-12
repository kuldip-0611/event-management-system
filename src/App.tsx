import React, {Suspense} from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter} from 'react-router-dom'
import store, {persistor} from './store'
import './languages/i18n'
import './App.css'
import Loader from './components/Loader/Loader'
import {Toaster} from 'react-hot-toast'
import Router from './routes'

function App() {
  console.log('hello')
  return (
    <div className="data-theme">
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<Loader />}>
            <BrowserRouter>
              <Toaster />
              <Router />
            </BrowserRouter>
          </Suspense>
        </PersistGate>
      </ReduxProvider>
    </div>
  )
}
export default App
