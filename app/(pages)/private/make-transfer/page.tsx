import MyWallet from "@/components/dashboards/style-02/MyWallet";
import RecentPayment from "@/components/private-transfer/make-transfer/RecentPayments";
import RecentTransferChart from "@/components/private-transfer/make-transfer/RecentTransferChart";
import Banner from "@/components/shared/Banner";

const MakeTransfer = () => {
  return (
    <div>
      <Banner title="Make Transfer" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-7 xxl:col-span-8">
          <RecentTransferChart />
        </div>
        <div className="col-span-12 md:col-span-5 xxl:col-span-4">
          <MyWallet />
        </div>
        <div className="col-span-12">
          <RecentPayment />
        </div>
      </div>
    </div>
  );
};

export default MakeTransfer;
