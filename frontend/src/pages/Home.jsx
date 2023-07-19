import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../containers/Sidebar'
import Divider from '@mui/material/Divider'

import '../styles/home.css'

export const Home = () => {
  return (
    <div className='home'>
      <div className='sidebarResponsive'>
        <Sidebar />
      </div>
      <Divider orientation='vertical' flexItem className='dividerVertical' />
      <Outlet />
    </div>
  )
}

export default Home
