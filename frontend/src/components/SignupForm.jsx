import { Button, Checkbox, CircularProgress, FormControlLabel, TextField, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
/* import { useSignup } from '../hooks/useSignup' */
import { useAuth } from '../hooks/useAuth'
import { SuccessPop, RegisterErrorPop } from '../config/popUps'

import '../styles/signupForm.css'

const SignupForm = () => {
/*   const { signup, error, isLoading } = useSignup() */
  const { signup, user } = useAuth()
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [errorPass, setErrorPass] = useState('')
  const [check18, setCheck18] = useState(false)
  const [checkTerms, setCheckTerms] = useState(false)
  const [status, setStatus] = useState(false)
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  console.log(password, passwordRepeat)
  const onSubmit = handleSubmit(async (values) => {
    if (password === passwordRepeat) {
      signup(values)
        .then(() => SuccessPop())
        .then(() => navigate('/login'))
        .catch(() => RegisterErrorPop())
    } else {
      setErrorPass('Las contraseñas no coinciden')
    }
  })

  const validatePass = () => {

  }
  useEffect(() => {
    if (check18 === true && checkTerms === true) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }, [check18, checkTerms])

  const muiStyles = {
    sxInput: {
      input: {
        textAlign: 'center',
        color: 'white',
        width: '440px',
        '@media screen and (max-width:900px)': {
          width: '300px'
        }
      },
      '& .MuiInput-underline:before': { borderBottomColor: '#ddd' }
    },
    smInput: {
      input: {
        textAlign: 'center',
        color: 'white',
        width: '202px',
        '@media screen and (max-width:900px)': {
          width: '132px'
        }
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

  const [viewer, setViewer] = useState(false)
  const handleVisibility = () => {
    setViewer((prev) => !prev)
  }

  return (
    <div className='signup_form'>
      <h1>Crea tu cuenta en Pocketpal</h1>
      <form onSubmit={onSubmit}>
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
            sx={muiStyles.sxInput}
            InputLabelProps={muiStyles.label}
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
              label='Primer Nombre'
              variant='outlined'
              aria-invalid={errors.firstName ? 'true' : 'false'}
              color='secondary'
              autoComplete='off'
              sx={muiStyles.smInput}
              InputLabelProps={muiStyles.label}
              {
              ...register('firstName', { required: true, minLength: 3, pattern: /^[a-zA-Z]+$/ })
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
            {
              errors.firstName && errors.firstName.type === 'pattern' &&
                <p className='error' role='alert'>*El nombre solo puede contener letras y sin espacios</p>
            }
          </div>

          <div className='textField'>
            <TextField
              id='lastName'
              label='Primer Apellido'
              variant='outlined'
              aria-invalid={errors.lastName ? 'true' : 'false'}
              color='secondary'
              autoComplete='off'
              sx={muiStyles.smInput}
              InputLabelProps={muiStyles.label}
              {
              ...register('lastName', { required: true, minLength: 3, pattern: /^[a-zA-Z]+$/ })
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
            {
              errors.lastName && errors.lastName.type === 'pattern' &&
                <p className='error' role='alert'>*El apellido solo puede contener letras y sin espacios</p>
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
            onKeyUp={(e) => setPassword(e.target.value)}
            sx={muiStyles.sxInput}
            InputLabelProps={muiStyles.label}
            {
            ...register(
              'password',
              {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
              })
            }
            type={viewer ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment className='eye_icon' position='end' onClick={handleVisibility}>
                  {viewer ? <VisibilityOffIcon color='secondary' /> : <VisibilityIcon color='secondary' />}
                </InputAdornment>
              )
            }}
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
            aria-invalid={errors.passwordRepeat ? 'true' : 'false'}
            autoComplete='off'
            onKeyUp={(e) => setPasswordRepeat(e.target.value)}
            sx={muiStyles.sxInput}
            InputLabelProps={muiStyles.label}
            {
            ...register('passwordRepeat', { required: true, validate: validatePass })
            }
            type={viewer ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment className='eye_icon' position='end' onClick={handleVisibility}>
                  {viewer ? <VisibilityOffIcon color='secondary' /> : <VisibilityIcon color='secondary' />}

                </InputAdornment>
              )
            }}
          />
          {
            errorPass && <p className='error' role='alert'>{errorPass}</p>
          }
        </div>

        <div className='checkboxes'>
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
