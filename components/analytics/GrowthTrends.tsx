"use client"

import {ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, CartesianGrid, XAxis,Tooltip,YAxis } from "recharts";
import { chartData } from "@/constants"

const GrowthTrends = () => {

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8"];
  return (
    <div>
        <div className="flex flex-col items-center">
        <h3 className="text-xl font-medium text-gray-600 mb-4">Most Preferred Food Categories</h3>
        <PieChart width={250} height={250}>
          <Pie data={chartData.categoryPieChart} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
            {chartData.categoryPieChart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]}  />
            ))}
          </Pie>
          
        </PieChart>
      </div>

      {/* Customer Growth - Area Chart */}
      <div>
        <h3 className="text-xl font-medium text-gray-600 mb-4">Customer Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData.customerGrowth} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
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
