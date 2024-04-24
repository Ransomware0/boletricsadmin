import QuickExchange from "@/components/payment/exchange/QuickExchange";
import TotalExchange from "@/components/payment/exchange/TotalExchange";
import UsdToEuroChart from "@/components/payment/exchange/UsdToEuroChart";
import Banner from "@/components/shared/Banner";

const ExchangePage = () => {
  return (
    <div>
      <Banner title="Exchange" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-7 xxl:col-span-8">
          <UsdToEuroChart />
        </div>
        <div className="col-span-12 md:col-span-5 xxl:col-span-4">
          <QuickExchange />
        </div>
        <div className="col-span-12">
          <TotalExchange />
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
