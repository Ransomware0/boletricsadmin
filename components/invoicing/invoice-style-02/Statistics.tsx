"use client";
import ProgressChart from "@/components/dashboards/style-01/ProgressChart";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import cn from "@/utils/cn";

const statesData = [
  {
    title: "Total Invoice",
    amount: "$8500 USD",
    percent: 35.7,
    series: 35.5,
    color: "text-primary",
    icon: <i className="las la-arrow-up text-lg"></i>,
  },
  {
    title: "Paid Invoice",
    amount: "$3500 USD",
    percent: 45.2,
    series: 78.5,
    color: "text-primary",
    icon: <i className="las la-arrow-up text-lg"></i>,
  },
  {
    title: "Unpaid",
    amount: "$9254 USD",
    percent: 25.7,
    series: 55.5,
    color: "text-secondary3",
    icon: <i className="las la-arrows-alt-v text-lg"></i>,
  },
  {
    title: "Rejected Invoice",
    amount: "$17000 USD",
    percent: 50.7,
    series: 83.5,
    color: "text-secondary2",
    icon: <i className="las la-arrow-down text-lg"></i>,
  },
];
const Statistics = () => {
  return (
    <>
      {statesData.map(({ amount, percent, series, title, icon, color }) => (
        <div
          key={title}
          className="col-span-12 min-[650px]:col-span-6 xxxl:col-span-3 box bg-n0 dark:bg-bg4">
          <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
            <span className="font-medium">{title}</span>
            <OptionsHorizontal />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="h4 mb-4">{amount}</h4>
              <span
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap",
                  color
                )}>
                {icon} {percent} Send
              </span>
            </div>
            <div className="-my-3 shrink-0 ltr:translate-x-3 xl:ltr:translate-x-7 xxxl:ltr:translate-x-2 4xl:ltr:translate-x-9 rtl:-translate-x-3 xl:rtl:-translate-x-7 xxxl:rtl:-translate-x-2 4xl:rtl:-translate-x-9">
              <ProgressChart labels={series + "%"} series={series} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Statistics;
