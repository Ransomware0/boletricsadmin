import Banner from "@/components/shared/Banner";
import MarketOverview from "@/components/trading/style-02/MarketOverview";
import Statistics from "@/components/trading/style-02/Statistics";
import USDvsEUChart from "@/components/trading/style-02/USDvsEURChart";

const TradingStyleTwoPage = () => {
  return (
    <div>
      <Banner title="Trading Style 02" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 lg:col-span-6 xxl:col-span-7 xxxl:col-span-6">
          <Statistics />
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5 xxxl:col-span-6">
          <USDvsEUChart />
        </div>
        <div className="col-span-12">
          <MarketOverview />
        </div>
      </div>
    </div>
  );
};

export default TradingStyleTwoPage;
