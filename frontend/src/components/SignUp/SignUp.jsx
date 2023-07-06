import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, FormControl, FormControlLabel, TextField } from '@mui/material'

import './signUp.css'

const SignUp = () => {
  return (
    <div className='signup'>
      <aside>
        Volver atrás
      </aside>
      <main>
        <section>
          <form action=''>
            <h1>Crea tu cuenta en Pocketpal</h1>
            <TextField
              id='email'
              label='Correo electrónico'
              variant='outlined'
              color='secondary'
              autoComplete='off'
              // focused
              sx={{
                input: {
                  color: '#fdfdfe',
                  fontSize: '1rem'
                },
                label: {
                  color: 'gray'
                }
              }}
            />
            <TextField
              id='full-name'
              label='Nombre completo'
              variant='outlined'
              color='secondary'
              autoComplete='off'
              // focused
              sx={{
                input: {
                  color: '#fdfdfe',
                  fontSize: '1rem'
                },
                label: {
                  color: 'gray'
                }
              }}
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  sx={{
                    color: '#fdfdfe',
                    '&.Mui-checked': {
                      color: '#fdfdfe'
                    }
                  }}
                />
              }
              label='Soy mayor de 18 años.'
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  sx={{
                    color: '#fdfdfe',
                    '&.Mui-checked': {
                      color: '#fdfdfe'
                    }
                  }}
                />
              }
              label='
                Acepto los términos y condiciones y estoy de
                acuerdo con las políticas de privacidad.
              '
            />
            <Link to='/home'>
              <Button
                color='secondary'
                variant='contained'
                sx={{
                  color: '#706670'
                }}
              >
                Crear cuenta
              </Button>
            </Link>
          </form>
          <article>
            <p>
              ¿Ya tienes cuenta?
              {' '}
              <span className='link-login'>
                Ingresa aquí
              </span>
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}

export default SignUp
