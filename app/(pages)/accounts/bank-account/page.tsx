import PaymentAccount from "@/components/accounts/bank-account/PaymentAccount";
import TotalDeposits from "@/components/accounts/bank-account/TotalDeposits";
import YourCredits from "@/components/accounts/bank-account/YourCredits";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <div>
      <Banner title="Bank Account" />
      <div className="grid grid-cols-1 gap-4 xxl:gap-6">
        <PaymentAccount />
        <TotalDeposits />
        <YourCredits />
      </div>
    </div>
  );
};

export default page;
