import Banner from "@/components/shared/Banner";
import MarketOverview from "@/components/trading/style-01/MarketOverview";
import Statistics from "@/components/trading/style-01/Statistics";

const TradingStyleOnePage = () => {
  return (
    <div>
      <Banner title="Trading Style 01" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <Statistics />
        <div className="col-span-12">
          <MarketOverview />
        </div>
      </div>
    </div>
  );
};

export default TradingStyleOnePage;
