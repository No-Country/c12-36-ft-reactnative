import Typography from '@mui/material/Typography'
import beneficios from '../../assets/beneficios.png'
import recarga from '../../assets/recarga.png'
import descuento from '../../assets/descuento.png'
import './benefits.css'

const info = [{ name: 'Recargá tu linea con promos', img: recarga }, { name: '30% en bares adheridos', img: descuento }, { name: '15% en locales adheridos', img: beneficios }]
const Benefits = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      {
            info.map((inf) => (
              <div className='info info-benefits' key={inf.name}>
                <img width='80px' height='80px' style={{ objectFit: 'contain' }} src={inf.img} alt={inf.name} />
                <Typography variant='p' color='secondary' fontSize='1.5rem' fontWeight='500' textAlign='center'>{inf.name}</Typography>
              </div>
            ))
        }
    </section>
  )
}

export default Benefits
