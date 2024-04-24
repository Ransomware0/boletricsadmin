import TotalDeposits from "@/components/accounts/bank-account/TotalDeposits";
import DepositDetails from "@/components/accounts/deposit-details/DepositDetails";

const DepositDetailsPage = () => {
  return (
    <div className="flex flex-col gap-4 xxl:gap-6">
      <DepositDetails />
      <TotalDeposits />
    </div>
  );
};

export default DepositDetailsPage;
