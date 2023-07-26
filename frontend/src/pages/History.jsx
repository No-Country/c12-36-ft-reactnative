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
  const [history, setHistory] = useState([])
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
        const filterMovements = movements.filter((moves) => moves.sender === dataUser._id)
        setHistory(filterMovements)
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
            <div className='emptyTransaction' key={move._id}>
              <Typography variant='p' color='secondary'>{move.recipient}</Typography>
            </div>
          ))
      }

    </section>
  )
}

export default History
