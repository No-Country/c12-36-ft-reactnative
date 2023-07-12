import React from 'react'
import { Divider } from '@mui/material'
import SidebarPerfil from '../SidebarPerfil/SidebarPerfil'
import panel from '../../assets/fi-sr-apps.png'
import cards from '../../assets/fi-sr-credit-card (1).png'
import manos from '../../assets/fa-solid_hands-helping.png'
import moves from '../../assets/fi-sr-navigation.png'
import SidebarComponent from '../SidebarComponent/SidebarComponent'
import help from '../../assets/fi-sr-comments.png'
import settings from '../../assets/fi-sr-settings.png'
import terms from '../../assets/fi-sr-document.png'
import tarjeta from '../../assets/fi-sr-credit-card.png'

const sidebarUp = [{ name: 'Mi panel', img: panel, path: '/home/dashboard' }, { name: 'Transacciones', img: tarjeta }, { name: 'Mis tarjetas', img: cards }, { name: 'Servicios', img: manos }, { name: 'Movimientos', img: moves }]
const sidebarDown = [{ name: 'Terminos de uso', img: terms }, { name: 'Ayuda y soporte', img: help }, { name: 'Configuraciones', img: settings, path: '/home/settings/profile' }]

const Sidebar = () => {
  return (
    <section style={{ width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        <SidebarComponent sidebar={sidebarUp} />
        <SidebarComponent sidebar={sidebarDown} />
      </div>
      <Divider className='divider' style={{ width: '219px', marginTop: '2rem', marginBottom: '2rem' }} />
      <SidebarPerfil />
    </section>
  )
}

export default Sidebar
