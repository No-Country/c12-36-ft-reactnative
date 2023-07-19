import { Typography } from '@mui/material'
import '../styles/benefitsHome.css'

const iconCardWeb = [{ btn: 'Descuentos', name: 'Viajes y vuelos', parraf: 'Tenemos los mejores descuentos para vos, encuentra los mejores vuelos al mejor precio' }, { btn: 'Préstamos', name: 'Pide un préstamo', parraf: 'Tenemos los mejores descuentos para vos, encuentra los mejores vuelos al mejor precio' }, { btn: 'Seguros', name: 'Seguros', parraf: 'Tenemos los mejores descuentos para vos, encuentra los mejores vuelos al mejor precio' }]
const iconCard = [{ btn: 'Descuentos', name: 'Viajes y vuelos', parraf: 'Tenemos los mejores descuentos para vos, encuentra los mejores vuelos al mejor precio' }, { btn: 'Préstamos', name: 'Pide un préstamo', parraf: 'Tenemos los mejores descuentos para vos, encuentra los mejores vuelos al mejor precio' }]
const benefitsHome = () => {
  return (
    <section className='containerBenefits'>
      <div>
        <p className='benefits'>Beneficios</p>
      </div>
      <div className='containerCardsBenefits'>
        {iconCard.map((icon) => (
          <div className='cardsBenefits' key={icon.name}>
            <Typography className='cardBtnBenefits' variant='p'>{icon.btn}</Typography>
            <Typography className='titleBenefits' variant='p' color='secondary'>{icon.name}</Typography>
            <Typography className='parrafBenefits' variant='p' color='secondary'>{icon.parraf}</Typography>
          </div>
        )
        )}
        {iconCardWeb.map((icon) => (
          <div className='cardsBenefitsWeb' key={icon.name}>
            <Typography className='cardBtnBenefits' variant='p'>{icon.btn}</Typography>
            <Typography className='titleBenefits' variant='p' color='secondary'>{icon.name}</Typography>
            <Typography className='parrafBenefits' variant='p' color='secondary'>{icon.parraf}</Typography>
          </div>
        )
        )}
      </div>
    </section>
  )
}

export default benefitsHome
