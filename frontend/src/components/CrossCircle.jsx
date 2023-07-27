import React from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import '../styles/crossCircle.css'

const CrossCircle = ({ onClick }) => {
  return (
    <IconButton className="cross-circle-btn" onClick={onClick}>
      <CloseIcon />
    </IconButton>
  )
}

export default CrossCircle
