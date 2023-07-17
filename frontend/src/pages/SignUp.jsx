import React from 'react'

import BackButton from '../components/BackButton'
import SignupForm from '../components/SignupForm'

import '../styles/signUp.css'

const SignUp = () => {
  return (
    <div className='signup'>
      <BackButton />
      <SignupForm />
    </div>
  )
}

export default SignUp