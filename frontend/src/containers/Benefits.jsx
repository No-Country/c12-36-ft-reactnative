import Typography from '@mui/material/Typography'

import beneficios from '../assets/beneficios.png'
import recarga from '../assets/recarga.png'
import avion from '../assets/avion.png'

import '../styles/benefits.css'

const info = [{ name: 'Recargá tu linea con promos', img: recarga }, { name: 'Descuentos en viajes', img: avion }, { name: '15% en locales adheridos', img: beneficios }]
const Benefits = () => {
  return (
    <section className='containerBenefitsLanding'>
      {
            info.map((inf) => (
              <div className='info info-benefits' key={inf.name}>
                <img width='80px' height='80px' style={{ objectFit: 'contain' }} src={inf.img} alt={inf.name} />
                <Typography variant='p' color='secondary' fontSize='1.5rem' fontWeight='500' textAlign='center'>{inf.name}</Typography>
              </div>
            ))
        }
      <div className='info info-benefitsResp'>
        {
          info.map((inf) => (
            <div className='iconText' key={inf.name}>
              <img className='iconBenefits' src={inf.img} alt={inf.name} />
              <Typography variant='p' color='secondary' className='textBenefits'>{inf.name}</Typography>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Benefits
