import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
  return (
    <Button color='secondary'>
      <Link to='/login'>
        Iniciar sesión
      </Link>
    </Button>
  )
}

export default LoginButton
