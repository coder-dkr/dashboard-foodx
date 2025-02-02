"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Dummy Data for In-House Customer Increase Analytics
const data = [
  { month: "Jan", customers: 150 },
  { month: "Feb", customers: 180 },
  { month: "Mar", customers: 210 },
  { month: "Apr", customers: 250 },
  { month: "May", customers: 300 },
  { month: "Jun", customers: 350 },
  { month: "Jul", customers: 200 },
  { month: "Aug", customers: 250 },
  { month: "Sep", customers: 120 },
  { month: "Oct", customers: 400 },
  { month: "Nov", customers: 700 },
  { month: "Dec", customers: 650 },
];

const InHouseCustomerIncreaseChart: React.FC = () => {
  return (
    <div className="area-chart bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-medium text-gray-600 mb-4">In-House Customer Increase Analytics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Area Chart for Customer Increase */}
          <Area
            type="monotone"
            dataKey="customers"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InHouseCustomerIncreaseChart;
