import Modal from "@/components/shared/Modal";
type ModalType = {
  open: boolean;
  toggleOpen: () => void;
};
const invoiceData = [
  {
    title: "PaymentPal Invoice",
    rate: 20,
    city: "New York",
    total: 275.45,
  },
  {
    title: "QuickBills Statement",
    rate: 20,
    city: "Los Angelos",
    total: 875.45,
  },
  {
    title: "SwiftSettle Invoice",
    rate: 20,
    city: "Washington",
    total: 575.45,
  },
  {
    title: "CashFlow Express Bill",
    rate: 20,
    city: "New York",
    total: 205.45,
  },
  {
    title: "SmartSettle Receipt",
    rate: 20,
    city: "Barmingham",
    total: 255.45,
  },
];
const InvoiceModal = ({ open, toggleOpen }: ModalType) => {
  return (
    <Modal
      open={open}
      toggleOpen={toggleOpen}
      width="max-w-[1334px]"
      height="max-sm:min-h-[1300px] min-h-[880px]">
      <div className="bb-dashed border-secondary1/20 mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Invoice UI</h4>
      </div>
      <div className="bb-dashed border-secondary1/20 mb-4 pb-4 lg:mb-6 lg:pb-6 flex max-sm:flex-wrap">
        <div className="bg-secondary1/5 dark:bg-bg3 p-4 md:p-6 xl:p-8 sm:max-w-[267px] w-full">
          <p className="mb-3">Send To :</p>
          <h4 className="h4 mb-3">Max Inc,</h4>
          <p className="text-lg font-medium mb-16 lg:mb-20">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
          <p className="mb-3">Invoice ID :</p>
          <p className="text-lg font-medium mb-6">#515465</p>
          <p className="mb-3">Send To :</p>
          <p className="text-lg font-medium mb-6">14 Feb 2024, 3:56 PM</p>
          <p className="mb-3">Due :</p>
          <p className="text-lg font-medium mb-6">02 Aug 2024, 9:15 PM</p>
        </div>
        <div className="overflow-x-auto grow">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="bg-secondary1/5 dark:bg-bg3">
                <th className="p-5 text-start">Title</th>
                <th className="p-5 text-start">Rate</th>
                <th className="p-5 text-start">City</th>
                <th className="p-5 text-start">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map(({ title, city, rate, total }) => (
                <tr
                  key={title}
                  className="border-b border-n30 dark:border-n500 first:border-t">
                  <td className="py-5 px-6">{title}</td>
                  <td className="py-5 px-6">{rate}%</td>
                  <td className="py-5 px-6">{city}</td>
                  <td className="py-5 px-6">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-7">
            <div className="bg-secondary1/5 max-w-[220px]">
              <div className="px-6 py-5 flex justify-between gap-5">
                <p className="">Sub Total :</p>
                <p className="font-medium">$767.50</p>
              </div>
              <div className="px-6 py-5 flex justify-between gap-5">
                <p className="">Tax 11% :</p>
                <p className="font-medium">$36.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex gap-5">
          <button className="flex items-center gap-2">
            <i className="las la-download border border-n30 dark:border-n500 rounded-full bg-primary/5 dark:bg-bg3 p-2"></i>
            <span>Download PDF </span>
          </button>
          <button className="flex items-center gap-2">
            <i className="las la-print border border-n30 dark:border-n500 rounded-full bg-primary/5 dark:bg-bg3 p-2"></i>
            <span>Print PDF </span>
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-2xl">Total :</span>{" "}
          <h4 className="h4">$804.00</h4>
        </div>
      </div>
    </Modal>
  );
};

export default InvoiceModal;
