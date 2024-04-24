import CardDetails from "@/components/cards/card-details/CardDetails";
import CardDocumentation from "@/components/cards/card-details/CardDocumentation";
import CardHistory from "@/components/cards/card-details/CardHistory";
import CardTransactionsChart from "@/components/cards/card-details/CardTransactions";
import Banner from "@/components/shared/Banner";

const CardDetailsPage = () => {
  return (
    <div>
      <Banner title="Card Details" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-5 xxl:col-span-4">
          <CardDetails />
          <CardHistory />
        </div>
        <div className="col-span-12 md:col-span-7 xxl:col-span-8">
          <CardTransactionsChart />
          <CardDocumentation />
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;
