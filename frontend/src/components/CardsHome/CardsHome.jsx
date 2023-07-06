import { Typography } from '@mui/material'
import trans from '../../assets/fluent_arrow-sort-16-filled.png'
import './cardsHome.css'

const iconCards = [{ name: 'Transacciones', img: trans }, { name: 'Recargar Dinero', img: trans }, { name: 'TransacPago de servicios', img: trans }, { name: 'Inversiones', img: trans }]
const CardsHome = () => {
  return (
    <div className='gridCards'>
      {
            iconCards.map((icon) => (
              <div style={{ width: '154px', height: '70px', display: 'flex', gap: '8px', borderRadius: '10px' }} key={icon.name}>
                <img style={{ width: '24px', objectFit: 'contain' }} src={icon.img} alt={icon.name} />
                <Typography variant='p' color='secondary'>{icon.name}</Typography>
              </div>
            ))
        }
    </div>
  )
}

export default CardsHome
