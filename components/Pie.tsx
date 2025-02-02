"use client"
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

// Dummy Data for Preferred Food by Most Users
const data01 = [
  { name: "Pizza", value: 35 },
  { name: "Burger", value: 25 },
  { name: "Pasta", value: 20 },
  { name: "Sushi", value: 10 },
  { name: "Salad", value: 10 },
];

const data02 = [
  { name: "Pizza", value: 45 },
  { name: "Burger", value: 30 },
  { name: "Pasta", value: 15 },
  { name: "Sushi", value: 5 },
  { name: "Salad", value: 5 },
];

// Pie Chart Component
const PreferredFoodPieChart: React.FC = () => {
  return (
    <div className="pie-chart bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-medium text-gray-600 mb-4">Preferred Food by Most Users</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          {/* Outer Pie for Food Preference */}
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            label
          />
          {/* Inner Pie for Second Set of Data */}
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          {/* Tooltip to show the data when hovering over a slice */}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PreferredFoodPieChart;
