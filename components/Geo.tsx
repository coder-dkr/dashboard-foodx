"use client"
import { Chart } from "react-google-charts";

const geoData = [
  ["Country", "Users"],
  ["United States", 1000],
  ["India", 850],
  ["Brazil", 600],
  ["Germany", 450],
  ["United Kingdom", 400],
  ["France", 350],
];

const GeoChart: React.FC = () => {
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={geoData}
      options={{
        colorAxis: { colors: ["#aec6cf", "#f4a261", "#e76f51"] },
        backgroundColor: "#f5f5f5",
        datalessRegionColor: "#ddd",
        defaultColor: "#6c757d",
      }}
    />
  );
};

export default GeoChart;
