import IncomeExpenseChart from "@/components/dashboards/style-04/IncomeExpenseChart";
import LatestTransactions from "@/components/dashboards/style-04/LatestTransactions";
import QuickTransfer from "@/components/dashboards/style-04/QuickTransfer";
import Statistics from "@/components/dashboards/style-04/Statistics";
import TransactionAccount from "@/components/dashboards/style-04/TransactionAccount";
import WeeklyTransactions from "@/components/dashboards/style-04/WeeklyTransactions";
import Banner from "@/components/shared/Banner";

const DashboardFourPage = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap items-center gap-4 mb-6 xl:mb-8">
        <div>
          <h4 className="h4 mb-1">33,215.00 USD</h4>
          <p>
            Total Balance from all accounts{" "}
            <span className="text-primary font-semibold">USD</span>
          </p>
        </div>
        <Banner title="" className="mb-0 lg:mb-0" />
      </div>
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Statistics />
          <IncomeExpenseChart />
          <TransactionAccount />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <WeeklyTransactions />
          <QuickTransfer />
          <LatestTransactions />
        </div>
      </div>
    </>
  );
};

export default DashboardFourPage;
