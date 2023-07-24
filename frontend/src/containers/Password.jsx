import { Button, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import '../styles/password.css'

const Password = () => {
  return (
    <section className='password'>
      <div className='containerPassword'>
        <div className='titlePassword'>
          <Typography variant='h5' color='secondary'>Cambiar contraseña</Typography>
          <Typography variant='p' color='secondary'>Crear una contraseña nueva que tenga al menos 6 caracteres</Typography>
        </div>

        <FormControl className='containerFormPassword'>
          <FormLabel id='oldPassword' className='labelInput'>
            Escribe tu contraseña actual*
            <TextField id='oldPassword' placeholder='Contraseña actual' />
          </FormLabel>
          <FormLabel id='newPassword' className='labelInput'>
            Escribe tu contraseña nueva*
            <TextField id='newPassword' placeholder='Contraseña nueva' />
          </FormLabel>
          <FormLabel id='repeatNewPassword' className='labelInput'>
            Vuelve a escribir tu contraseña nueva*
            <TextField id='repeatNewPassword' placeholder='Vuelve a escribir tu contraseña nueva' />
          </FormLabel>
          <Button color='secondary' className='btnGradient btnGradient--Password'>Guardar cambios</Button>
        </FormControl>

      </div>
    </section>
  )
}

export default Password
