"use client";

import OptionsHorizontal from "@/components/shared/OptionsHorizontal";

const statesData = [
  {
    title: "USD",
    amount: 85232,
    percent: 35.7,
    color: "text-primary",
    icon: <i className="las la-dollar-sign text-5xl"></i>,
  },
  {
    title: "EUR",
    amount: 33450,
    percent: 45.2,
    color: "text-primary",
    icon: <i className="las la-euro-sign text-5xl"></i>,
  },
  {
    title: "GBP",
    amount: 92543,
    percent: 25.7,
    color: "text-secondary2",
    icon: <i className="las la-pound-sign text-5xl"></i>,
  },
  {
    title: "JPY",
    amount: 36254,
    percent: 50.7,
    color: "text-secondary3",
    icon: <i className="las la-yen-sign text-5xl"></i>,
  },
];
const Statistics = () => {
  return (
    <>
      {statesData.map(({ amount, percent, title, icon, color }) => (
        <div
          key={title}
          className="col-span-12 min-[650px]:col-span-6 xxxl:col-span-3 box p-4 4xl:p-8 bg-n0 dark:bg-bg4">
          <div className="bb-dashed mb-4 pb-4 lg:pb-6 lg:mb-6 flex justify-between items-center">
            <p className="font-medium">{title}</p>
            <OptionsHorizontal />
          </div>
          <div className="flex items-center justify-between gap-4 xxxl:gap-6">
            <div>
              <h4 className="h4 mb-3">
                {" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: title,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(amount)}
              </h4>
              <span>
                <span className="text-primary">
                  <i className="las la-arrow-up text-lg"></i> +2.4%
                </span>{" "}
                Since last month
              </span>
            </div>
            <div className="text-primary">{icon}</div>
          </div>
          <div className="rounded-lg h-1 bg-n30 dark:bg-n500 mt-4">
            <div className="w-3/4 h-1 bg-primary rounded-lg"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Statistics;
