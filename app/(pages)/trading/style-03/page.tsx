import Banner from "@/components/shared/Banner";
import MarketOverview from "@/components/trading/style-02/MarketOverview";
import DailyHighlight from "@/components/trading/style-03/DailyHighlight";
import QuickTransfer from "@/components/trading/style-03/QuickTransfer";
import Statistics from "@/components/trading/style-03/Statistics";

const TradingStyleTwoPage = () => {
  return (
    <div>
      <Banner title="Trading Style 03" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-7 xxl:col-span-8 flex flex-col gap-4 xxl:gap-6">
          <Statistics />
          <DailyHighlight />
        </div>
        <div className="col-span-12 md:col-span-5 xxl:col-span-4">
          <QuickTransfer />
        </div>
        <div className="col-span-12">
          <MarketOverview />
        </div>
      </div>
    </div>
  );
};

export default TradingStyleTwoPage;
