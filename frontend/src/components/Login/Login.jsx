import React from 'react'
import { Button, FormControl, TextField } from '@mui/material'

import './Login.css'
import logo from '../../assets/logo.png'
import cardOverPhoneImage from '../../assets/card-over-phone.png'

const Login = () => {
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
                sx={{
                  input: {
                    textAlign: 'center',
                    color: 'white'
                  },
                  '& .MuiInput-underline:before': { borderBottomColor: '#ddd' }
                }}
              />
              <TextField
                id='standard-basic'
                label='Contraseña'
                variant='standard'
                color='secondary'
                sx={{
                  input: {
                    textAlign: 'center',
                    color: 'white'
                  },
                  '& .MuiInput-underline:before': { borderBottomColor: '#ddd' }
                }}
              />
              <p className='text-sm text-forgotten'>
                ¿Olvidaste tu contraseña?
              </p>
              <Button color='secondary' variant='contained'>
                Ingresar
              </Button>
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

export default Login
