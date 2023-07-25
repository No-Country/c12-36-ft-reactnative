import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, CircularProgress, FormControl, FormLabel, TextField, Typography } from '@mui/material'
/* import { useAuthContext } from '../hooks/useAuthContext'
import { useProfile } from '../hooks/useProfile'
 */
// import camera from '../assets/fi-sr-camera.png'
import '../styles/profile.css'
import { useAuth } from '../hooks/useAuth'
import { userUpdate } from '../api/auth'
const Profile = () => {
  const { user, authToken, activation, setActivation, setUser } = useAuth()
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      nacionality: user.nacionality,
      dateOfBirth: user.dateOfBirth,
      dni: user.dni,
      address: {
        street: user.address.street,
        number: user.address.number,
        zipcode: user.address.zipcode
      }

    }
  })

  const onSubmit = (data, e) => {
    e.preventDefault()
    userUpdate(authToken, data)
      .then((res) => {
        setUser(res.data.userEdited)
        localStorage.setItem('user', JSON.stringify(res.data.userEdited))
      })
      .then(() => setActivation(true))
      .catch((error) => {
        console.error(error)
      })
  }

  const customSx = {
    input: {
      color: '#fdfdfe',
      fontSize: '1rem',
      width: '300px'
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
    <div className='profile'>
      <div className='circlePicture'>
        <Typography
          variant='p'
          color='secondary'
          style={{ fontSize: '5rem' }}
        >
          {user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}
        </Typography>
        {/* <div className='pictureCamera'>
          <img className='camera' src={camera} alt='' />
        </div> */}
      </div>
      <form
        style={{ gap: '34px' }} onSubmit={handleSubmit(onSubmit)}
      >
        <div className='containerLabel'>
          <FormLabel
            id='firstName'
            className='labelInput'
          >
            Primer Nombre*
            <TextField
              id='firstName'
              name='firstName'
              aria-invalid={errors.firstName ? 'true' : 'false'}
              {...sharedProperties}
              {
              ...register('firstName', { required: true, minLength: 3 })
              }
              defaultValue={user.firstName}
              disabled={user.isActivated}
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
            Primer Apellido*
            <TextField
              id='lastName'
              aria-invalid={errors.lastName ? 'true' : 'false'}
              {...sharedProperties}
              {
              ...register('lastName', { required: true, minLength: 3 })
              }
              defaultValue={user.lastName}
              disabled={user.isActivated}
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
              defaultValue={user.email}
              disabled
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
              defaultValue={user.nacionality ? user.nacionality : ''}
              disabled={user.isActivated}
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
                defaultValue={user.dateOfBirth ? user.dateOfBirth : undefined}
                disabled={user.isActivated}
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
              defaultValue={user.dni ? user.dni : ''}
              disabled={user.isActivated}
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

        <div>
          <p className='address'>Dirección*</p>
          <div className='containerLabel'>
            <FormLabel
              id='street'
              className='labelInput'
            >
              Calle*
              <TextField
                id='street'
                aria-invalid={errors.street ? 'true' : 'false'}
                {...sharedProperties}
                {
                ...register('address.street', { required: true })
                }
                defaultValue={user.address.street ? user.address.street : ''}
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
                ...register('address.number', { required: true, pattern: /^[0-9]*$/ })
                }
                defaultValue={user.address.number ? user.address.number : ''}
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
              ...register('address.zipcode', { required: true })
              }
              defaultValue={user.address.zipcode ? user.address.zipcode : ''}
            />
            {
              errors.zipcode && errors.zipcode.type === 'required' &&
                <p className='error' role='alert'>*Este campo no puede estar vacío</p>
            }
          </FormLabel>
        </div>

        {/*         {isLoading && <CircularProgress color='secondary' />}
        {error && <p className='response-error'>{error}</p>}
        {success && <p className='response-success'>{success}</p>} */}
        {
           activation &&
             <>
               <p className='response-activation'>
                 ¡Felicitaciones! Tu cuenta ha sido activada.
               </p>
               <p className='response-activation'>
                 ¡Te regalamos un saldo inicial de $12.000 para que utilices como quieras!
               </p>
             </>
        }
        <article className='signup-button'>
          <Button
            className='btnGradient'
            variant='contained'
            type='submit'
            sx={{
              color: '#F1F0EA'
            }}

          >
            Guardar cambios
          </Button>
        </article>
      </form>
    </div>
  )
}

export default Profile
