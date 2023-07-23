import React from 'react'

import BackButton from '../components/BackButton'
import LoginForm from '../components/LoginForm'
import Footer from '../containers/Footer'

import '../styles/login.css'

const Login = () => {
  return (
    <div className='login'>
      <BackButton />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default Login
