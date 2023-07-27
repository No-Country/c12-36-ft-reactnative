import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import behance from '../assets/behanceicon.png'
import github from '../assets/githubicon.png'
import linkedinIcon from '../assets/linkedinicon.png'
import emailIcon from '../assets/emailicon.png'
import cielo from '../assets/cielo.png'
import fernando from '../assets/fernando.png'
import micaela from '../assets/micaela.png'
import angelica from '../assets/angelica.png'
import jose from '../assets/jose.jpg'
import tiago from '../assets/tiago.png'
import masiel from '../assets/masiel.jpg'
import yein from '../assets/yein.jpg'
import nocountry from '../assets/nocountry.jpeg'

import '../styles/whoWeAre.css'

const team = [{ name: 'Cielo Espinosa', team: 'UI', img: cielo, email: 'mailto:cielo.espinosabet@gmail.com', linkedin: 'https://www.linkedin.com/in/cielo-espinosa-bettoni-557258252/', rrss: 'https://www.behance.net/cieloespinosa', rrssicon: behance },
  { name: 'Fernando Vargas', team: 'UX/UI', img: fernando, email: 'mailto:fernando32672@gmail.com', linkedin: 'https://www.linkedin.com/in/fernandovargas3/', rrss: 'https://github.com/fernandovargas98', rrssicon: github },
  { name: 'Micaela Bustos', team: 'QA', img: micaela, email: 'mailto:bustoslcar@gmail.com', linkedin: 'https://www.linkedin.com/in/bustoslcar/', rrss: 'https://github.com/Bustoslcar', rrssicon: github },
  { name: 'Angelica Rodriguez', team: 'Project Manager', img: angelica, email: 'mailto:angie00069@gmail.com', linkedin: 'https://www.linkedin.com/in/arodriguezm3/', rrss: 'https://github.com/angelicarm3', rrssicon: github },
  { name: 'Jose Elias Morales', team: 'Frontend', img: jose, email: 'mailto:joselias.dev@gmail.com', linkedin: 'https://www.linkedin.com/in/joseeliasmorales/', rrss: 'https://github.com/JoseEliasMorales', rrssicon: github },
  { name: 'Tiago Alvarez', team: 'Frontend', img: tiago, email: 'mailto:tiagoalvarezschiaffino@gmail.com', linkedin: 'https://www.linkedin.com/in/tiago-alvarez-schiaffino/', rrss: 'https://github.com/TiagoAlvarezSchiaffino', rrssicon: github },
  { name: 'Masiel Venegas', team: 'Backend', img: masiel, email: 'mailto:masielsvp@gmail.com', linkedin: 'https://www.linkedin.com/in/masielvenegas/', rrss: 'https://github.com/m-venegas', rrssicon: github },
  { name: 'Yein España', team: 'Backend', img: yein, email: 'mailto:yeinneg@gmail.com', linkedin: 'https://www.linkedin.com/in/yein-e-734a7a233/', rrss: 'https://github.com/yeinwillie', rrssicon: github }]

const Policy = () => {
  return (
    <div className='who_we_are'>
      <Typography variant='h4'>Quienes somos</Typography>
      <Typography className='subtitle1'>¡Bienvenidos a PocketPal!</Typography>
      <p>Somos un grupo de personas apasionadas y hemos decidido unir nuestras habilidades y conocimientos para embarcarnos en una emocionante aventura: crear un aplicativo desde cero, desarrollar una billetera virtual.</p>
      <p>Todo gracias al apoyo de:</p>
      <img src={nocountry} alt='logo nocountry' className='logo_nc' />
      <p className='subtitle1'>No Country</p>
      <Typography variant='subtitle1' className='subtitle1'>El comienzo de una emocionante travesía</Typography>
      <p>Nuestras mentes creativas y apasionadas por la tecnología que se unieron con un objetivo común y elegimos crear una plataforma que marcaría la diferencia en la forma en que las personas manejan su dinero.</p>
      <p>Así nació nuestra propia billetera virtual: <b>PocketPal</b>, que nos ha llevado a explorar el vasto mundo del desarrollo de software y a enfrentar desafíos que nos han fortalecido como personas y como equipo.</p>
      <p>Nuestra misión es proporcionar una aplicación segura, confiable y fácil de usar, que permita a nuestros usuarios realizar transacciones financieras de manera rápida y conveniente. Buscamos mejorar la vida de las personas al ofrecer una solución que se adapte a su estilo de vida moderno y ágil.</p>
      <p>Nuestra visión es que <b>PocketPal</b> se convierta en una de las billeteras virtuales mas vistosa, didáctica y facil de utilizar. Deseamos ser reconocidos por nuestra dedicación a la excelencia, la innovación tecnológica y el compromiso con la satisfacción del cliente, que en este caso es No Country. Aspiramos a ser un referente en el sector y un modelo a seguir para futuros proyectos de desarrollo de software.</p>

      <Typography variant='subtitle1' className='subtitle1'>Nuestros Valores</Typography>
      <p><b>Innovación: </b>Abrazamos la creatividad y la innovación para diseñar soluciones únicas y efectivas que superen las expectativas de nuestros usuarios.</p>
      <p><b>Integridad: </b>Actuamos con honestidad, transparencia y ética en cada aspecto de nuestro trabajo y en nuestras relaciones con los demás.</p>
      <p><b>Colaboración: </b>Valoramos y respetamos las contribuciones de cada miembro del equipo, fomentando un ambiente colaborativo que potencie nuestras capacidades individuales y colectivas.</p>
      <p><b>Excelencia: </b>Nos esforzamos por la excelencia en todo lo que hacemos, desde el diseño de la interfaz hasta la seguridad y el rendimiento de nuestra plataforma.</p>
      <p><b>Pasión: </b>Estamos apasionados por nuestra misión y trabajamos con entusiasmo para alcanzar nuestros objetivos.</p>

      <Typography variant='subtitle1' className='subtitle1'>Nuestro Equipo</Typography>
      <p>Está formado por individuos talentosos y apasionados, cada uno con habilidades únicas que contribuyen a la creación de este proyecto. Somos programadores, diseñadores, expertos en experiencia de usuario y profesionales de diferentes áreas que unen fuerzas para lograr el éxito de este proyecto.</p>

      <div className='team'>
        {
          team.map((list) => (
            <div key={list.name} className='team_member'>
              <img className='team_img' src={list.img} alt={list.name} />
              <p className='team_name'>{list.name}</p>
              <p className='team_team'>{list.team}</p>
              <div className='team_links'>
                <Link className='team_rrss' to={list.email}>
                  <img className='team_icon' src={emailIcon} alt={list.email} />
                </Link>
                <Link className='team_rrss' to={list.linkedin}>
                  <img className='team_icon' src={linkedinIcon} alt={list.linkedin} />
                </Link>
                <Link className='team_rrss' to={list.rrss}>
                  <img className='team_icon' src={list.rrssicon} alt={list.rrss} />
                </Link>
              </div>
            </div>
          ))
        }
      </div>

      <Typography variant='subtitle1' className='subtitle1'>Agradecimientos</Typography>
      <p>Queremos expresar nuestro más profundo agradecimiento a todos aquellos que nos han apoyado en esta emocionante travesía. A nuestros familiares, amigos y a cada miembro del equipo por su dedicación, paciencia y entusiasmo. Sin su colaboración <b>PoketPal</b> no sería posible.</p>
      <p>Nuestro futuro, el viaje como profesionales IT, apenas comienza y nos sentimos emocionados por lo que depara. Estamos comprometidos a seguir mejorando y ampliando nuestras capacidades, ofreciendo nuevas cualidades y manteniendo la excelencia en cada proyecto que realicemos.</p>

      <p className='subtitle2'>¡Gracias por ser parte de nuestra historia en No Country!</p>
    </div>
  )
}

export default Policy
