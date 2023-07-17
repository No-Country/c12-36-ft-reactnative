import { Typography } from '@mui/material'
import '../styles/history.css'

const cards = ['', '', '']
const History = () => {
  return (
    <section>
      <div>
        <p className='transactions'>Historial de movimientos</p>
      </div>
      <div style={{ display: 'grid', gap: '34px' }}>
        {cards.map((icon, index) => (
          <div className='cardsTransactions' style={{ width: '923px', height: '65px' }} key={icon.name + index} >
          </div>
        )
        )
      }
      </div>
    </section>
  )
}

export default History
