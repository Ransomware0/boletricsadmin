import PaymentProviders from "@/components/payment/payment-providers/Providers";
import Banner from "@/components/shared/Banner";

const ExchangePage = () => {
  return (
    <div>
      <Banner title="Payment Providers" />
      <PaymentProviders />
    </div>
  );
};

export default ExchangePage;
