import { Typography } from '@mui/material'

import '../styles/welcome.css'
import { useAuthContext } from '../hooks/useAuthContext'
import icon1 from '../assets/fi-sr-eye.png'
import icon2 from '../assets/fi-sr-copy.png'

const iconCard1 = [{ img: icon1 }]
const iconCard2 = [{ img: icon2 }]
const Welcome = () => {
  const { user } = useAuthContext()

  return (
    <section className='containerWelcome'>
      <div>
        <p className='greetings'>Hola {user.firstName}</p>
        <p className='welcome'>Bienvenido</p>
      </div>
      <div className='cardSaldo'>
        <div className='containerCuentas'>
          <div>
            <div style={{ color: '#F1F0EA', fontWeight: '600', fontSize: '14px' }}>Cuentas</div>
            <div style={{ color: '#F1F0EA', fontWeight: '500', fontSize: '12px' }}>Saldos totales</div>
          </div>
          <div className='icon-image1' style={{ color: '#FFFFFF', width: '24px', height: '24px' }}>
            <img style={{ objectFit: 'contain' }} src={icon1} />
          </div>
        </div>
        <div style={{ color: '#F1F0EA', display: 'flex', fontSize: '48px', fontWeight: '700' }}>
          <span>$ </span>
          <span>0,00</span>
        </div>
        <div className='containerCVU'>
          <div className='cvu' style={{ fontSize: '14px' }}>Tu CVU</div>
          <div className='icon-image2' style={{ color: '#FFFFFF', width: '24px', height: '24px' }}>
            <img style={{ objectFit: 'contain' }} src={icon2} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
