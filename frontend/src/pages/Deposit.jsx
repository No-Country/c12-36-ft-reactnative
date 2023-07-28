import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import '../styles/deposit.css'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { transferRequest } from '../api/auth'
import { useAuth } from '../hooks/useAuth'
import { depositError, depositSucces } from '../config/popUps'
import { useNavigate } from 'react-router'
const Deposit = () => {
  const { authToken, user } = useAuth()
  const [amount, setAmount] = useState('')
  const { register, formState: { errors }, handleSubmit } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data, e) => {
    e.preventDefault()

    const monto = parseFloat(data.amount)
    const deposito = user.dni
    const sender = '11111111'
    const motivo = 'ingreso de dinero'

    const newData = {
      amount: monto,
      sender,
      recipient: deposito,
      detail: motivo
    }
    console.log(newData)
    transferRequest(authToken, newData)
      .then(() => {
        depositSucces()
      })
      .then(() => {
        navigate('/home/dashboard')
      })
      .catch((err) => {
        console.error(err)
        depositError()
      })
  }

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  return (
    <div className='deposit'>
      <Cards
        number={number}
        expiry={expiry}
        cvc={cvc}
        name={name}
        focused={focus}
      />
      <form onSubmit={handleSubmit(onSubmit)} className='formDeposit'>
        <div className='labelsDeposit'>
          <input
            className='labelCard'
            type='tel'
            name='number'
            maxLength={16}
            minLength={16}
            placeholder='Numero de Tarjeta'
            value={number}
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            required
          />
          <input
            className='labelCard'
            type='text'
            name='name'
            maxLength={18}
            placeholder='Nombre y apellido'
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            required
          />
          <input
            className='labelCard'
            type='text'
            name='expiry'
            placeholder='MM/YY Fecha de expiracion'
            value={expiry}
            maxLength={4}
            minLength={4}
            onChange={e => setExpiry(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            required
          />
          <input
            className='labelCard'
            type='tel'
            name='cvc'
            placeholder='CVC'
            value={cvc}
            maxLength={3}
            minLength={3}
            onChange={e => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            required
          />
        </div>
        <div>
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
          {errors.amount && <p className='transfer_error'>{errors.amount.message}</p>}

        </div>

        <Button className='btnGradient' color='secondary' type='submit'>Ingresar Dinero</Button>
      </form>
    </div>
  )
}

export default Deposit
