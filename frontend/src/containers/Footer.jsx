import { Typography } from '@mui/material'

import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import user from '../assets/fi-sr-user.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer_lists'>
        <div>
          <Typography variant='h5' color='secondary' style={{ fontWeight: '700' }}>Pocketpal</Typography>
          <div className='rrss'>
            <a className='socialIconBack' href='https://www.facebook.com/profile.php?id=100094393616559'>
              <img className='socialIcon' src={facebook} alt='facebook' width='42px' />
            </a>
            <a className='socialIconBack' href='https://www.instagram.com'>
              <img className='socialIcon' src={instagram} alt='instagram' width='32px' />
            </a>
          </div>
          <ul className='footer_options '>
            <li>Politicas de Privacidad</li>
            <li>Terminos de uso</li>
            <li>Defensa al Consumidor</li>
          </ul>
        </div>
        <div>
          <p className='lists_title'>Sobre PocketPal</p>
          <ul className='footer_options footer_options--list'>
            <li>Acerca de nosotros</li>
            <li>Enviar y recibir dinero</li>
            <li>Beneficios</li>
          </ul>
        </div>
        <div>
          <p className='lists_title'>Ayuda y Seguridad</p>
          <ul className='footer_options footer_options--list'>
            <li>Contacto</li>
            <li>Preguntas Frecuentes</li>
            <li>Seguridad</li>
          </ul>
        </div>
      </div>
      <div className='userIconContainer'>
        <img width='35px' src={user} alt=' ' />
      </div>
    </section>
  )
}

export default Footer
