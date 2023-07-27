import React from 'react'

import BackButton from '../components/BackButton'
import PasswordForm from '../components/PasswordForm'
import Footer from '../containers/Footer'

import '../styles/forgotPassword.css'

const ForgotPassword = () => {
  return (
    <div className='password'>
      <BackButton />
      <PasswordForm />
      <Footer />
    </div>
  )
}

export default ForgotPassword
