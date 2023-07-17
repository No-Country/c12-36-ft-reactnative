import Typography from '@mui/material/Typography'

import celular from '../assets/celular.png'
import '../styles/banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <Typography className='banner_title' variant='p' color='secondary'>
        La mejor manera de llevar tu dinero
      </Typography>
      <img className='cel' src={celular} alt=' '/>
    </div>
  )
}

export default Banner
