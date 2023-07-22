import React from 'react'

import BackButton from '../components/BackButton'
import LoginForm from '../components/LoginForm'

import '../styles/login.css'

const Login = () => {
  return (
    <div className='login'>
      <BackButton />
      <LoginForm />
    </div>
  )
}

export default Login
