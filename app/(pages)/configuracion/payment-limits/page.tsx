import PaymentLimits from "@/components/settings/payment-limits/PaymentLimits";
import TransactionsLimits from "@/components/settings/payment-limits/TransactionLImits";
import Banner from "@/components/shared/Banner";

const PaymentLimitPage = () => {
  return (
    <div>
      <Banner title="Payment Limits" />
      <div className="flex flex-col gap-4 xxl:gap-6">
        <PaymentLimits />
        <TransactionsLimits />
      </div>
    </div>
  );
};

export default PaymentLimitPage;
