import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import card from '../../assets/card.png'
import './requestCard.css'

const RequestCard = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'space-around' }}>
      <img src={card} alt='Tarjeta Pocketpal' className='card' />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <p>XXXXXXXXXX</p>
        <p>XXXXXXXXXX</p>
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
