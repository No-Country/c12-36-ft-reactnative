import { Button, FormControl, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { LoginErrorPop } from '../config/popUps'

import '../styles/loginForm.css'
import { useAuth } from '../hooks/useAuth'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login(data)
      if (res.status === 200) {
        navigate('/home/dashboard')
      }
    } catch (err) {
      console.error(err)
      LoginErrorPop()
    }
  })

  const [viewer, setViewer] = useState(false)
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
    <div className='login_form'>
      <FormControl className='form' fullWidth>
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
            sx={muiStyles.sxInput}
            InputLabelProps={muiStyles.label}
            {...register('password', {
              required: 'Contraseña requerida.'
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            type={viewer ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment className='eye_icon' position='end' onClick={handleVisibility}>
                  {viewer ? <VisibilityOffIcon color='secondary' /> : <VisibilityIcon color='secondary' />}
                </InputAdornment>
              )
            }}
          />
        </div>

        <a href='/forgotpassword' className='text-sm text-forgotten'>¿Olvidaste tu contraseña?</a>

        {/*         {
          isLoading && (
            <div style={{ textAlign: 'center' }}>
              <CircularProgress color='secondary' />
            </div>
          )
        }

        <p className='response-error'>{error}</p> */}

        <Button
          className='btnGradient login_button'
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
