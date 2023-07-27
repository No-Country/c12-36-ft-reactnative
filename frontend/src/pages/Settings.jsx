import React from 'react'
import SidebarComponentResp from '../containers/SidebarComponentResp'
import portrait from '../assets/fi-sr-portrait.png'
import padlock from '../assets/padlock.png'
// import notification from '../assets/fi-sr-bell.png'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Outlet } from 'react-router-dom'

import '../styles/settings.css'

const sidebar = [{ name: 'Mis datos', img: portrait, path: '/home/settings/edit_profile' }, { name: 'Contraseña', img: padlock, path: '/home/settings/edit_password' }]
// { name: 'Notificaciones', img: notification }

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settings_sidebar'>
        <Typography className='sidebar_title' color='secondary' fontSize='1.1rem'>Configuracion de cuenta</Typography>
        <SidebarComponentResp className='settings_options' sidebar={sidebar} />
      </div>
      <Divider orientation='vertical' flexItem className='dividerVertical' />
      <Outlet />
    </div>

  )
}

export default Settings
