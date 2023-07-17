import Typography from '@mui/material/Typography'

import beneficios from '../assets/beneficios.png'
import recarga from '../assets/recarga.png'
import descuento from '../assets/descuento.png'

import '../styles/benefits.css'

const info = [{ name: 'Recarga tu linea con promos', img: recarga }, { name: '30% en bares adheridos', img: descuento }, { name: '15% en locales adheridos', img: beneficios }]
const Benefits = () => {
  return (
    <div className='benefits_landing'>
      <Typography variant='h4' color='secondary' textAlign='center'>
        Tenemos estos beneficios para vos
      </Typography>
      <div className='options_benefits'>
        {
          info.map((inf) => (
            <div className='info info-benefits' key={inf.name}>
              <img width='90px' height='90px' style={{ objectFit: 'contain' }} src={inf.img} alt={inf.name} />
              <Typography variant='p' color='secondary' fontSize='1.25rem'>{inf.name}</Typography>
            </div>
          ))
        }
      </div>      
    </div>
  )
}

export default Benefits
