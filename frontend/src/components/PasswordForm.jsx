import { Button, CircularProgress, FormControl, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import '../styles/passwordForm.css'

const PasswordForm = () => {
  const [viewer, setViewer] = useState(false)
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false)
      setSuccessMessage('Se ha enviado un correo electrónico de recuperación de contraseña.')
      setErrorMessage('')
    } catch (error) {
      setIsLoading(false)
      setErrorMessage('Ocurrió un error al procesar la solicitud.')
      setSuccessMessage('')
    }
  }

  const handleVisibility = () => {
    setViewer((prev) => !prev)
  }

  const muiStyles = {
    sxInput: {
      input: {
        textAlign: 'center',
        color: 'white',
        width: '300px'
      },
      '& .MuiInput-underline:before': { borderBottomColor: '#ddd' }
    },
    label: {
      style: {
        width: '100%',
        color: 'gray'
      }
    }
  }

  return (
    <div className='forgot_password_form'>
      <h1>Recuperar Contraseña</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='textField'>
          <TextField
            label='Correo electrónico'
            variant='outlined'
            color='secondary'
            autoComplete='off'
            {...register('email', {
              required: 'Correo requerido.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email inválido.',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              sx: {
                input: {
                  textAlign: 'center',
                  color: 'white',
                  width: '300px',
                },
                '& .MuiInput-underline:before': { borderBottomColor: '#ddd' },
              },
            }}
          />
        </div>

        {isLoading && <CircularProgress color='secondary' />}
        {successMessage && <p className='response-success'>{successMessage}</p>}
        {errorMessage && <p className='response-error'>{errorMessage}</p>}

        <Button
          className='btnGradient pass_button'
          variant='text'
          type='submit'
          fullWidth
          disabled={isLoading}
          sx={{
            color: 'white'
          }}
        >
          Enviar solicitud
        </Button>
      </form>

      <div className='text-sm'>
        ¿Recuerdas tu contraseña?
        <Link to='/login' className='link-login'>
          Ingresa aquí
        </Link>
      </div>
    </div>
  )
}

export default PasswordForm
