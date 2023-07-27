import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import GiftBox from '../assets/REGALO BLANCO 2.png'
import CrossCircle from '../components/CrossCircle'

import '../styles/gift.css'
import { useAuth } from '../hooks/useAuth'

const Gift = () => {
  const { user } = useAuth()
  const [showPopup, setShowPopup] = useState(true)

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      {showPopup && (
        <div className='popup-container'>
          <CrossCircle className='close-icon' onClick={handleClosePopup} />
          <div className='popup-content'>
            <img src={GiftBox} alt='GiftBox' className='gift-icon' />
            <h2>UNITE A POCKETPAL</h2>
            <h2>Y RECIBÍ <span className='gift-amount'>$1200</span> DE REGALO</h2>
            <Typography variant='p' color='secondary'>Tenemos estos beneficios para vos</Typography>
          </div>
        </div>
      )}
    </>
  )
}

export default Gift
