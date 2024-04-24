import PaymentActions from "@/components/payment/payment-overview/PaymentActions";
import PaymentOverview from "@/components/payment/payment-overview/PaymentOverview";
import PaymentProviders from "@/components/payment/payment-overview/PaymentProviders";
import RecentPayments from "@/components/payment/payment-overview/RecentPayments";
import Banner from "@/components/shared/Banner";

const PaymentOverviewPgae = () => {
  return (
    <div>
      <Banner title="Payment Overview" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-7 xxl:col-span-8">
          <PaymentActions />
          <PaymentOverview />
        </div>
        <div className="col-span-12 md:col-span-5 xxl:col-span-4">
          <PaymentProviders />
        </div>
        <div className="col-span-12">
          <RecentPayments />
        </div>
      </div>
    </div>
  );
};

export default PaymentOverviewPgae;
