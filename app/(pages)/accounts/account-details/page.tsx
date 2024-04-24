import AccountDetails from "@/components/accounts/account-details/AccountDetails";
import PaymentAccount from "@/components/accounts/account-details/PaymentAccount";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <div>
      <Banner title="Account Details" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <PaymentAccount />
        <AccountDetails />
      </div>
    </div>
  );
};

export default page;
