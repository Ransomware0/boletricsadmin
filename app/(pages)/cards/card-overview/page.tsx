import YourCredits from "@/components/accounts/bank-account/YourCredits";
import PopularCards from "@/components/cards/card-overview/PopularCards";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <div>
      <Banner title="Bank Account" />
      <div className="flex flex-col gap-4 xxl:gap-6">
        <PopularCards />
        <YourCredits />
      </div>
    </div>
  );
};

export default page;
