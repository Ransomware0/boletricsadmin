import AccountBalance from "@/components/accounts/overview/AccountBalance";
import DepositBalance from "@/components/accounts/overview/DepositBalance";
import DeopositsAccountChart from "@/components/accounts/overview/DepositsAccountChart";
import PaymentAccount from "@/components/accounts/overview/PaymentAccount";
import PaymentOverviewChart from "@/components/accounts/overview/PaymentOverviewChart";
import YourAccounts from "@/components/accounts/overview/YourAccounts";

const page = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxl:gap-6">
      <PaymentOverviewChart />
      <AccountBalance />
      <DeopositsAccountChart />
      <DepositBalance />
      <PaymentAccount />
      <YourAccounts />
    </div>
  );
};

export default page;
