import { Typography } from '@mui/material'
import icon1 from '../assets/fi-sr-hand-holding-heart.png'
import icon2 from '../assets/fi-sr-shopping-bag-add.png'
import '../styles/finances.css'

const iconCard = [{ name: 'Seguros', img: icon1 }, { name: 'Préstamos', img: icon2 }, { name: 'Préstamos', img: icon2 }, { name: 'Préstamos', img: icon2 }]
const lastIconCard = ['']
const Finances = () => {
  return (
    <section>
      <div>
        <p className='ourProducts'>Nuestros productos</p>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        {iconCard.map((icon) => (
          <div className='cardsProducts' style={{ width: '193px', height: '130px' }} key={icon.name}>
            <div className='iconImage1'>
              <img style={{ width: '24px', height: '24px' }} src={icon.img} alt={icon.name} />
              <Typography variant='p' color='secondary'>{icon.name}</Typography>
            </div>
          </div>
        )
        )}
        {lastIconCard.map((icon) => (
          <div className='cardsProducts' style={{ width: '88px', height: '130px' }} key={icon.name}>
            <div className='iconImage1' />
          </div>
        )
        )}
      </div>
    </section>
  )
}

export default Finances
