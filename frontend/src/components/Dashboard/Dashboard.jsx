import React from 'react'
import Welcome from '../Welcome/Welcome'
import CardsHome from '../CardsHome/CardsHome'
import Finances from '../Finances/Finances'

import History from '../History/History'
import BenefitsHome from '../BenefitsHome/BenefitsHome'

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
