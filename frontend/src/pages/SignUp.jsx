import React from 'react'

import BackButton from '../components/BackButton'
import SignupForm from '../components/SignupForm'
import Footer from '../containers/Footer'

import '../styles/signUp.css'

const SignUp = () => {
  return (
    <div className='signup'>
      <BackButton />
      <SignupForm />
      <Footer />
    </div>
  )
}

export default SignUp
