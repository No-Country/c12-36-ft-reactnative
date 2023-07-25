import { Typography } from '@mui/material'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer_lists'>
        <div>
          <p className='lists_title'>Terminos y condiciones</p>
          <ul className='footer_options'>
            <li><a href='terms-conditions' target='_blank'>Terminos y condiciones</a></li>
            <li><a href='privacy-policies' target='_blank'>Politicas de Privacidad</a></li>
            <li><a href='page-not-found' target='_blank'>Defensa al Consumidor</a></li>
          </ul>
        </div>
        <div>
          <p className='lists_title'>Sobre PocketPal</p>
          <ul className='footer_options'>
            <li><a href='about-us' target='_blank'>Acerca de nosotros</a></li>
            <li><a href='page-not-found' target='_blank'>Enviar y recibir dinero</a></li>
            <li><a href='page-not-found' target='_blank'>Beneficios</a></li>
          </ul>
        </div>
        <div>
          <p className='lists_title'>Ayuda y Seguridad</p>
          <ul className='footer_options'>
            <li><a href='contact-us' target='_blank'>Contacto</a></li>
            <li><a href='page-not-found' target='_blank'>Preguntas Frecuentes</a></li>
            <li><a href='page-not-found' target='_blank'>Seguridad</a></li>
          </ul>
        </div>
        <div>
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
      <div className='footer_rigths'>© 2023 Pocketpal, Inc</div>
    </section>
  )
}

export default Footer
