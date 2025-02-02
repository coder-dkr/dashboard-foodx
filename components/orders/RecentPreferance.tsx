"use client";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { subject: "Pizza", A: 80, B: 60 },  
  { subject: "Burger", A: 70, B: 90 }, 
  { subject: "Pasta", A: 90, B: 50 },  
  { subject: "Sushi", A: 50, B: 40 },  
  { subject: "Salad", A: 30, B: 70 },  
];

const RecentPreferance: React.FC = () => {
  return (
    <div className="radar-chart bg-white p-6 rounded-md shadow-[2px_4px_10px_1px_#c9c9c9] ">
      <h3 className="text-xl font-medium text-gray-600 mb-4">Latest Order Preferences</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Delivery" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Dine-In" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RecentPreferance;
