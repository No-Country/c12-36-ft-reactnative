import { Button, FormControl, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import React from 'react'

import logo from '../assets/logo.png'

import '../styles/loginForm.css'

const LoginForm = () => {
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
        <div className='login_form'>
            <FormControl className='form'>
                <img src={logo} alt='logo' width='150px' />
                <TextField
                    id='email'
                    label='Correo electrónico'
                    type='email'
                    variant='outlined'
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

                <TextField
                    id='password'
                    label='Contraseña'
                    type='password'
                    variant='outlined'
                    color='secondary'
                    sx={muiStyles.sxInput}
                    InputLabelProps={muiStyles.label}
                    {...register('password', {
                        required: 'Contraseña requerida.'
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <p className='text-sm text-forgotten'>
                    ¿Olvidaste tu contraseña?
                </p>
                <Button
                    className='btnGradient'
                    variant='text'
                    type='submit'
                    color='secondary'
                    onClick={handleSubmit(onSubmit)}
                >
                    Ingresar
                </Button>
            </FormControl>

            <article className='text-sm'>
                <p>
                    ¿No tienes cuenta?
                    <Link 
                        to='/signup'
                        className='link-register'
                    >
                        Regístrate aquí
                    </Link>
                </p>
            </article>
        </div>
    )
}

export default LoginForm
