import { Button, FormControl, FormHelperText, FormLabel, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import '../styles/password.css'
import { useAuth } from '../hooks/useAuth'
import { changePassword } from '../api/auth'

const Password = () => {
  const { user, authToken } = useAuth()
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm()

  const newPasswordValue = watch('newPassword', '')

  const onSubmit = (data, e) => {
    e.preventDefault()
    const password = data.password
    const newPassword = data.newPassword
    const newData = { password, newPassword, email: user.email }
    console.log(newData)
    changePassword(authToken, newData)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <section className='password'>
      <form className='containerPassword' onSubmit={handleSubmit(onSubmit)}>
        <div className='titlePassword'>
          <Typography className='password_title' color='secondary'>
            Cambiar contraseña
          </Typography>
          <Typography className='password_subtitle' color='secondary'>
            Crea una contraseña nueva que tenga al menos 6 caracteres.
          </Typography>
          <Typography className='password_subtitle' color='secondary'>
            Debe contener una minúscula, una mayúscula y un número. Sin espacios.
          </Typography>
        </div>

        <FormControl className='containerFormPassword'>
          <FormLabel id='password' className='labelInput'>
            Escribe tu contraseña actual*
            <TextField
              id='oldPassword'
              placeholder='Contraseña actual'
              {...register('password', { required: 'Este campo es obligatorio' })}
              error={!!errors.password}
            />
            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
          </FormLabel>

          <FormLabel id='newPassword' className='labelInput'>
            Escribe tu contraseña nueva*
            <TextField
              id='newPassword'
              placeholder='Contraseña nueva'
              {...register('newPassword', { required: 'Este campo es obligatorio' })}
              error={!!errors.newPassword}
            />
            {errors.newPassword && <FormHelperText error>{errors.newPassword.message}</FormHelperText>}
          </FormLabel>

          <FormLabel id='repeatNewPassword' className='labelInput'>
            Vuelve a escribir tu contraseña nueva*
            <TextField
              id='repeatNewPassword'
              placeholder='Vuelve a escribir tu contraseña nueva'
              {...register('repeatNewPassword', {
                required: 'Este campo es obligatorio',
                validate: (value) => value === newPasswordValue || 'Las contraseñas no coinciden'
              })}
              error={!!errors.repeatNewPassword}
            />
            {errors.repeatNewPassword && <FormHelperText error>{errors.repeatNewPassword.message}</FormHelperText>}
          </FormLabel>

          <Button type='submit' color='secondary' className='btnGradient password_button'>
            Guardar cambios
          </Button>
        </FormControl>
      </form>
    </section>
  )
}

export default Password
