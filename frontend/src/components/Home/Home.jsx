import React from 'react'
import './cardBalance.css'

import Welcome from '../Welcome/Welcome.jsx'
import arrowSortImage from '../../assets/fluent_arrow-sort-16-filled.png'
import handCashImage from '../../assets/iconoir_hand-cash.png'
import basilDocumentImage from '../../assets/basil_document-solid.png'
import streamlineMoneyImage from '../../assets/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.png'
import Sidebar from '../Sidebar/Sidebar'
import Divider from '@mui/material/Divider'

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
        <div className='div'>
          <Welcome />

        </div>
      </div>

    </article>
  )
}

export default Home
