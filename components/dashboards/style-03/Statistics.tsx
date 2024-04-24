"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import cn from "@/utils/cn";

const statesData = [
  {
    title: "Total Income",
    amount: "$8500 USD",
    percent: 35.7,
    icon: <i className="las text-3xl xl:text-5xl la-chart-bar"></i>,
    color: "text-primary",
  },
  {
    title: "Total Spending",
    amount: "$3500 USD",
    percent: 45.2,
    icon: <i className="las text-3xl xl:text-5xl la-coins"></i>,
    color: "text-secondary1",
  },
  {
    title: "Spending Goal",
    amount: "$9254 USD",
    percent: 25.7,
    icon: <i className="las text-3xl xl:text-5xl la-chart-pie"></i>,
    color: "text-secondary2",
  },
  {
    title: "Total Transactions",
    amount: "$17000 USD",
    percent: 50.7,
    icon: <i className="las text-3xl xl:text-5xl la-chart-line"></i>,
    color: "text-secondary3",
  },
];
const Statistics = () => {
  return (
    <>
      {statesData.map(({ amount, percent, icon, title, color }) => (
        <div
          key={title}
          className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
          <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
            <span className="font-medium">{title}</span>
            <OptionsHorizontal />
          </div>
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
              {icon}
            </div>
            <div>
              <h4 className="h4 mb-2 xxl:mb-4">{amount}</h4>
              <span
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap",
                  color
                )}>
                <i className="las la-arrow-up text-lg"></i> {percent}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Statistics;
