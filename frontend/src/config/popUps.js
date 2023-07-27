import Swal from 'sweetalert2'

export const SuccessPop = () => {
  Swal.fire({
    background: '#503853',
    color: '#f1f0ea',
    icon: 'success',
    position: 'center',
    showConfirmButton: false,
    text: 'Por favor verifica tu correo electrónico. No olvides revisar la carpeta de Spam.',
    timer: 5000,
    title: 'Registro exitoso',
    width: '420px'
  })
}

export const RegisterErrorPop = () => {
  Swal.fire({
    background: '#503853',
    color: '#f1f0ea',
    icon: 'error',
    position: 'center',
    showConfirmButton: false,
    timer: 5000,
    text: 'Ya existe un usuario con este correo electrónico.',
    width: '420px'
  })
}

export const ActivationPop = () => {
  Swal.fire({
    background: '#503853',
    color: '#f1f0ea',
    icon: 'success',
    position: 'center',
    showConfirmButton: false,
    text: 'Te regalamos $12.000 para que hagas tranferencias a otras cuentas Pocketpal.',
    timer: 5000,
    title: 'Activación exitosa',
    width: '420px'
  })
}

export const ProfilePop = () => {
  Swal.fire({
    background: '#503853',
    color: '#f1f0ea',
    icon: 'warning',
    position: 'center',
    showConfirmButton: false,
    text: 'Completa tus datos para poder utilizar Pocketpal',
    timer: 5000,
    width: '420px'
  })
}

export const PasswordPop = () => {
  Swal.fire({
    background: '#503853',
    color: '#f1f0ea',
    icon: 'success',
    position: 'center',
    showConfirmButton: false,
    text: '¡Tu contraseña ha sido cambiada correctamente!',
    timer: 5000,
    width: '420px'
  })
}

export const TransferPop = () => {
  Swal.fire({
    background: '#503853',
    color: '#f1f0ea',
    icon: 'success',
    position: 'center',
    showConfirmButton: false,
    text: '¡Transferencia realizada con exito!',
    timer: 5000,
    width: '420px'
  })
}

export const LoginErrorPop = () => {
  Swal.fire({
    background: '#503853',
    color: '#f1f0ea',
    icon: 'error',
    position: 'center',
    showConfirmButton: false,
    text: 'El usuario o contraseña son incorrectos.',
    timer: 5000,
    width: '420px'
  })
}

export const TransferErrorPop = () => {
  Swal.fire({
    background: '#503853',
    color: '#f1f0ea',
    icon: 'error',
    position: 'center',
    showConfirmButton: false,
    text: 'Ha ocurrido un error, verifique los datos e intentelo nuevamente.',
    timer: 5000,
    width: '420px'
  })
}
