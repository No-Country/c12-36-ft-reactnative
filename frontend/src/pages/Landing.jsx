import Banner from '../containers/Banner'
import InfoBanner from '../containers/InfoBanner'
import RequestCard from '../containers/RequestCard'
import Benefits from '../containers/Benefits'

import '../styles/landing.css'

const Landing = () => {
  return (
    <div className='landing'>
      <Banner />
      <InfoBanner />
      <RequestCard />
      <Benefits />
    </div>
  )
}

export default Landing
