import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../containers/Sidebar'
import Divider from '@mui/material/Divider'

import '../styles/cardBalance.css'

export const Home = () => {
  return (
    <div className='home' style={{ display: 'flex' }}>
      <Sidebar />
      <Divider orientation='vertical' flexItem className='divider' />
      <Outlet />
    </div>
  )
}

export default Home
