"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, CartesianGrid, Legend } from "recharts";
import { chartData } from "@/constants";


const SalesDashboard = () => {
  return (
    <div className="mt-6 flex flex-col gap-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-medium text-gray-700 text-center">📊 Sales & Revenue Markers</h2>

      {/* Sales Trends - Bar Chart */}
      <div>
        <h3 className="text-xl font-medium text-gray-600 mb-4">Sales Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData.salesBarChart}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#FF5733" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Growth - Line Chart */}
      <div>
        <h3 className="text-xl font-medium text-gray-600 mb-4">Revenue Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData.revenueLineChart}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
 
    </div>
  );
};

export default SalesDashboard;
