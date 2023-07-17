import { Typography } from '@mui/material'

import face from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'

import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_lists'>
        <section>
          {/* <Typography variant='h5' color='secondary'>Pocketpal</Typography> */}
          <ul className='footer_options'>
            <li>Politicas de Privacidad</li>
            <li>Terminos de uso</li>
            <li>Defensa al Consumidor</li>
          </ul>
        </section>
        <ul className='footer_options'>
          <p className='lists_title'>Sobre PocketPal</p>
          <li>Acerca de nosotros</li>
          <li>Enviar y recibir dinero</li>
        </ul>
        <ul className='footer_options'>
          <p className='lists_title'>Ayuda y Seguridad</p>
          <li>Contacto</li>
          <li>Preguntas Frecuentes</li>
          <li></li>
        </ul>
      </div>
      <div className='rrss'>
        <a href="https://www.facebook.com/profile.php?id=100094393616559">
          <img src={face} alt='facebook' width='32px' />
        </a>
        <a href="https://www.instagram.com">
          <img src={insta} alt='instagram' width='32px' />
        </a>
        <a href="https://www.linkedin.com">
          <img src={linkedin} alt='linkedin' width='32px' />
        </a>
      </div>
    </div>
  )
}

export default Footer
