import React from 'react'

import error from '../assets/error.png'

import '../styles/error.css'

const Error = () => {
  return (
    <div className='error_page'>
      <div className='error_title'><b>Bueno...</b> Lo has roto</div>
      <img src={error} alt='Error' />
      <div className='error_text'>Esta página no existe o se ha producido un trágico error.</div>
    </div>
  )
}

export default Error
