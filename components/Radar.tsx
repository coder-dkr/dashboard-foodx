"use client"
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy Data for Preferred Food Preferences of Users
const data = [
  { subject: "Pizza", A: 120, B: 80 },
  { subject: "Burger", A: 110, B: 90 },
  { subject: "Pasta", A: 130, B: 70 },
  { subject: "Sushi", A: 70, B: 60 },
  { subject: "Salad", A: 50, B: 60 },
];

const Reffer: React.FC = () => {
  return (
    <div className="radar-chart bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-medium text-gray-600 mb-4">Preferred Food Preferences</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          
          {/* Radar for Mike */}
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          
          {/* Radar for Lily */}
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          
          {/* Add Tooltip */}
          <Tooltip />
          
          {/* Add Legend */}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Reffer;
