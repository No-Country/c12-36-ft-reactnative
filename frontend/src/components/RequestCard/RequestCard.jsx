import Button from '@mui/material/Button'
import card from '../../assets/card.png'
import './requestCard.css'
import Typography from '@mui/material/Typography'

const RequestCard = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <img src={card} alt='Tarjeta Pocketpal' className='card' />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '250px' }}>
        <Typography variant='p' color='secondary' fontSize='1.5rem' lineHeight='45px' fontWeight='500' width='295px' height='135px'>Pagá en cuotas y disfruta de promociones exclusivas</Typography>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Button variant='container' className='btnGradient' style={{ color: '#fdfdfe', textTransform: 'none' }}>
            Descargar App
          </Button>
          <Button variant='container' className='btnGradient' style={{ color: '#fdfdfe', textTransform: 'none' }}>
            Pedí tu tarjeta
          </Button>
        </div>
      </div>
    </section>
  )
}

export default RequestCard
