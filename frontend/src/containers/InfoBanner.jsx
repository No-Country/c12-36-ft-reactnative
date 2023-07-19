import '../styles/infoBanner.css'
import Typography from '@mui/material/Typography'

import join from '../assets/enlace.png'
import cargar from '../assets/cargar.png'
import pagar from '../assets/pagar.png'

const info = [{ name: 'Hace rendir tus ahorros', img: join }, { name: 'Enviar y recibir dinero', img: cargar }, { name: 'Pagar tus servicios', img: pagar }]

const InfoBanner = () => {
  return (
    <section className='infoBanner'>
      {
        info.map((inf) => (
          <div className='info' key={inf.name}>
            <img className='iconInfoBanner' src={inf.img} alt={inf.name} />
            <Typography variant='p' color='secondary' className='textIconInfoBanner'>{inf.name}</Typography>
          </div>
        ))
      }
    </section>
  )
}

export default InfoBanner
