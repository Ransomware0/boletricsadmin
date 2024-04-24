import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import Link from "next/link";
const providerslist = [
  {
    title: "Utilities",
    icon: <i className="las la-gas-pump"></i>,
    desc: "Electricity, gas, water, sewage, trash disposal",
  },
  {
    title: "Communication",
    icon: <i className="las la-tv"></i>,
    desc: "Telephone, internet, cable TV",
  },
  {
    title: "Housing",
    icon: <i className="las la-home"></i>,
    desc: "Rent, mortgage, property taxes, insurance",
  },
  {
    title: "Transportation",
    icon: <i className="las la-car"></i>,
    desc: "Car loan, car insurance, gasoline",
  },
  {
    title: "Food",
    icon: <i className="las la-hamburger"></i>,
    desc: "Groceries, dining out",
  },
  {
    title: "Healthcare",
    icon: <i className="las la-heartbeat"></i>,
    desc: "Health insurance, medical bills",
  },
  {
    title: "Education",
    icon: <i className="las la-graduation-cap"></i>,
    desc: "Tuition, fees, books, supplies",
  },
];
const PaymentProviders = () => {
  return (
    <div className="box">
      <div className="flex justify-between items-center bb-dashed border-secondary1/20 pb-4 mb-4 lg:pb-6 lg:mb-6">
        <h4 className="h4">Payment Providers</h4>
        <OptionsHorizontal />
      </div>
      <ul className="flex flex-col gap-4 lg:gap-6">
        {providerslist.map(({ title, desc, icon }) => (
          <li key={title}>
            <Link href="#" className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-3 sm:gap-4 xxl:gap-6">
                <span className="border border-n30 dark:border-n500 bg-primary/5 w-10 h-10 flex items-center justify-center xxl:w-14 xxl:h-14 shrink-0 rounded-full">
                  {icon}
                </span>
                <div>
                  <p className="text-lg font-medium">{title}</p>
                  <span className="text-xs">{desc}</span>
                </div>
              </div>
              <span className="border border-n30 dark:border-n500 bg-primary/5 w-10 h-10 flex items-center justify-center xxl:w-14 xxl:h-14 shrink-0 rounded-full">
                <i className="las la-arrow-right"></i>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentProviders;
