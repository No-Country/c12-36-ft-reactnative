import Banner from '../containers/Banner'
import InfoBanner from '../containers/InfoBanner'
import RequestCard from '../containers/RequestCard'
import Benefits from '../containers/Benefits'
import SignupButton from '../components/SignupButton'
import Footer from '../containers/Footer'
import { Typography } from '@mui/material'

import '../styles/landing.css'

const Landing = () => {
  return (
    <div>
      <div className='landing'>
        <Banner />
        <SignupButton />
        <Typography variant='p' className='subtitleLanding' color='secondary' textAlign='center'>Con Pocketpal podes</Typography>
        <InfoBanner />
        <RequestCard />
        <Typography variant='p' className='subtitleLanding' color='secondary' textAlign='center'>Tenemos estos beneficios para vos</Typography>
        <Benefits />
        <Typography variant='p' className='link_tyc' color='secondary' textAlign='center'>Ver términos y condiciones</Typography>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
