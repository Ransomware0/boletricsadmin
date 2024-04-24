import PaymentAccount from "@/components/private-transfer/transfer-overview/PaymentAccount";
import TotalTransferChart from "@/components/private-transfer/transfer-overview/TotalTransferChart";
import YourReceipt from "@/components/private-transfer/transfer-overview/YourReceipt";
import Banner from "@/components/shared/Banner";

const TransferOverview = () => {
  return (
    <div>
      <Banner title="Transfer Overview" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          <TotalTransferChart />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <YourReceipt />
        </div>
        <div className="col-span-12">
          <PaymentAccount />
        </div>
      </div>
    </div>
  );
};

export default TransferOverview;
