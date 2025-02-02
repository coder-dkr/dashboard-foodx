"use client"
import { Chart } from "react-google-charts";
import { geoData } from "@/constants";

const GeoChart: React.FC = () => {
  return (
    <div>
    <h3 className="text-lg text-gray-600">
      Geo chart for all users
    </h3>
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
    </div>
  );
};

export default GeoChart;
