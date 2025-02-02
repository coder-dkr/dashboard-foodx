"use client";

import * as R from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { chartData } from "@/constants";


const SalesDashboard = () => {

  const [isSmallScreen, setIsSmallScreen] = R.useState(false);

  const combinedData = chartData.salesBarChart.map((salesEntry) => {
    const revenueEntry = chartData.revenueLineChart.find((rev) => rev.month === salesEntry.month) || {revenue : 0};
    return { ...salesEntry, revenue: revenueEntry.revenue };
  });
  
    R.useEffect(() => {
      const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  return (
    <div className="mt-6 flex flex-col gap-10 bg-white p-6 rounded-md shadow-md">
      {/* Sales Trends - Bar Chart */}
      <div>
        <h3 className="text-xl font-medium text-gray-600 mb-4">Sales Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData.salesBarChart}>
            <XAxis dataKey="month" />
            <YAxis hide={isSmallScreen} />
            <Tooltip />
            <Bar dataKey="sales" fill="#0E6EFF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      
      <div>
        <h3 className="text-xl font-medium text-gray-600 mb-4">Revenue / Sales Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart data={combinedData}>
          <XAxis dataKey="month" />
          <YAxis hide={isSmallScreen} />
          <Tooltip />
          <Legend />
         
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
 
    </div>
  );
};

export default SalesDashboard;
