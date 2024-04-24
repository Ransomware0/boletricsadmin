import MakePayment from "@/components/payment/make-payment/MakePayment";
import Banner from "@/components/shared/Banner";

const MakePaymentPage = () => {
  return (
    <div>
      <Banner title="Make a Payment" />
      <MakePayment />
    </div>
  );
};

export default MakePaymentPage;
