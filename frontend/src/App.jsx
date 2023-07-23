import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { useAuthContext } from './hooks/useAuthContext'

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
// import Footer from './containers/Footer'

import './styles/app.css'

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
            <Route path='/home/profile' element={<EditProfile />} />
            <Route path='/home/settings' element={<Settings />}>
              <Route path='/home/settings/edit_profile' element={<EditProfile />} />
            </Route>
          </Route>
        </Routes>
        {/* <Footer /> */}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
