import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, CircularProgress, FormControl, FormLabel, TextField } from '@mui/material'

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
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      nacionality: data.nacionality,
      dateOfBirth: data.dateOfBirth,
      dni: data.dni,
      address: {
        street: data.street,
        number: data.number,
        zipcode: data.zipcode
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
  // Accross all TextFields
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
              errors.firstName && errors.firstName.type === 'minLength' &&
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
              errors.lastName && errors.lastName.type === 'minLength' &&
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
            id='nacionality'
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
        <div className='containerLabel'>
          <div style={{ width: '50%' }}>
            <FormLabel
              id='dateOfBirth'
              className='labelInput'
            >
              Fecha de nacimiento*
              <TextField
                id='dateOfBirth'
                type='date'
                aria-invalid={errors.dateOfBirth ? 'true' : 'false'}
                {...sharedProperties}
                {
                  ...register('dateOfBirth', {
                    required: true
                    // pattern: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/
                  })
                }
              />
              {
                errors.dateOfBirth && errors.dateOfBirth.type === 'required' &&
                  <p className='error' role='alert'>*Este campo no puede estar vacío</p>
              }
              {
                errors.dateOfBirth && errors.dateOfBirth.type === 'pattern' &&
                  <p className='error' role='alert'>*Fecha inválida (año-mes-día) </p>
              }
            </FormLabel>
          </div>
          <FormLabel
            id='dni'
            className='labelInput'
          >
            DNI*
            <TextField
              id='dni'
              aria-invalid={errors.dni ? 'true' : 'false'}
              {...sharedProperties}
              {
                ...register('dni', { required: true, minLength: 3, pattern: /^[0-9]*$/ })
              }
            />
            {
              errors.dni && errors.dni.type === 'required' &&
                <p className='error' role='alert'>*Este campo no puede estar vacío</p>
            }
            {
              errors.dni && errors.dni.type === 'minLength' &&
                <p className='error' role='alert'>*DNI inválido</p>
            }
            {
              errors.dni && errors.dni.type === 'pattern' &&
                <p className='error' role='alert'>*Este campo es numérico</p>
            }
          </FormLabel>
        </div>
        <div className='containerLabel'>
          <FormLabel
            id='street'
            className='labelInput'
          >
            Dirección*
            <TextField
              id='street'
              aria-invalid={errors.street ? 'true' : 'false'}
              {...sharedProperties}
              {
                ...register('street', { required: true })
              }
            />
            {
              errors.street && errors.street.type === 'required' &&
                <p className='error' role='alert'>*Este campo no puede estar vacío</p>
            }
          </FormLabel>
          <FormLabel
            id='number'
            className='labelInput'
          >
            Número*
            <TextField
              id='number'
              aria-invalid={errors.number ? 'true' : 'false'}
              {...sharedProperties}
              {
                ...register('number', { required: true, pattern: /^[0-9]*$/ })
              }
            />
            {
              errors.number && errors.number.type === 'required' &&
                <p className='error' role='alert'>*Este campo no puede estar vacío</p>
            }
            {
              errors.number && errors.number.type === 'pattern' &&
                <p className='error' role='alert'>*Este campo es numérico</p>
            }
          </FormLabel>
        </div>
        <div className='containerLabel'>
          <FormLabel
            id='zipcode'
            className='labelInput'
          >
            Código postal*
            <TextField
              id='zipcode'
              aria-invalid={errors.zipcode ? 'true' : 'false'}
              {...sharedProperties}
              {
                ...register('zipcode', { required: true })
              }
            />
            {
              errors.zipcode && errors.zipcode.type === 'required' &&
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
