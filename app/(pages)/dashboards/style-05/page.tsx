import BalanceOverviewChart from "@/components/dashboards/style-05/BalanceOverview";
import BrowserSessions from "@/components/dashboards/style-05/BrowserSessions";
import LatestTransactions from "@/components/dashboards/style-05/LatestTransactions";
import Statistics from "@/components/dashboards/style-05/Statistics";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <div>
      <Banner title="Dashboard" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <Statistics />
        <div className="col-span-12 lg:col-span-8">
          <BalanceOverviewChart />
          <BrowserSessions />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <LatestTransactions />
        </div>
      </div>
    </div>
  );
};

export default page;
