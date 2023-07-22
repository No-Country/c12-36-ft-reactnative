import Banner from '../containers/Banner'
import InfoBanner from '../containers/InfoBanner'
import RequestCard from '../containers/RequestCard'
import Benefits from '../containers/Benefits'
import { Typography } from '@mui/material'

import '../styles/landing.css'

const Landing = () => {
  return (
    <article className='landing'>
      <Banner />
      <Typography variant='p' className='subtitleLanding' color='secondary' textAlign='center'>Con Pocketpal podes</Typography>
      <InfoBanner />
      <RequestCard />
      <Typography variant='p' className='subtitleLanding' color='secondary' textAlign='center'>Tenemos estos beneficios para vos</Typography>
      <Benefits />
    </article>
  )
}

export default Landing
