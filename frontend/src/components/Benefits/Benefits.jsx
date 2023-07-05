import Typography from '@mui/material/Typography'
import beneficios from '../../assets/beneficios.png'

const info = [{ name: 'beneficio 1', img: beneficios }, { name: 'beneficio 2', img: beneficios }, { name: 'beneficio 3', img: beneficios }]
const Benefits = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      {
            info.map((inf) => (
              <div className='info' key={inf.name}>
                <img width='90px' height='90px' style={{ objectFit: 'contain' }} src={inf.img} alt={inf.name} />
                <Typography variant='h6' color='secondary'>{inf.name}</Typography>
              </div>
            ))
        }
    </section>
  )
}

export default Benefits
