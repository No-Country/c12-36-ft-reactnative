import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/signupButton.css'

const LoginButton = () => {
  return (
    <div className='signup_button'>
      <Link to='/signup'>
        <Button color='secondary' className='btnGradient signup_landing'>
          Registrarse
        </Button>
      </Link>
    </div>

  )
}

export default LoginButton
