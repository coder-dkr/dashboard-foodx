
import { dashboardData } from "@/constants";
import KPICard from "./KPICard";
import RevenueAreaChart from "./RevenueAreaChart";
import SalesProgress from "./SalesProgress";

const Home = () => {
  return (
    <div className="mt-6 flex flex-col gap-7">
      <div className="flex items-center gap-4 justify-center md:justify-between flex-wrap md:flex-nowrap ">
        {dashboardData.metrics.map((metric) => (
          <KPICard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            view={metric.view}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4">
        <div className="w-full lg:w-1/3 ">
          <SalesProgress  />
        </div>
        <div className="w-full lg:w-2/3 ">
          <RevenueAreaChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
