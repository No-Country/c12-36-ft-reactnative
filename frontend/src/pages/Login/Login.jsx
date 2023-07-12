import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import './Login.css'
import logo from '../../assets/logo.png'
import cardOverPhoneImage from '../../assets/card-over-phone.png'

const Login = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { register, handleSubmit, formState } = form
  const { errors } = formState

  const onSubmit = data => console.log(data)

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
    <div className='login'>
      <main>
        <section>
          <article>
            <img src={logo} alt='logo' width='150px' />
          </article>
          <article>
            <FormControl
              className='form'
            >
              <div style={{ height: '4rem' }}>
                <TextField
                  label='Correo electrónico'
                  variant='standard'
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
              <div style={{ height: '4rem' }}>
                <TextField
                  label='Contraseña'
                  variant='standard'
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
              <Button
                type='button'
                color='secondary'
                variant='contained'
                fullWidth
                onClick={handleSubmit(onSubmit)}
              >
                Ingresar
              </Button>
            </FormControl>
          </article>
          <article className='text-sm'>
            <p>
              ¿No tienes cuenta?
              <Link
                to='/signup'
                style={{ color: '#6672DE' }}
              >
                {' '}
                Regístrate aquí
              </Link>
            </p>
          </article>
        </section>
        <section>
          <img
            src={cardOverPhoneImage}
            alt='card-over-phone'
            height={671}
          />
        </section>
      </main>
    </div>
  )
}

export default Login
