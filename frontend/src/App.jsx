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
import History from './pages/History'
import Profile from './pages/MyData'
import Terms from './pages/Terms'
import Policy from './pages/Policy'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Settings from './pages/Settings'
import EditProfile from './pages/Profile'
import EditPassword from './pages/Password'
import Error from './pages/Error'
import ForgotPassword from './pages/ForgotPassword'
import WhoWeAre from './pages/WhoWeAre'

import './styles/app.css'
import { useAuth } from './hooks/useAuth'
import Deposit from './pages/Deposit'

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
                ? <Navigate to='/home/dashboard' />
                : <Login />
            }
          />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route
            path='/signup' element={
              user
                ? <Navigate to='/login' />
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
                user && user.isActivated
                  ? <Dashboard />
                  : <Navigate to='/home/settings/edit_profile' />
              }
            />
            <Route
              path='/home/transfers' element={
                user && user.isActivated
                  ? <Transfers />
                  : <Navigate to='/home/settings/edit_profile' />
              }
            />
            <Route
              path='/home/deposit' element={
                user && user.isActivated
                  ? <Deposit />
                  : <Navigate to='/home/settings/edit_profile' />
              }
            />
            <Route
              path='/home/history' element={
                user && user.isActivated
                  ? <History />
                  : <Navigate to='/home/settings/edit_profile' />
              }
            />
            <Route
              path='/home/profile' element={
                user && user.isActivated
                  ? <Profile />
                  : <Navigate to='/home/settings/edit_profile' />
              }
            />
            <Route path='/home/terms-conditions' element={<Terms />} />
            <Route path='/home/contact-us' element={<ContactUs />} />
            <Route
              path='/home/settings' element={
                user && user.isActivated
                  ? <Settings />
                  : <Navigate to='/home/settings/edit_profile' />
              }
            >
              <Route path='/home/settings/edit_profile' element={<EditProfile />} />
              <Route
                path='/home/settings/edit_password' element={
                user && user.isActivated
                  ? <EditPassword />
                  : <Navigate to='/home/settings/edit_profile' />
              }
              />
            </Route>
          </Route>
          <Route path='/who-we-are' element={<WhoWeAre />} />
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
