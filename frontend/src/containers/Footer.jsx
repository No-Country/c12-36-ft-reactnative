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
            <li><a href='defensa-consumidor' target='_blank'>Defensa al Consumidor</a></li>
          </ul>
        </div>
        <div>
          <p className='lists_title'>Sobre PocketPal</p>
          <ul className='footer_options'>
            <li><a href='about-us' target='_blank'>Acerca de nosotros</a></li>
            <li><a href='enviar-recibir-dinero' target='_blank'>Enviar y recibir dinero</a></li>
            <li><a href='beneficios' target='_blank'>Beneficios</a></li>
          </ul>
        </div>
        <div>
          <p className='lists_title'>Ayuda y Seguridad</p>
          <ul className='footer_options'>
            <li><a href='contacto' target='_blank'>Contacto</a></li>
            <li><a href='preguntas-frecuentes' target='_blank'>Preguntas Frecuentes</a></li>
            <li><a href='seguridad' target='_blank'>Seguridad</a></li>
          </ul>
        </div>
        <div>
          <p className='lists_title'>Nuestras redes:</p>
          <div className='rrss'>
            <a className='socialIconBack' href='https://www.facebook.com/profile.php?id=100094393616559' target='_blank' rel='noreferrer'>
              <img src={facebook} alt='facebook' height='44px' />
            </a>
            <a className='socialIconBack' href='https://www.instagram.com' target='_blank' rel='noreferrer'>
              <img src={instagram} alt='instagram' height='40px' />
            </a>
          </div>
        </div>
      </div>
      <Typography className='footer_rigths' variant='h6' color='secondary' style={{ fontWeight: '600' }}>© 2023 Pocketpal, Inc</Typography>
    </section>
  )
}

export default Footer
