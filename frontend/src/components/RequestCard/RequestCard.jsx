import card from '../../assets/DESIGN 1.png'
import card_2 from '../../assets/DESIGN 3.png'
import './requestCard.css'
import Typography from '@mui/material/Typography'
import BtnGradient from '../BtnGradient/BtnGradient'

const RequestCard = () => {
  const tarjeta = { text: 'Solicita tu tarjeta hoy' }
  return (
    <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <img src={card} alt='Tarjeta Pocketpal' className='cardLanding' />
        <img src={card_2} alt='Tarjeta Pocketpal' className='cardLanding_2' style={{ position: 'absolute', top: 48, left: -5 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '250px' }}>
        <Typography variant='p' color='secondary' fontSize='1.875rem' textAlign='center' lineHeight='45px' fontWeight='500' width='365px' height='135px'>Pagá en cuotas <br /> y disfruta de <br /> promociones exclusivas</Typography>
        <div style={{ width: '184px', height: '24px', display: 'flex', gap: '14px', alignItems: 'center' }}>
          <BtnGradient prop={tarjeta} />
        </div>
      </div>
    </section>
  )
}

export default RequestCard
