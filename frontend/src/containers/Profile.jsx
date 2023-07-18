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

  const sharedProperties = {
    color: 'secondary',
    autoComplete: 'off',
    sx: customSx
  }

  return (
    <div style={{ padding: '20px' }}>
      <FormControl style={{ gap: '34px' }}>
        <div className='containerLabel'>
          <FormLabel
            id='firstName'
            className='labelInput'
          >
            Nombres*
            <TextField
              id='firstName'
              aria-invalid={errors.firstName ? 'true' : 'false'}
              {...sharedProperties}
              {
                ...register('firstName', { required: true, minLength: 3 })
              }
            />
            {
              errors.firstName && errors.firstName.type === 'required' &&
                <p className='error' role='alert'>*Este campo no puede estar vacío</p>
            }
            {
              errors.firstName && errors.firstName.type === 'pattern' &&
                <p className='error' role='alert'>*Nombre inválido</p>
            }
          </FormLabel>
          <FormLabel
            id='email'
            className='labelInput'
          >
            Apellidos*
            <TextField
              id='lastName'
              aria-invalid={errors.lastName ? 'true' : 'false'}
              {...sharedProperties}
              {
                ...register('lastName', { required: true, minLength: 3 })
              }
            />
            {
              errors.lastName && errors.lastName.type === 'required' &&
                <p className='error' role='alert'>*Este campo no puede estar vacío</p>
            }
            {
              errors.lastName && errors.lastName.type === 'pattern' &&
                <p className='error' role='alert'>*Apellido inválido</p>
            }
          </FormLabel>
        </div>
        <div className='containerLabel'>
          <FormLabel
            id='email'
            className='labelInput'
          >
            Correo electrónico*
            <TextField
              id='email'
              aria-invalid={errors.email ? 'true' : 'false'}
              {...sharedProperties}
              {
                ...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })
              }
            />
            {
              errors.email && errors.email.type === 'required' &&
                <p className='error' role='alert'>*Este campo no puede estar vacío</p>
            }
            {
              errors.email && errors.email.type === 'pattern' &&
                <p className='error' role='alert'>*Email inválido</p>
            }
          </FormLabel>
          <FormLabel
            id='email'
            className='labelInput'
          >
            Nacionalidad*
            <TextField
              id='nacionality'
              aria-invalid={errors.nacionality ? 'true' : 'false'}
              {...sharedProperties}
              {
                ...register('nacionality', { required: true })
              }
            />
            {
              errors.nacionality && errors.nacionality.type === 'required' &&
                <p className='error' role='alert'>*Este campo no puede estar vacío</p>
            }
          </FormLabel>
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
    </div>
  )
}

export default Profile
