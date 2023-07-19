import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/loginButton.css'

const LoginButton = () => {
  return (
    <Link to='/login'>
      <Button color='secondary' className='loginHeader'>
        Iniciar sesión
      </Button>
    </Link>
  )
}

export default LoginButton
