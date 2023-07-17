import icon1 from '../assets/fi-sr-cursor-plus.png'
import icon2 from '../assets/fi-sr-money.png'
import icon3 from '../assets/fi-sr-bank.png'
import icon4 from '../assets/fi-sr-chat-arrow-grow.png'
import '../styles/cardsHome.css'

const iconCards = [{ name: 'Transferir dinero', img: icon1 }, { name: 'Ingresar dinero', img: icon2 }, { name: 'Pago de servicios', img: icon3 }, { name: 'Inversiones', img: icon4 }]
const CardsHome = () => {
  return (
    <div className='gridCards'>
      {
            iconCards.map((icon) => (
              <div className='card' key={icon.name}>
                <img style={{ display: 'flex', flexShrink: '0', width: '24px', objectFit: 'contain' }} src={icon.img} alt={icon.name} />
                <p className='iconText'>{icon.name}</p>
              </div>
            ))
        }
    </div>
  )
}

export default CardsHome
