import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

/* import { useAuthContext } from './hooks/useAuthContext'
 */
import theme from './config/temeConfig'
import Header from './containers/Header'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Transfers from './pages/Transfers'
import Settings from './pages/Settings'
import EditProfile from './pages/Profile'
import Terms from './pages/Terms'
import Policy from './pages/Policy'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Error from './pages/Error'

import './styles/app.css'
import { useAuth } from './hooks/useAuth'

const App = () => {
  const { user } = useAuth()

  return (

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/login' element={
                                    user
                                      ? <Navigate to='/home' />
                                      : <Login />
                                  }
          />
          <Route
            path='/signup' element={
                                      user
                                        ? <Navigate to='/home' />
                                        : <SignUp />
                                    }
          />
          <Route
            path='/home' element={
                                    user
                                      ? <Home />
                                      : <Navigate to='/' />
                                  }
          >
            <Route
              path='/home/dashboard' element={
                                                user?.isActivated
                                                  ? <Dashboard />
                                                  : <Navigate to='/home/settings/edit_profile' />
                                              }
            />
            <Route path='/home/transfers' element={<Transfers />} />
            <Route path='/home/profile' element={<EditProfile />} />
            <Route path='/home/settings' element={<Settings />}>
              <Route path='/home/settings/edit_profile' element={<EditProfile />} />
            </Route>
          </Route>
          <Route path='/terms-conditions' element={<Terms />} />
          <Route path='/privacy-policies' element={<Policy />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/page-not-found' element={<Error />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
