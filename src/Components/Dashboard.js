import React from 'react'
import DashboardEmployees from './DashboardEmployees'
import DashboardFleet from './DashboardFleet'
import DashboardEmployeesSummary from './DashboardEmployeesSummary'
import DashboardFleetSummary from './DashboardFleetSummary'

const Dashboard = () => {
  return (
    <div className='w-full bg-white flex flex-col items-center gap-2'>
      <header className='pt-[120px] sm:bg-green-200 md:bg-orange-200 lg:bg-pink-300'>
        <h1 className='font-bold text-gray-400 text-3xl'>D  A  S  H  B  O  A  R  D</h1>
      </header>
      <DashboardEmployees />
      <DashboardEmployeesSummary />
      <DashboardFleet />
      <DashboardFleetSummary />
    </div>
  )
}

export default Dashboard