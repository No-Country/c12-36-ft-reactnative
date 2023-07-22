import React from 'react'
import Welcome from './Welcome'
import CardsHome from './CardsHome'
import Finances from './Finances'
import History from './/History'
import BenefitsHome from './BenefitsHome'
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div className='containerDashboard'>
      <div className='welcomeCards'>
        <Welcome />
        <CardsHome />
      </div>
      <div className='historyBenefits'>
        <History />
        <BenefitsHome />
      </div>
    </div>
  )
}

export default Dashboard
