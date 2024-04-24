"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import cn from "@/utils/cn";
import StaticsChart from "./StaticsChart";

const statesData = [
  {
    title: "Total Income",
    amount: "$99.99 USD",
    percent: 35.7,
    color: "text-primary",
  },
  {
    title: "Total Spending",
    amount: "$35.12 USD",
    percent: 45.2,
    color: "text-secondary1",
  },
  {
    title: "Spending Goal",
    amount: "$55.38 USD",
    percent: 25.7,
    color: "text-secondary3",
  },
];
const Statistics = () => {
  return (
    <>
      {statesData.map(({ amount, percent, title, color }) => (
        <div
          key={title}
          className="col-span-12 min-[680px]:col-span-6 xxl:col-span-4 box p-4 xxxl:p-6 4xl:p-8 bg-n0 dark:bg-bg4">
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
                <i className="las la-arrow-up text-lg"></i> {percent}%
              </span>
            </div>
            <div className="shrink-0">
              <StaticsChart />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Statistics;
