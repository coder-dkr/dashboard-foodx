import React from 'react'
import GrowthTrends from './GrowthTrends'
import AnalyticsAreaChart from './Areachart'
import InHouseCustomerIncreaseChart from './Inhouse'
import PreferredFoodPieChart from './Pie'

const Analytics = () => {
  return (
    <div className='flex flex-col gap-7 w-full'>
      <h2 className="text-2xl font-medium text-gray-700 text-center mt-6"> All Analytics</h2>
      <div className=" bg-white rounded-md shadow-md p-6 flex flex-col items-center text-[0.5rem] sm:text-xs">
        <PreferredFoodPieChart />
      </div>
      <AnalyticsAreaChart />
      <GrowthTrends />
      <InHouseCustomerIncreaseChart />
   
    </div>
  )
}

export default Analytics
