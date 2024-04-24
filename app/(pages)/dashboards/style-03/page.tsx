import IncomeExpenseChart from "@/components/dashboards/style-03/IncomeExpenseChart";
import LatestTransactions from "@/components/dashboards/style-03/LatestTransactions";
import Statistics from "@/components/dashboards/style-03/Statistics";
import TransactionOverview from "@/components/dashboards/style-03/TransactionOverview";
import dynamic from "next/dynamic";

const LiveUsers = dynamic(
  () => import("@/components/dashboards/style-03/Users"),
  {
    ssr: false,
  }
);
const page = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxl:gap-6">
      <Statistics />
      <TransactionOverview />
      <IncomeExpenseChart />
      <LatestTransactions />
      <LiveUsers />
    </div>
  );
};

export default page;
