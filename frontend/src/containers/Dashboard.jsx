import React from 'react'
import Welcome from './Welcome'
import CardsHome from './CardsHome'
import Finances from './Finances'
import History from './/History'
import BenefitsHome from './BenefitsHome'

const Dashboard = () => {
  return (
  	<div style={{ margin: '104px' }}>
		<div style={{ display: 'flex' }}>
	      <Welcome />
	      <CardsHome />
	   	</div>
	    <div>
	      <Finances />
	      <History />
	      <BenefitsHome />
	    </div>
	</div>
  )
}

export default Dashboard
