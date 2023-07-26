import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import '../styles/transfer.css'
/* import { useAuthContext } from '../hooks/useAuthContext' */
import { useAuth } from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import { transferRequest } from '../api/auth'
import { useEffect, useState } from 'react'

const Transfers = () => {
  const { user, authToken } = useAuth()
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [motivo, setMotivo] = useState('')
  const [cbuODni, setCbuODni] = useState('')
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')

  useEffect(() => {
    if (cbuODni.length > 8) {
      setRecipient('CBU')
    } else {
      setRecipient('DNI')
    }
  }, [cbuODni])

  console.log(user)
  const onSubmit = (data) => {
    console.log(authToken)
    console.log(data)
    const id = { ...data, sender: user.dni }
    transferRequest(authToken, id)
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
      <div className='containerAmount'>
        <div>
          <div className='balance'>
            <label id='amount' className='amount'>$</label>
            <TextField
              className='sinBorde'
              id='amount'
              name='amount'
              type='number'
              onChange={(e) => setAmount(e.target.value)}
              variant='standard'
              placeholder='0' {...register('amount', {
                required: 'Ingrese un monto valido',
                pattern: {
                  value: /^[0-9]+(\.[0-9]{1,2})?$/,
                  message: 'Ingrese un monto válido (ej: 100 o 100.50).'
                }
              })}
              error={Boolean(errors.amount)}
            />
          </div>
          {errors.amount && <p className='transfer_error'>{errors.amount.message}</p>}
        </div>
        <Typography variant='p' color='secondary' className='available'>Saldo disponible ${user.balance}</Typography>
        <div className='transfer_info' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            className='transaction_input'
            name='recipient'
            id='recipient'
            onChange={(e) => setCbuODni(e.target.value)}
            label='Ingresar CBU o CVU'
            type='number'
            variant='standard' {
              ...register('recipient', {
                required: 'Ingrese un CVU valido',
                minLength: 8,
                maxLength: 16
              })
            }
            error={Boolean(errors.recipient)}
          />
          {errors.recipient && <p className='transfer_error'>{errors.recipient.message}</p>}
          {errors.recipient && errors.recipient.type === 'minLength' && <p>Ingrese un CBU o DNI</p>}
          {errors.recipient && errors.recipient.type === 'maxLength' && <p>Ingrese un CBU o DNI</p>}
          <div className='containerMotivo'>
            <TextField
              className='transaction_input'
              name='detail'
              id='detail'
              label='Motivo'
              onChange={(e) => setMotivo(e.target.value)}
              type='text'
              variant='standard' {
              ...register('detail', {
                required: 'Ingrese un motivo'
              })
            }
              error={Boolean(errors.detail)}
            />
          </div>
          {errors.detail && <p className='transfer_error'>{errors.detail.message}</p>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Button
            className='btnGradient transfer_button'
            variant='text'
            type='submit'
            sx={{
              color: '#F1F0EA'
            }}
          >
            Continuar
          </Button>
        </div>

      </div>

    </form>
  )
}

export default Transfers
