import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import '../styles/transfer.css'
/* import { useAuthContext } from '../hooks/useAuthContext'
 */import pencil from '../assets/fi-sr-pencil.png'
import { useAuth } from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import { transferRequest } from '../api/auth'
const Transfers = () => {
  const { user, authToken } = useAuth()
  const { register, formState: { errors }, handleSubmit } = useForm()

  console.log(user)
  const onSubmit = (data) => {
    console.log(authToken)
    console.log(data)
    transferRequest(authToken, data, user.dni)
      .then((res) => {
        console.log(res.data)
      })
  }
  return (
    <form className='transfer' onSubmit={handleSubmit(onSubmit)}>
      <div className='titleSubtitle'>
        <Typography color='secondary' variant='p' className='titleTransfer'>Transacciones</Typography>
        <Typography color='secondary' variant='p' className='subtitleTransfer'>Ingresa un monto:</Typography>
      </div>
      <div
        className='containerAmount'
      >
        <div className='balance'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label id='amount' className='amount'>$</label>
            <TextField
              id='amount' name='amount' type='number' className='sinBorde ' variant='standard' placeholder='0' {...register('amount', {
                required: 'Ingrese un monto valido',
                pattern: {
                  value: /^[0-9]+(\.[0-9]{1,2})?$/,
                  message: 'Ingrese un monto válido (ej: 100 o 100.50).'
                }
              })}
              error={Boolean(errors.amount)}
              style={{
                fontSize: '6rem',
                '@media (maxWidth: 900px)': {
                  fontSize: '3rem'
                }
              }}
            />
          </div>
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <Typography variant='p' color='secondary' className='available'>Saldo disponible ${user.balance}</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            name='recipient' id='recipient' label='Ingresar CBU o CVU' type='number' variant='standard' {
              ...register('recipient', {
                required: 'Ingrese un CVU valido'
              })
            }
            error={Boolean(errors.recipient)}
          />
          {errors.recipient && <p>{errors.recipient.message}</p>}
          <div className='containerMotivo'>
            <Typography variant='p' color='secondary'>Motivo:</Typography>
            <TextField
              name='detail' id='detail' label='Varios' type='text' variant='standard' {
              ...register('detail', {
                required: 'Ingrese un motivo'
              })
            }
              error={Boolean(errors.detail)}
            />
            <img src={pencil} alt='editar motivo' />
          </div>
          {errors.detail && <p>{errors.detail.message}</p>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <button
            className='btnGradient'
            type='submit'

          >
            Guardar cambios
          </button>
        </div>

      </div>

    </form>
  )
}

export default Transfers
