"use client";

import useDropdown from "@/utils/useDropdown";
import QuickTransferModal from "./QuickTransferModal";

const actionsData = [
  {
    id: 1,
    title: "Make Transfer",
    desc: "365 Credits",
    icon: <i className="las text-2xl xxl:text-3xl la-exchange-alt"></i>,
  },
  {
    id: 2,
    title: "Pay for QR Code",
    desc: "500+ Service Provider",
    icon: <i className="las text-2xl xxl:text-3xl la-qrcode"></i>,
  },
  {
    id: 3,
    title: "Pay for Paypal",
    desc: "32 Credits",
    icon: <i className="lab text-2xl xxl:text-3xl la-paypal"></i>,
  },
];

const PaymentActions = () => {
  const { open, toggleOpen } = useDropdown();
  return (
    <div className="grid grid-cols-12 gap-4 xxl:gap-6 p-4 box min-[1880px]:p-6 mb-4 xxl:mb-6">
      {actionsData.map(({ id, title, desc, icon }) => (
        <div
          key={id}
          onClick={toggleOpen}
          className="col-span-12 cursor-pointer border border-dashed duration-300 border-transparent hover:border-primary lg:col-span-6 xxxl:col-span-4 box  bg-primary/5 dark:bg-bg3 flex items-center gap-4 4xl:gap-6 xl:p-3 min-[1880px]:p-6">
          <span className="bg-n0 dark:bg-bg4 w-10 h-10 xxl:w-16 xxl:h-16 flex items-center justify-center shrink-0 rounded-full shadow-[0px_6px_40px_0px_rgba(0,0,0,0.02)]">
            {icon}
          </span>
          <div>
            <h5 className="text-base xxl:text-lg 4xl:text-xl font-medium mb-1 xxl:mb-2">
              {title}
            </h5>
            <span className="text-xs xxl:text-sm">{desc}</span>
          </div>
        </div>
      ))}
      <QuickTransferModal open={open} toggleOpen={toggleOpen} />
    </div>
  );
};

export default PaymentActions;
