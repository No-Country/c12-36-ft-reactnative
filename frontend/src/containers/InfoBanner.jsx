import '../styles/infoBanner.css'
import Typography from '@mui/material/Typography'

import join from '../assets/enlace.png'
import cargar from '../assets/cargar.png'
import pagar from '../assets/pagar.png'

const info = [{ name: 'Hace rendir tus ahorros', img: join }, { name: 'Enviar y recibir dinero', img: cargar }, { name: 'Pagar tus servicios', img: pagar }]

const InfoBanner = () => {
  return (
    <div className='info_banner'>
      <Typography variant='h4' color='secondary' textAlign='center'>Con Pocketpal podes</Typography>
      <div className='options_banner'>
        {
          info.map((inf) => (
            <div className='info' key={inf.name}>
              <img width='90px' height='90px' style={{ objectFit: 'contain' }} src={inf.img} alt={inf.name} />
              <Typography variant='h6' color='secondary'>{inf.name}</Typography>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default InfoBanner
