import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import '../styles/transfer.css'
/* import { useAuthContext } from '../hooks/useAuthContext'
 */import pencil from '../assets/fi-sr-pencil.png'
import { useAuth } from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import { transferRequest, userRequest } from '../api/auth'
import { useEffect, useState } from 'react'

const Transfers = () => {
  const { user, authToken } = useAuth()
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [detail, setDetail] = useState('')
  const [cbuODni, setCbuODni] = useState('')
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [info, setInfo] = useState(0)
  const [users, setUsers] = useState('')
  const [thisUser, setThisUser] = useState('')
  const [transfer, setTransfer] = useState('')

  const handleTransfer = () => {
    transferRequest(authToken, transfer)
      .then((res) => {
        console.log(res.data)
      })
  }
  useEffect(() => {
    userRequest(authToken)
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [authToken])

  useEffect(() => {
    console.log(users)
    if (users.length > 0 && recipient !== '') {
      console.log(recipient)
      // eslint-disable-next-line
      const search = users.filter((user) => user.dni == recipient)
      setThisUser(search)
    }
  }, [recipient, users])

  const onSubmit = (data, e) => {
    e.preventDefault()
    const { amount, recipient, detail } = data

    const newData = {
      amount: parseFloat(amount), // Convertir amount a número
      recipient,
      detail,
      sender: user.dni // Incluir el sender en transfer
    }
    setAmount(amount)
    setRecipient(recipient)
    setDetail(detail)
    setInfo(1)
    setTransfer(newData)
  }

  console.log(transfer)
  console.log(typeof (amount))
  console.log(thisUser)
  return (
    <>
      {
      !info &&
        <form className='transfer' onSubmit={handleSubmit(onSubmit)}>
          <div className='titleSubtitle'>
            <Typography color='secondary' variant='p' className='titleTransfer'>Transacciones</Typography>
            <Typography color='secondary' variant='p' className='subtitleTransfer'>Ingresa un monto:</Typography>
          </div>
          <div className='containerAmount'>
            <div className='balance'>
              <label id='amount' className='amount'>$</label>
              <TextField
                id='amount' name='amount' type='number' className='sinBorde' onChange={(e) => setAmount(e.target.value)} variant='standard' placeholder='0' {...register('amount', {
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

            <Typography variant='p' color='secondary' className='available'>Saldo disponible ${user.balance}</Typography>
            <div className='transfer_info'>
              <TextField
                className='transaction_input' name='recipient' id='recipient' onChange={(e) => setRecipient(e.target.value)} label='Ingresar CBU o CVU' type='number' variant='standard' {
              ...register('recipient', {
                required: 'Ingrese un CVU valido',
                minLength: 8,
                maxLength: 22
              })
            }
                error={Boolean(errors.recipient)}
              />
              {errors.recipient && <p className='transfer_error'>{errors.recipient.message}</p>}
              {errors.recipient && errors.recipient.type === 'minLength' && <p className='transfer_error'>Ingrese un CBU o DNI</p>}
              {errors.recipient && errors.recipient.type === 'maxLength' && <p className='transfer_error'>Ingrese un CBU o DNI</p>}
              <div className='containerMotivo'>
                <TextField
                  className='transaction_input' name='detail' id='detail' label='Varios' onChange={(e) => setDetail(e.target.value)} type='text' variant='standard' {
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
                color='secondary'
              >
                Continuar
              </Button>
            </div>

          </div>

        </form>
    }
      {
      info === 1 && thisUser &&
        <div className='transfer'>
          <div className='titleSubtitle'>
            <Typography color='secondary' variant='p' className='titleTransfer'>Transacciones</Typography>
            <Typography color='secondary' variant='p' className='subtitleTransfer'>El monto a enviar es:</Typography>
          </div>
          <div className='containerAmount'>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
              <p className='amount'>${amount}</p>
              <div className='boxDetailTransfer'>
                <p>Usuario a transferir: {thisUser[0].firstName} {thisUser[0].lastName}</p>
                <p>CBU o CVU: {thisUser[0].cbu}</p>
                <p>DNI: {thisUser[0].dni}</p>
                <p>Fecha: {new Date().toLocaleDateString('es-ES')} </p>
                <p>Motivo: {detail}</p>
              </div>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <Button color='secondary' className='btnGradient btnBack'>Volver Atras</Button>
                <Button color='secondary' onClick={handleTransfer} className='btnGradient'>Confirmar</Button>
              </div>

            </div>
          </div>
        </div>
    }

    </>
  )
}

export default Transfers
