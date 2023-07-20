import '../styles/sidebar.css'
import { Button, Divider, Typography } from '@mui/material'
import panel from '../assets/fi-sr-apps.png'
import cards from '../assets/fi-sr-credit-card (1).png'
import manos from '../assets/fa-solid_hands-helping.png'
import moves from '../assets/fi-sr-navigation.png'
import SidebarComponent from './SidebarComponent'
import help from '../assets/fi-sr-comments.png'
import settings from '../assets/fi-sr-settings.png'
import terms from '../assets/fi-sr-document.png'
import tarjeta from '../assets/fi-sr-credit-card.png'
import close from '../assets/close.png'
import { useLogout } from '../hooks/useLogout'

const sidebarUp = [{ name: 'Mi panel', img: panel, path: '/home/dashboard', focus: true }, { name: 'Transacciones', img: tarjeta, path: '/home/transfers' }, { name: 'Mis tarjetas', img: cards }, { name: 'Servicios', img: manos }, { name: 'Movimientos', img: moves }]
const sidebarDown = [{ name: 'Terminos de uso', img: terms }, { name: 'Ayuda y soporte', img: help }, { name: 'Configuraciones', img: settings, path: '/home/settings/profile' }]

const Sidebar = () => {
  const { logout } = useLogout()

  return (

    <section className='sidebar'>
      <div className='focus'>
        <SidebarComponent sidebar={sidebarUp} />
        <SidebarComponent sidebar={sidebarDown} />
      </div>
      <Divider className='divider' />

      <Button style={{ display: 'flex', gap: '8px' }} onClick={logout}><img src={close} /><Typography color='secondary'>Cerrar sesión</Typography></Button>
    </section>
  )
}

export default Sidebar
