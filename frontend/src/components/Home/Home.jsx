import React from 'react'
import './cardBalance.css'

import Welcome from '../Welcome/Welcome.jsx'
import arrowSortImage from '../../assets/fluent_arrow-sort-16-filled.png'
import Sidebar from '../Sidebar/Sidebar'
import Divider from '@mui/material/Divider'
import CardsHome from '../CardsHome/CardsHome'

const Overlap = () => {
  return (
    <div className='overlap'>
      <div className='text-wrapper-5'>Transacciones</div>
      <img
        className='fluent-arrow-sort'
        alt='Fluent arrow sort'
        src={arrowSortImage}
      />
    </div>
  )
}

export const Home = () => {
  return (
    <article className='home'>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Divider orientation='vertical' flexItem className='divider' />
        <div style={{ display: 'flex', margin: 'auto', height: '600px', justifyContent: 'center' }}>
          <Welcome />
          <CardsHome />
        </div>
      </div>
    </article>
  )
}

export default Home
