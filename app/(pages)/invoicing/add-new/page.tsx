import AddInvoice from "@/components/invoicing/add-invoice/AddInvoice";
import Banner from "@/components/shared/Banner";

const AddInvoicePage = () => {
  return (
    <div>
      <Banner title="Add New Invoice" />
      <AddInvoice />
    </div>
  );
};

export default AddInvoicePage;
