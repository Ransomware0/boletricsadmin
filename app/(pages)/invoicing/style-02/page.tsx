import RecentInvoice from "@/components/invoicing/invoice-style-02/RecentInvoice";
import Statistics from "@/components/invoicing/invoice-style-02/Statistics";
import Banner from "@/components/shared/Banner";

const InvoiceStyleTwoPage = () => {
  return (
    <div>
      <Banner title="Invoice Style 02" />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <Statistics />
        <div className="col-span-12">
          <RecentInvoice />
        </div>
      </div>
    </div>
  );
};

export default InvoiceStyleTwoPage;
