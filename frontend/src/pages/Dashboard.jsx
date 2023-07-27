import React from 'react'
import Welcome from '../containers/Welcome'
import CardsHome from '../containers/CardsHome'
import History from './History'
import BenefitsHome from '../containers/BenefitsHome'
import { Link } from 'react-router-dom'
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
        <Link to='/home/history' className='link_mas'>Ver más</Link>
        <BenefitsHome />
      </div>
    </div>
  )
}

export default Dashboard
