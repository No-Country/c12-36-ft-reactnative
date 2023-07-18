import React from 'react'
import { Button, CircularProgress, FormControl, FormLabel, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

import '../styles/profile.css'
import { useAuthContext } from '../hooks/useAuthContext'
import { useProfile } from '../hooks/useProfile'

const Profile = () => {
  const { user } = useAuthContext()
  const { updateProfile, error, isLoading } = useProfile()
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    }
  })

  const onSubmit = (data, e) => {
    e.preventDefault()
    const alteredData = {
      ...data,
      dni: 12345678,
      dateOfBirth: '1990-12-30',
      nacionality: 'Argentino',
      address: {
        street: 'Calle Falsa',
        number: 123,
        zipcode: '1560'
      }
    }

    // console.log(alteredData)
    updateProfile(alteredData, user.token)
  }

  // Custom MUI TextField
  const customSx = {
    input: {
      color: '#fdfdfe',
      fontSize: '1rem'
    },
    label: {
      color: 'gray'
    }
  }

  return (
    <div className='signup-form'>
      <main>
        <section style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
          <FormControl>
            <div className='textField'>
              <FormLabel
                id='email'
                className='labelInput'
              >
                Correo electrónico*
                <TextField
                  id='email'
                  aria-invalid={errors.email ? 'true' : 'false'}
                  color='secondary'
                  autoComplete='off'
                  sx={customSx}
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
              </FormLabel>
            </div>

            <div className='textField' style={{ gap: '16px' }}>
              <div>
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

              <div>
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

            {isLoading && <CircularProgress color='secondary' />}
            <p className='response-error'>{error}</p>

            <article className='signup-button'>
              <Button
                className='btnGradient'
                variant='contained'
                type='submit'
                sx={{
                  color: '#F1F0EA'
                }}
                onClick={handleSubmit(onSubmit)}
              >
                Guardar cambios
              </Button>
            </article>
          </FormControl>
        </section>
      </main>
    </div>
  )
}

export default Profile
