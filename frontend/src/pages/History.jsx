import { Typography } from '@mui/material'
import '../styles/history.css'
import transaccion from '../assets/transaccion.png'
import { movementsRequest } from '../api/auth'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import { formatearPeso } from '../config/config'
// eslint-disable-next-line
const History = ({ limit }) => {
  const { authToken, dataUser } = useAuth()

  const [historySender, setHistorySender] = useState([])
  const [historyReceive, setHistoryReceive] = useState([])

  const history = [...historyReceive, ...historySender]
  history.sort((a, b) => new Date(b.date) - new Date(a.date))

  useEffect(() => {
    movementsRequest(authToken)
      .then((res) => {
        const movements = res.data
        const filterSenders = movements.filter((moves) => moves.senderName === dataUser.firstName + ' ' + dataUser.lastName)
        const filterReceive = movements.filter((moves) => moves.recipientName === dataUser.firstName + ' ' + dataUser.lastName)
        setHistorySender(filterSenders)
        setHistoryReceive(filterReceive)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [authToken, dataUser.firstName, dataUser.lastName])

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
          : (
              limit
                ? history.slice(0, limit).map((move, i) => (
                  <div className='emptyTransaction noEmpty' key={i}>
                    <Typography variant='p' color='secondary'>ID: {move._id}</Typography>
                    <div style={{ display: 'flex', width: '415px', justifyContent: 'space-between' }}>
                      <Typography variant='p' color='secondary'>Fecha: {new Date(move.date).toLocaleDateString('es-ES')}</Typography>

                      {
                  move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                    ? <Typography variant='p' sx={{ color: '#DD643E' }}>-{formatearPeso.format(move.amount)}</Typography>
                    : <Typography variant='p' sx={{ color: '#70CC6F' }}>+{formatearPeso.format(move.amount)}</Typography>
                  }
                    </div>
                    {
                  move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                    ? <Typography variant='p' color='secondary' style={{ width: '415px', textAlign: 'left' }}>Enviado a: {move.recipientName}</Typography>
                    : <Typography variant='p' color='secondary' style={{ width: '415px', textAlign: 'left' }}>Recibido de: {move.senderName}</Typography>
                  }

                  </div>
                ))
                : history.map((move, i) => (
                  <div className='emptyTransaction noEmpty' key={i}>
                    <Typography variant='p' color='secondary'>ID: {move._id}</Typography>
                    <div style={{ display: 'flex', width: '415px', justifyContent: 'space-between' }}>
                      <Typography variant='p' color='secondary'>Fecha: {new Date(move.date).toLocaleDateString('es-ES')}</Typography>

                      {
                    move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                      ? <Typography variant='p' sx={{ color: '#DD643E' }}>-{formatearPeso.format(move.amount)}</Typography>
                      : <Typography variant='p' sx={{ color: '#70CC6F' }}>+{formatearPeso.format(move.amount)}</Typography>
                    }
                    </div>
                    {
                    move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                      ? <Typography variant='p' color='secondary' style={{ width: '415px', textAlign: 'left' }}>Enviado a: {move.recipientName}</Typography>
                      : <Typography variant='p' color='secondary' style={{ width: '415px', textAlign: 'left' }}>Recibido de: {move.senderName}</Typography>
                    }

                  </div>
                ))
            )

      }

    </section>
  )
}

export default History
