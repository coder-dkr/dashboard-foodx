"use client"
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { PreferredFood } from "@/constants";


const PreferredFoodPieChart: React.FC = () => {
  return (
   <>
      <h3 className="text-xl font-medium text-gray-600 mb-4 text-left w-full">Most Preferred Food Categories</h3>
      <ResponsiveContainer width={300} height={250}>
        <PieChart>
         
          <Pie
            data={PreferredFood.data1}
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
            data={PreferredFood.data2}
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
    </>
  );
};

export default PreferredFoodPieChart;
