import React from 'react'
import IconButton from '@mui/material/IconButton'
import '../styles/crossCircle.css'

const CrossCircle = ({ onClick }) => {
  return (
    <IconButton className='cross-circle-btn' onClick={onClick} />
  )
}

export default CrossCircle
