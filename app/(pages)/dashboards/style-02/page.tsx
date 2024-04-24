import IncomeExpences from "@/components/dashboards/style-02/IncomeExpences";
import LatestTransactions from "@/components/dashboards/style-02/LatestTransactions";
import MyWallet from "@/components/dashboards/style-02/MyWallet";
import Statistics from "@/components/dashboards/style-02/Statistics";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <div>
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
        <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col gap-4 xxl:gap-6">
          <Statistics />
          <IncomeExpences />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <MyWallet />
        </div>
        <div className="col-span-12">
          <LatestTransactions />
        </div>
      </div>
    </div>
  );
};

export default page;
