import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import '../styles/transfer.css'
import { useAuth } from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import { transferRequest, userRequest } from '../api/auth'
import { useEffect, useState } from 'react'
import { formatearPeso } from '../config/config'
import { TransferErrorPop, TransferPop } from '../config/popUps'

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
  const navigate = useNavigate()

  const handleTransfer = () => {
    transferRequest(authToken, transfer)
      .then((res) => {
        TransferPop()
      })
      .then(() => navigate('/home/dashboard'))
      .catch((err) => {
        console.error(err)
        TransferErrorPop()
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
    if (users.length > 0 && recipient !== '') {
      // eslint-disable-next-line
      const search = users.filter((user) => user.dni == recipient || user.cbu === recipient)
      setThisUser(search)
    }
  }, [recipient, users, cbuODni])

  useEffect(() => {
    if (recipient.length > 8) {
      setCbuODni('CBU')
    } else {
      setCbuODni('DNI')
    }
  }, [recipient])

  const onSubmit = (data, e) => {
    e.preventDefault()
    const { amount, recipient, detail } = data

    const newData = {
      amount: parseFloat(amount),
      recipient,
      detail,
      sender: user.dni
    }
    setAmount(amount)
    setRecipient(recipient)
    setDetail(detail)
    setInfo(1)
    setTransfer(newData)
  }

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

            <Typography variant='p' color='secondary' className='available'>Saldo disponible {formatearPeso.format(user.balance)}</Typography>
            <div className='transfer_info'>
              <TextField
                className='transaction_input' name='recipient' id='recipient' onChange={(e) => setRecipient(e.target.value)} label='Ingresar CBU o CVU o DNI' type='number' variant='standard' {
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
                <Button color='secondary' className='btnGradient btnBack' onClick={() => setInfo(0)}>Volver Atras</Button>
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
