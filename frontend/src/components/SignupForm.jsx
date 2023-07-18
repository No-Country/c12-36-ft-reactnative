import { Button, Checkbox, CircularProgress, FormControlLabel, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useSignup } from '../hooks/useSignup'

import '../styles/signupForm.css'

const SignupForm = () => {
  const { signup, error, isLoading } = useSignup()
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
            // type='email'
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
            ...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })
            }
          />
          {
            errors.email && errors.email.type === 'required' &&
              <p className='error' role='alert'>*El email no puede estar vacío</p>
          }
          {
            errors.email && errors.email.type === 'pattern' &&
              <p className='error' role='alert'>*Email inválido</p>
          }
        </div>

        <div className='full_name'>
          <div className='textField'>
            <TextField
              id='firstName'
              label='Nombre'
              variant='outlined'
              aria-invalid={errors.firstName ? 'true' : 'false'}
              color='secondary'
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
              ...register('firstName', { required: true, minLength: 3 })
              }
            />
            {
              errors.firstName && errors.firstName.type === 'required' &&
                <p className='error' role='alert'>*El nombre es obligatorio</p>
            }
            {
              errors.firstName && errors.firstName.type === 'minLength' &&
                <p className='error' role='alert'>*Mínimo 3 caracteres</p>
            }
          </div>

          <div className='textField'>
            <TextField
              id='lastName'
              label='Apellido'
              variant='outlined'
              aria-invalid={errors.lastName ? 'true' : 'false'}
              color='secondary'
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
              ...register('lastName', { required: true, minLength: 3 })
              }
            />
            {
              errors.lastName && errors.lastName.type === 'required' &&
                <p className='error' role='alert'>*El apellido es obligatorio</p>
            }
            {
              errors.lastName && errors.lastName.type === 'minLength' &&
                <p className='error' role='alert'>*Mínimo 3 caracteres</p>
            }
          </div>
        </div>

        <div className='textField'>
          <TextField
            id='password'
            label='Contraseña'
            aria-invalid={errors.password ? 'true' : 'false'}
            variant='outlined'
            color='secondary'
            autoComplete='off'
            type='password'
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
            ...register(
              'password',
              {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
              })
            }
          />
          {
            errors.password && errors.password.type === 'required' &&
              <p className='error' role='alert'>* Contraseña requerida</p>
          }
          {
            errors.password && errors.password.type === 'pattern' &&
              <p className='error' role='alert'>
                * Debe incluir al menos: 1 mayúscula, 1 minúscula y un número
              </p>
          }
        </div>

        <p className='password_text'>La contraseña debe contener mínimo 6 dígitos, una minúscula, una mayúscula y un número. Sin espacios</p>

        <div className='textField'>
          <TextField
            id='password-repeat'
            label='Repetir contraseña'
            variant='outlined'
            color='secondary'
            autoComplete='off'
            type='password'
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
            ...register('passwordRepeat', { required: false })
            }
          />
          <p className='error' role='alert'>{errorPass}</p>
        </div>

        <div className='checkboxes' style={{ fontSize: '0.8rem', width: '441px' }}>
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
            label='
                  Acepto los términos y condiciones y estoy de
                  acuerdo con las políticas de privacidad.
                '
          />
        </div>

        {isLoading && <CircularProgress color='secondary' />}
        <p className='response-error'>{error}</p>

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

export default SignupForm
