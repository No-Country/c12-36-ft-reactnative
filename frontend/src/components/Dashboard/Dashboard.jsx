import React from 'react'
import Welcome from '../Welcome/Welcome'
import CardsHome from '../CardsHome/CardsHome'
import Finances from '../Finances/Finances'

const Dashboard = () => {
  return (
  	<div className='wrapper' style={{ margin: '104px' }}>
		<div style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
	      <Welcome />
	      <CardsHome />
	   	</div>
	    <div style={{ display: 'flex', margin: 'auto', justifyContent: 'center', flexDirection: 'column' }}>
	      <Finances />
	    </div>
	</div>
  )
}

export default Dashboard
