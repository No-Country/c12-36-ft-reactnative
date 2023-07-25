import React from 'react'

import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import BackButton from '../components/BackButton'

import '../styles/contactUs.css'

const ContactUs = () => {
  return (
    <div className='contact_us'>
      <BackButton />
      <div>
        <h2 className='contact_title'>Contáctenos</h2>
        <div>
          <h2>Pocketpal</h2>
          <p className='subtitle'><b>CUIT:</b></p>
          <p>30-36238459-6.</p>
          <p className='subtitle'><b>Correo electrónico:</b></p>
          <p>pocketpal.nocountry@gmail.com.</p>
          <p className='subtitle'><b>Domicilio Legal:</b></p>
          <p>Martiniano Chilavert 2000, B° Nueva Italia, CP 5012, Córdoba, Argentina.</p>
        </div>
        <p className='lists_title'>Nuestras redes:</p>
        <div className='rrss'>
          <a className='socialIconBack' href='https://www.facebook.com/profile.php?id=100094393616559' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='facebook' />
          </a>
          <a className='socialIconBack' href='https://www.instagram.com' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='instagram' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
