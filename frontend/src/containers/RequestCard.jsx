import Typography from '@mui/material/Typography'

import card from '../assets/card.png'
import BtnGradient from '../components/BtnGradient'

import '../styles/requestCard.css'

const RequestCard = () => {
  const descargar = { text: 'Descargar App' }
  const tarjeta = { text: 'Pedí tu tarjeta' }
  return (
    <div className='request_card'>
      <img className='cardLanding' src={card} alt='Tarjeta Pocketpal'/>
      <aside className='card_aside'>
        <Typography className='card_aside_text' variant='p' color='secondary'>
          Pagá en cuotas y disfruta de promociones exclusivas
        </Typography>
        <div className='card_aside_buttons'>
          <BtnGradient prop={descargar} />
          <BtnGradient prop={tarjeta} />
        </div>
      </aside>
    </div>
  )
}

export default RequestCard
