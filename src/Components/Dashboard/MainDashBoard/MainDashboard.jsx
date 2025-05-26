import React from 'react'
import HealthBody from '../HealthBody/HealthBody'
import HealthCard from '../HealthCard/HealthCard'
import './mainStyle.css'
import CalenderAppoint from '../calender/CalenderAppoint'
import ActivityChart from '../Activity/ActivityChart'

const MainDashboard = () => {
  return (
  <>
    <div className='main_dashboard_content'>
      <div style={{display:'flex'}}>
        <HealthBody />
        <HealthCard />
      </div>
      <CalenderAppoint />
    </div>
    <ActivityChart/>
  </>
  )
}

export default MainDashboard