import './infoBanner.css'
import join from '../../assets/enlace.png'
import cargar from '../../assets/cargar.png'
import pagar from '../../assets/pagar.png'

const info = [{ name: 'Unete a nosotros', img: join }, { name: 'Carga dinero', img: cargar }, { name: 'Usalo donde quieras', img: pagar }]

const InfoBanner = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      {
        info.map((inf) => (
          <div className='info' key={inf.name}>
            <img width='64px' src={inf.img} alt={inf.name} />
            <h3>{inf.name}</h3>
          </div>
        ))
      }
    </section>
  )
}

export default InfoBanner
