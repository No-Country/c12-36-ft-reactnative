import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormControl, TextField } from '@mui/material'

import './signUp.css'
import logo from '../../assets/logo.png'
import cardOverPhoneImage from '../../assets/card-over-phone.png'

const SignUp = () => {
  return (
    <div className='login'>
      <main>
        <section>
          <article>
            <img src={logo} alt='logo' width='150px' />
          </article>
          <article>
            <FormControl className='form'>
              <TextField
                id='standard-basic'
                label='Correo electrónico'
                variant='standard'
                color='secondary'
                autoComplete='off'
                sx={{
                  input: {
                    textAlign: 'center',
                    color: 'white'
                  },
                  '& .MuiInput-underline:before': { borderBottomColor: '#ddd' }
                }}
                InputLabelProps={{
                  style: {
                    width: '100%',
                    color: 'gray'
                  }
                }}
              />
              <TextField
                id='standard-basic'
                label='Contraseña'
                type='password'
                variant='standard'
                color='secondary'
                sx={{
                  input: {
                    textAlign: 'center',
                    color: 'white'
                  },
                  '& .MuiInput-underline:before': { borderBottomColor: '#ddd' }
                }}
                InputLabelProps={{
                  style: {
                    width: '100%',
                    color: 'gray'
                  }
                }}
              />
              <p className='text-sm text-forgotten'>
                ¿Olvidaste tu contraseña?
              </p>
              <Link to='/home'>
                <Button
                  color='secondary'
                  variant='contained'
                  fullWidth='true'
                >
                  Ingresar
                </Button>
              </Link>
            </FormControl>
          </article>
          <article className='text-sm'>
            ¿No tienes cuenta?
            <span style={{ color: '#8D4EB5' }}>
              {' '}
              Regístrate aquí
            </span>
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

export default SignUp
