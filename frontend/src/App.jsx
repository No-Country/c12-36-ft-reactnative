import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import './App.css'
import theme from './config/temeConfig'
import { useAuthContext } from './hooks/useAuthContext'

import Header from './components/Header/Header'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import Settings from './components/Settings/Settings'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'

const App = () => {
  const { user } = useAuthContext()
  user ? console.log('Hay usuario') : console.log('No hay usuario')

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/login'
            element={
              user
                ? <Navigate to='/home' />
                : <Login />
            }
          />
          <Route
            path='/signup'
            element={
              user
                ? <Navigate to='/home' />
                : <SignUp />
            }
          />
          <Route
            path='/home'
            element={
              user
                ? <Home />
                : <Navigate to='/' />
            }
          >
            <Route path='/home/dashboard' element={<Dashboard />} />
            <Route path='/home/settings' element={<Settings />}>
              <Route path='/home/settings/profile' element={<Profile />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
