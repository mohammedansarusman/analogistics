import React from 'react'
import DashboardEmployees from './DashboardEmployees'
import DashboardFleet from './DashboardFleet'
import DashboardEmployeesSummary from './DashboardEmployeesSummary'
import DashboardFleetSummary from './DashboardFleetSummary'

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col items-center gap-2 bg-orange-500 min-h-screen py-[120px]'>
      <header className=''>
        <h1 className='font-bold text-gray-400 text-3xl'>D  A  S  H  B  O  A  R  D</h1>
      </header>
      <div className='w-[85%] lg:flex gap-2'>
        <div className='lg:w-1/2'>
          <DashboardEmployees />  
          <DashboardEmployeesSummary />
        </div>
        <div className='lg:w-1/2'>
          <DashboardFleet />  
          <DashboardFleetSummary />
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard