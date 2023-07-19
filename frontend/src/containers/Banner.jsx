import Typography from '@mui/material/Typography'

import screen from '../assets/screen.png'
import '../styles/banner.css'

const Banner = () => {
  return (
    <section className='banner'>
      <div className='titleTextBanner'>
        <Typography variant='p' color='secondary' className='titleBanner'>La mejor manera de llevar tu dinero</Typography>
        <p className='textInfo'>Simplifica tus finanzas con nuestra billetera digital. <br />
          Descubre todo lo que Pocketpal tiene para ti. <br /> <br />
          ¡Tu vida financiera en un solo lugar!<br />
        </p>
      </div>
      <img src={screen} alt=' ' className='image' />
    </section>
  )
}

export default Banner
