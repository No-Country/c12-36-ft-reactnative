import React from 'react'
import SidebarUp from '../SidebarUp/SidebarUp'
import { Divider } from '@mui/material'
import SidebarDown from '../SidebarDown/SidebarDown'
import SidebarPerfil from '../SidebarPerfil/SidebarPerfil'

const Sidebar = () => {
  return (
    <section style={{ width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SidebarUp />
      <Divider className='divider' style={{ width: '80%', marginTop: '2rem', marginBottom: '2rem' }} />
      <SidebarDown />
      <SidebarPerfil />
    </section>
  )
}

export default Sidebar
