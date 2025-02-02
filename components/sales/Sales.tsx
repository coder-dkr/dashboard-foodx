import React from 'react'
import BarChartComponent from './BarCharComponent'

const Sales = () => {
  return (
    <div className="mt-6 flex flex-col ">
       <h2 className="text-2xl font-medium text-gray-700 text-center">Sales & Revenue Markers</h2>
      <BarChartComponent />
    </div>
  )
}

export default Sales
