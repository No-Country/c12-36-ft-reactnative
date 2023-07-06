import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'

import './signUp.css'

const SignUp = () => {
  return (
    <div className='signup'>
      <aside>
        Volver atrás
      </aside>
      <main>
        <section>
          <h1>Crea tu cuenta en Pocketpal</h1>
          <form action=''>
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
            <article className='checkboxes'>
              <FormControlLabel
                // required
                control={
                  <Checkbox
                    sx={{
                      color: '#fdfdfe',
                      '&.Mui-checked': {
                        color: '#fdfdfe'
                      },
                      height: '3rem',
                      width: '3rem'
                    }}
                  />
                }
                label='Soy mayor de 18 años.'
              />
              <FormControlLabel
                // required
                control={
                  <Checkbox
                    sx={{
                      color: '#fdfdfe',
                      '&.Mui-checked': {
                        color: '#fdfdfe'
                      },
                      height: '3rem',
                      width: '3rem'
                    }}
                  />
                }
                label='
                  Acepto los términos y condiciones y estoy de
                  acuerdo con las políticas de privacidad.
                '
              />
            </article>
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
              <Link
                to='/login'
                className='link-login'
              >
                Ingresa aquí
              </Link>
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}

export default SignUp
