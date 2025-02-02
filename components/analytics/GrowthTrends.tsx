"use client"
import { chartData } from '@/constants';
import * as R from 'react'
import {ResponsiveContainer,  AreaChart, Area, CartesianGrid, XAxis,Tooltip,YAxis } from "recharts";


const GrowthTrends = () => {


const [isSmallScreen, setIsSmallScreen] = R.useState(false);

  R.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div>

      <div className='bg-white  p-6 rounded-md shadow-md'>
        <h3 className="text-xl font-medium text-gray-600 mb-4">Customer Growth Over last {chartData.customerGrowth?.length} Months</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData.customerGrowth} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis hide={isSmallScreen} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="customers" stroke="#82ca9d" fillOpacity={1} fill="url(#colorCustomers)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GrowthTrends
