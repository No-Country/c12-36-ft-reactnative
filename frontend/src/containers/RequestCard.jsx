import Typography from '@mui/material/Typography'
import card from '../assets/TarjNaranja.png'

import card2 from '../assets/tarjVioleta.png'

import '../styles/requestCard.css'
import { Button } from '@mui/material'

const RequestCard = () => {
  return (
    <section className='containerRequestCard'>
      <div className='containersCards'>
        <img src={card} alt='Tarjeta Pocketpal' className='cardLanding' />
        <img src={card2} alt='Tarjeta Pocketpal' className='cardLanding_2' />
      </div>
      <div className='btnTextRequest'>
        <Typography variant='p' color='secondary' className='titleRequestCard'>Pagá en cuotas <br /> y disfruta de <br /> promociones exclusivas</Typography>
        <Button color='secondary' className='btnGradient btnGradient--request'><Typography className='textRequestBtn' color='secondary'>Solicitá tu tarjeta hoy</Typography></Button>
      </div>
    </section>
  )
}

export default RequestCard
