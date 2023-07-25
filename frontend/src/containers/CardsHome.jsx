import icon1 from '../assets/transfer.png'
import icon2 from '../assets/fi-sr-money.png'
import icon3 from '../assets/fi-sr-bank.png'
import icon4 from '../assets/fi-sr-chat-arrow-grow.png'
import { NavLink } from 'react-router-dom'

import '../styles/cardsHome.css'

const iconCards = [{ name: 'Transferir dinero', img: icon1, path: '/home/transfers' }, { name: 'Ingresar dinero', img: icon2 }, { name: 'Pago de servicios', img: icon3 }, { name: 'Inversiones', img: icon4 }]
const CardsHome = () => {
  return (
    <div className='gridCards'>
      {
        iconCards.map((icon) => (
          <div key={icon.name}>
            <NavLink className='card' to={icon.path}>
              <div className='card_container'>
                <img className='card_img' src={icon.img} alt={icon.name} />
              </div>
              <p className='text_card'>{icon.name}</p>
            </NavLink>
          </div>
        ))
      }
    </div>
  )
}

export default CardsHome
