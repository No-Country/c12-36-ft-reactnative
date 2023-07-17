import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useSignup } from '../hooks/useSignup'

import '../styles/signupForm.css'

const SignUpForm = () => {
  const signup = useSignup()
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [errorPass, setErrorPass] = useState('')
  const [check18, setCheck18] = useState(false)
  const [checkTerms, setCheckTerms] = useState(false)
  const [status, setStatus] = useState(false)

  const onSubmit = (data, e) => {
    e.preventDefault()
    setErrorPass('')

    if (data.password !== data.passwordRepeat) {
      setErrorPass('Las contraseñas no coinciden')
      return
    }
    signup(data)
  }

  useEffect(() => {
    if (check18 === true && checkTerms === true) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }, [check18, checkTerms])

  return (
    <div className='signup_form'>
      <h1>Crea tu cuenta en Pocketpal</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='textField'>
          <TextField
            id='email'
            label='Correo electrónico'
            type='email'
            variant='outlined'
            color='secondary'
            aria-invalid={errors.email ? 'true' : 'false'}
            autoComplete='off'
                        // focused
            sx={{
              input: {
                color: '#fdfdfe',
                fontSize: '1rem',
                width: '441px'
              },
              label: {
                color: 'gray'
              }
            }}
            {
              ...register('email', { required: '*El email no puede estar vacío' })
              }
          />
          {errors.email && <p className='error' role='alert'>{errors.email?.message}</p>}
          {errors.email?.type === 'required'}
        </div>

        <div className='textField' style={{ gap: '16px' }}>
          <div>
            <TextField
              id='firstName'
              label='Nombre'
              variant='outlined'
              color='secondary'
              aria-invalid={errors.firstName ? 'true' : 'false'}
              autoComplete='off'
              sx={{
                input: {
                  color: '#fdfdfe',
                  fontSize: '1rem'
                },
                label: {
                  color: 'gray'
                }
              }}
              {
              ...register('firstName', { required: '*El nombre es obligatorio', minLength: 3 })
              }
            />
            {errors.firstName && <p className='error' role='alert'>{errors.firstName?.message}</p>}
            {errors.firstName?.type === 'required'}
          </div>

          <div>
            <TextField
              id='lastName'
              label='Apellido'
              variant='outlined'
              color='secondary'
              aria-invalid={errors.lastName ? 'true' : 'false'}
              autoComplete='off'
              sx={{
                input: {
                  color: '#fdfdfe',
                  fontSize: '1rem'
                },
                label: {
                  color: 'gray'
                }
              }}
              {
              ...register('lastName', { required: '*El apellido es obligatorio', minLength: 3 })
              }
            />
            {errors.lastName && <p className='error' role='alert'>{errors.lastName?.message}</p>}
            {errors.lastName?.type === 'required'}
          </div>
        </div>

        <div className='textField'>
          <TextField
            id='password'
            label='Contraseña'
            type='password'
            variant='outlined'
            color='secondary'
            aria-invalid={errors.password ? 'true' : 'false'}
            autoComplete='off'
            sx={{
              input: {
                color: '#fdfdfe',
                fontSize: '1rem',
                width: '441px'
              },
              label: {
                color: 'gray'
              }
            }}
            {
            ...register('password', { required: '*La contraseña debe tener al menos 6 caracteres', pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ })
            }
          />
          {errors.password && <p className='error' role='alert'>{errors.password?.message}</p>}
          {errors.password?.type === 'required'}
        </div>

        <div className='textField'>
          <TextField
            id='password-repeat'
            label='Repetir contraseña'
            type='password'
            variant='outlined'
            color='secondary'
            autoComplete='off'
            sx={{
              input: {
                color: '#fdfdfe',
                fontSize: '1rem',
                width: '441px'
              },
              label: {
                color: 'gray'
              }
            }}
            {
            ...register('passwordRepeat', { required: '*La contraseña debe tener al menos 6 caracteres', pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ })
            }
          />
          {errorPass && (<p className='error' role='alert'>{errorPass}</p>)}
        </div>

        <div className='checkboxes'>
          <FormControlLabel
                        // required
            control={
              <Checkbox
                required
                onChange={() => setCheck18(!check18)}
                sx={{
                  color: '#fdfdfe',
                  '&.Mui-checked': {
                    color: '#fdfdfe'
                  },
                  height: '3rem',
                  minWidth: '3rem'
                }}
              />
                        }
            label='Soy mayor de 18 años.'
          />

          <FormControlLabel
                        // required
            control={
              <Checkbox
                required
                onChange={() => setCheckTerms(!checkTerms)}
                sx={{
                  color: '#fdfdfe',
                  '&.Mui-checked': {
                    color: '#fdfdfe'
                  },
                  height: '3rem',
                  minWidth: '3rem'
                }}
              />
                        }
            label='Acepto los términos y condiciones y estoy de acuerdo con las políticas de privacidad.'
          />
        </div>

        <Button
          className='btnGradient'
          variant='text'
          type='submit'
          disabled={!status}
          sx={{
            color: '#F1F0EA'
          }}
        >
          Crear cuenta
          {/* <Link to='/home'>Crear cuenta</Link> */}
        </Button>
      </form>

      <div className='text-sm'>
        ¿Ya tienes cuenta?
        <Link
          to='/login'
          className='link-login'
        >
          Ingresa aquí
        </Link>
      </div>
    </div>
  )
}

export default SignUpForm
