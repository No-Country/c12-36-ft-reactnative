import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import FooterComponent from './FooterComponent'
import '../styles/footer.css'

const tyc = [{ path: 'terms-conditions', name: 'Terminos y condiciones' }, { path: 'privacy-policies', name: 'Politicas de Privacidad' }, { path: 'https://buenosaires.gob.ar/defensaconsumidor/como-denunciar', name: 'Defensa al Consumidor' }]
const about = [{ path: 'about-us', name: 'Acerca de nosotros' }, { path: 'who-we-are', name: 'Quienes somos' }, { path: 'page-not-found', name: 'Enviar y recibir dinero' }]
const help = [{ path: 'contact-us', name: 'Contacto' }, { path: 'page-not-found', name: 'Preguntas Frecuentes' }, { path: 'terms-conditions/#seguridad', name: 'Seguridad' }]

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer_lists'>
        <div>
          <p className='lists_title'>Terminos y condiciones</p>
          <ul className='footer_options'>
            <FooterComponent footerlist={tyc} />
          </ul>

        </div>
        <div>
          <p className='lists_title'>Sobre PocketPal</p>
          <ul className='footer_options'>
            <FooterComponent footerlist={about} />
          </ul>
        </div>
        <div>
          <p className='lists_title'>Ayuda y Seguridad</p>
          <ul className='footer_options'>
            <FooterComponent footerlist={help} />
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
