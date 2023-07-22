import { Typography } from '@mui/material'
import '../styles/history.css'
import transaccion from '../assets/transaccion.png'

const cards = ['', '', '']
const History = () => {
  return (
    <section className='containerHistory'>
      <div>
        <p className='transactions'>Historial de movimientos</p>
      </div>
      <div className='emptyTransaction'>
        <img src={transaccion} alt='sin movimientos' />
        <Typography variant='p' color='secondary'>Sin movimientos</Typography>
      </div>
      {/* <div style={{ display: 'grid', gap: '34px' }}> */}
      {/* {cards.map((icon, index) => (
          <div className='cardsTransactions' style={{ width: '923px', height: '65px' }} key={icon.name + index} />
        )
        )} */}
      {/* </div> */}
    </section>
  )
}

export default History
