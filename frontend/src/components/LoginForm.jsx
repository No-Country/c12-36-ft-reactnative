import { Button, CircularProgress, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import '../styles/loginForm.css'
import { useLogin } from '../hooks/useLogin'

const LoginForm = () => {
  const { login, error, isLoading } = useLogin()
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { register, handleSubmit, formState } = form
  const { errors } = formState

  const onSubmit = data => login(data)

  const muiStyles = {
    sxInput: {
      input: {
        textAlign: 'center',
        color: 'white'
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
    <div className='login_form'>
      <FormControl className='form'>
        <h1>Pocketpal</h1>
        <div className='text_Field'>
          <TextField
            label='Correo electrónico'
            variant='outlined'
            color='secondary'
            autoComplete='off'
            sx={muiStyles.sxInput}
            InputLabelProps={muiStyles.label}
            {...register('email', {
              required: 'Correo requerido.'
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>

        <div className='textField'>
          <TextField
            label='Contraseña'
            variant='outlined'
            color='secondary'
            type='password'
            sx={muiStyles.sxInput}
            InputLabelProps={muiStyles.label}
            {...register('password', {
              required: 'Contraseña requerida.'
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>

        <p className='text-sm text-forgotten'>
          ¿Olvidaste tu contraseña?
        </p>

        {
          isLoading && (
            <div style={{ textAlign: 'center' }}>
              <CircularProgress color='secondary' />
            </div>
          )
        }

        <p className='response-error'>{error}</p>

        <Button
          className='btnGradient'
          type='button'
          color='secondary'
          variant='text'
          fullWidth
          onClick={handleSubmit(onSubmit)}
        >
          Ingresar
        </Button>
      </FormControl>

      <div className='text-sm'>
        ¿No tienes cuenta?
        <Link
          to='/signup'
          className='link-signup'
        >
          Regístrate aquí
        </Link>
      </div>

    </div>
  )
}

export default LoginForm
