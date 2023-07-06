import React from 'react'
import Typography from '@mui/material/Typography'
import noti from '../../assets/zondicons_notification.png'
import term from '../../assets/basil_document-solid.png'
import help from '../../assets/ph_headset-fill.png'

const sidebar = [{ name: 'Notificaciones', img: noti }, { name: 'Terminos de uso', img: term }, { name: 'Ayuda y soporte', img: help }]
const SidebarDown = () => {
  return (
    <ul style={{ gap: '8px' }}>
      {
            sidebar.map((list) => (
              <li className='btnSidebar' key={list.name}>
                <img src={list.img} alt={list.name} className='iconSidebar' />
                <Typography variant='p' color='secondary' fontSize='1rem'>{list.name}</Typography>
              </li>
            ))
        }
    </ul>
  )
}

export default SidebarDown
