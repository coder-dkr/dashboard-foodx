"use client"

import * as R from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { analyticsData } from "@/constants";


const AnalyticsAreaChart: React.FC = () => {

  const [isSmallScreen, setIsSmallScreen] = R.useState(typeof window !== "undefined" ? window.innerWidth < 640 : false);

  R.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="area-chart bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-medium text-gray-600 mb-4">Website Analytics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={analyticsData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" />
          <YAxis hide={isSmallScreen} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

         
          <Area
            type="monotone"
            dataKey="traffic"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorTraffic)"
          />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorOrders)"
          />
          {/* Area Chart for Engagement */}
          <Area
            type="monotone"
            dataKey="engagement"
            stroke="#ffc658"
            fillOpacity={1}
            fill="url(#colorEngagement)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsAreaChart;

