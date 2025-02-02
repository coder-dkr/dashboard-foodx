"use client";

import { PieChart, Pie, Cell, Label } from "recharts";
import { salesData } from "@/constants";

const progress = (salesData.todaySales / salesData.targetSales) * 100;

const data = [
  { name: "Achieved", value: salesData.todaySales },
  { name: "Remaining", value: salesData.targetSales - salesData.todaySales },
];

const COLORS = ["#4CAF50", "#E0E0E0"];

const SalesProgress = () => {
  return (
    <div className="bg-green-100 rounded-md text-center shadow-[2px_4px_10px_1px_#c9c9c9] flex flex-col justify-center items-center py-7 ">
      <h3 className="text-lg font-medium text-gray-600 mb-4 text-left w-full px-4">Today&apos;s Revenue (${salesData.todaySales})</h3>
      <PieChart width={205} height={205}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          startAngle={90}
          endAngle={-270}
          fill="#4CAF50"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          <Label
            value={`${progress.toFixed(1)}%`}
            position="center"
            fill="#4CAF50"
            fontSize={22}
            fontWeight="bold"
          />
        </Pie>
      </PieChart>
      <p className="text-gray-500 text-sm">of Target Achieved</p>
      <div className="mt-4 text-gray-600 flex  text-base ">
        <p>🎯 Target Sales: <span className="font-semibold">${salesData.targetSales}</span></p>
        <p>📅 Last Week: <span className="font-semibold">${salesData.lastWeekSales}</span></p>
        <p>📆 Last Month: <span className="font-semibold">${salesData.lastMonthSales}</span></p>
      </div>
    </div>
  );
};

export default SalesProgress;
