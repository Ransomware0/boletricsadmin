"use client";

const statesData = [
  {
    title: "USD",
    amount: 85232,
    percent: 70.7,
    color: "text-primary",
    icon: (
      <i className="las la-dollar-sign text-2xl lg:text-3xl xxl:text-4xl"></i>
    ),
    arrow: <i className="las la-arrow-up text-lg"></i>,
  },
  {
    title: "EUR",
    amount: 33450,
    percent: 50.2,
    color: "text-secondary3",
    icon: (
      <i className="las la-euro-sign text-2xl lg:text-3xl xxl:text-4xl"></i>
    ),
    arrow: <i className="las la-arrows-alt-v text-lg"></i>,
  },
  {
    title: "GBP",
    amount: 92543,
    percent: 9.7,
    color: "text-secondary2",
    icon: (
      <i className="las la-pound-sign text-2xl lg:text-3xl xxl:text-4xl"></i>
    ),
    arrow: <i className="las la-arrow-down text-lg"></i>,
  },
];
const Statistics = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxl:gap-6">
      {statesData.map(({ amount, percent, title, icon, color, arrow }) => (
        <div
          key={title}
          className="col-span-12 min-[650px]:col-span-6 md:col-span-12 lg:col-span-6 xxxl:col-span-4 box xl:p-6 xxxl:p-6 bg-n0 dark:bg-bg4">
          <div className="flex justify-between items-center bb-dashed mb-4 pb-4 xxl:pb-6 xxl:mb-6">
            <p className="font-medium">{title}</p>
            <span className={color}>
              {arrow} {percent}%
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 xxxl:gap-6">
            <div>
              <h4 className="h4 mb-2 xxl:mb-3">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: title,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(amount)}
              </h4>
              <p>Total Balance</p>
            </div>
            <div className="text-primary px-3 py-2.5 bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-xl">
              {icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
