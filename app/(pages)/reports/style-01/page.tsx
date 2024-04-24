import MonthlyRewards from "@/components/reports/style-01/MonthlyRewards";
import PerformanceChart from "@/components/reports/style-01/PerformanceChart";
import Statistics from "@/components/reports/style-01/Statistics";
import USDChart from "@/components/reports/style-01/USDChart";
import Banner from "@/components/shared/Banner";

const ReportsStyleOnePage = () => {
  return (
    <div>
      <Banner title="Reports Style 02" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <Statistics />
        <div className="col-span-12 lg:col-span-6">
          <PerformanceChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <MonthlyRewards />
        </div>
        <div className="col-span-12">
          <USDChart />
        </div>
      </div>
    </div>
  );
};

export default ReportsStyleOnePage;
