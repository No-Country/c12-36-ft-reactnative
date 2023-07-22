import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { useAuthContext } from './hooks/useAuthContext'

import theme from './config/temeConfig'
import Header from './containers/Header'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Footer from './containers/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Settings from './containers/Settings'
import Dashboard from './containers/Dashboard'
import Profile from './containers/Profile'
import Terms from './pages/Terms'
import Policy from './pages/Policy'
import About from './pages/About'

import './styles/app.css'
import Transfers from './containers/Transfers'

const App = () => {
  const { user } = useAuthContext()

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
                                                  : <Navigate to='/home/settings/profile' />
                                              }
            />
            <Route path='/home/transfers' element={<Transfers />} />
            <Route path='/home/settings' element={<Settings />}>
              <Route path='/home/settings/profile' element={<Profile />} />
            </Route>
          </Route>
          <Route path='/terminos-condiciones' element={<Terms />} />
          <Route path='/politicas-privacidad' element={<Policy />} />
          <Route path='/acerca-nosotros' element={<About />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
