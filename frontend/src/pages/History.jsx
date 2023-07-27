import { Typography } from '@mui/material'
import '../styles/history.css'
import transaccion from '../assets/transaccion.png'
import { movementsRequest, userRequest } from '../api/auth'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'

const cards = ['', '', '']
const History = () => {
  const { user, authToken } = useAuth()
  const [dataUser, setDataUser] = useState('')
  const [historySender, setHistorySender] = useState([])
  const [historyReceive, setHistoryReceive] = useState([])

  const history = [...historyReceive, ...historySender]
  history.sort((a, b) => new Date(b.date) - new Date(a.date))
  useEffect(() => {
    userRequest(authToken)
      .then((res) => {
        const usersData = res.data
        const filterUser = usersData.find((userData) => userData.dni === user.dni)
        setDataUser(filterUser)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [authToken, user.dni])

  console.log(dataUser)
  useEffect(() => {
    movementsRequest(authToken)
      .then((res) => {
        const movements = res.data
        const filterSenders = movements.filter((moves) => moves.sender === dataUser._id)
        const filterReceive = movements.filter((moves) => moves.recipient === dataUser._id)
        setHistorySender(filterSenders)
        setHistoryReceive(filterReceive)
        console.log(res.response)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [authToken, dataUser._id])

  console.log(history)
  return (
    <section className='containerHistory'>
      <div>
        <p className='transactions'>Historial de movimientos</p>
      </div>
      {
        !history
          ? (
            <div className='emptyTransaction'>
              <img className='transaction_icon' src={transaccion} alt='sin movimientos' />
              <Typography variant='p' color='secondary'>Sin movimientos</Typography>
            </div>
            )
          : history.map((move) => (
            <div className='emptyTransaction noEmpty' key={move._id}>
              <Typography variant='p' color='secondary'>ID de operacion: {move._id}</Typography>
              <Typography variant='p' color='secondary'>Fecha: {new Date(move.date).toLocaleDateString('es-ES')}</Typography>
              {
                move.sender === dataUser._id
                  ? <Typography variant='p' sx={{ color: 'green' }}>Enviado: {move.amount}</Typography>
                  : <Typography variant='p' sx={{ color: 'red' }}>{move.amount}</Typography>
              }
            </div>
          ))
      }

    </section>
  )
}

export default History
