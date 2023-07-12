import { Typography } from '@mui/material'
import icon1 from '../../assets/fi-sr-hand-holding-heart.png'
import './finances.css'

const iconCard1 = [{ name: 'Seguros', img: icon1 }]
const Finances = () => {
  return (
    <section className='card1' style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p className='ourProducts'>Nuestros productos</p>
      </div>
      <div className='cardsProducts' style={{ display: 'flex', width: '193px', height: '130px', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          {
              iconCard1.map((icon) => (
                <div className='icon-image1' style={{ color: '#FFFFFF', width: '24px', height: '24px' }} key={icon.name}>
                  <img style={{ objectFit: 'contain' }} src={icon.img} alt={icon.name} />
                  <Typography variant='p' color='secondary'>{icon.name}</Typography>
                </div>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Finances
