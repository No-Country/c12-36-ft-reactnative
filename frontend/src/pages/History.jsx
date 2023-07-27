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

  console.log(dataUser)
  useEffect(() => {
    movementsRequest(authToken)
      .then((res) => {
        const movements = res.data
        const filterSenders = movements.filter((moves) => moves.senderName === dataUser.firstName + ' ' + dataUser.lastName)
        const filterReceive = movements.filter((moves) => moves.recipientName === dataUser.firstName + ' ' + dataUser.lastName)
        setHistorySender(filterSenders)
        setHistoryReceive(filterReceive)
        console.log(res.response)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [authToken, dataUser.firstName, dataUser.lastName])

  console.log(historySender)
  return (
    <section className='containerHistory'>
      <p className='transactions'>Historial de movimientos</p>
      <p className='transactions'>Historial de movimientos</p>
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
                    <div className='single_transaction'>
                      <Typography className='transfer_date' color='secondary'>{new Date(move.date).toLocaleDateString('es-ES')}</Typography>
                      {
                      move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                        ? <Typography color='secondary' className='transfer_data'><span className='transfer_subtitle'>Enviado a: </span>{move.recipientName}</Typography>
                        : <Typography color='secondary' className='transfer_data'><span className='transfer_subtitle'>Recibido de: </span>{move.senderName}</Typography>
                    }
                      {
                      move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                        ? <Typography variant='p' sx={{ color: '#DD643E' }}>-{formatearPeso.format(move.amount)}</Typography>
                        : <Typography variant='p' sx={{ color: '#70CC6F' }}>+{formatearPeso.format(move.amount)}</Typography>
                    }
                      move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                        ? <Typography variant='p' sx={{ color: '#DD643E' }}>-{formatearPeso.format(move.amount)}</Typography>
                        : <Typography variant='p' sx={{ color: '#70CC6F' }}>+{formatearPeso.format(move.amount)}</Typography>
                    }
                    </div>
                    <Typography className='transfer_id' variant='p' color='secondary'>ID: {move._id}</Typography>
                  </div>
                ))
                : history.map((move, i) => (
                  <div className='emptyTransaction noEmpty' key={i}>
                    <div className='single_transaction'>
                      <Typography className='transfer_date' color='secondary'>{new Date(move.date).toLocaleDateString('es-ES')}</Typography>
                      {
                      move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                        ? <Typography color='secondary' className='transfer_data'><span className='transfer_subtitle'>Enviado a: </span>{move.recipientName}</Typography>
                        : <Typography color='secondary' className='transfer_data'><span className='transfer_subtitle'>Recibido de: </span>{move.senderName}</Typography>
                    }
                      {
                      move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                        ? <Typography className='transfer_amount' sx={{ color: '#DD643E' }}>-{formatearPeso.format(move.amount)}</Typography>
                        : <Typography className='transfer_amount' sx={{ color: '#70CC6F' }}>+{formatearPeso.format(move.amount)}</Typography>
                      {
                      move.senderName === dataUser.firstName + ' ' + dataUser.lastName
                        ? <Typography className='transfer_amount' sx={{ color: '#DD643E' }}>-{formatearPeso.format(move.amount)}</Typography>
                        : <Typography className='transfer_amount' sx={{ color: '#70CC6F' }}>+{formatearPeso.format(move.amount)}</Typography>
                    }
                    </div>
                    <Typography className='transfer_id' variant='p' color='secondary'>ID: {move._id}</Typography>
                  </div>
                ))
            )
      }
    </section>
  )
}

export default History
