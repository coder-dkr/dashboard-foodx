"use client";

import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { revenueData } from "@/constants";

const RevenueAreaChart: React.FC = () => {
  return (
    <div className=" bg-white p-6 rounded-md shadow-[2px_4px_10px_1px_#c9c9c9]">
      <h3 className="text-lg font-medium text-gray-500 mb-4">Last {revenueData.length} Months (Revenue)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#8884d8" 
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueAreaChart;
