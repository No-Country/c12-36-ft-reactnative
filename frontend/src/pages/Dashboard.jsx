import React from 'react'
import Welcome from '../containers/Welcome'
import CardsHome from '../containers/CardsHome'
import History from './History'
import BenefitsHome from '../containers/BenefitsHome'
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div className='containerDashboard'>
      <div className='welcomeCards'>
        <Welcome />
        <CardsHome />
      </div>
      <div className='historyBenefits'>
        <History limit={3} />
        <BenefitsHome />
      </div>
    </div>
  )
}

export default Dashboard
