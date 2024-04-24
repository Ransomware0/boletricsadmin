"use client";

const statesData = [
  {
    title: "USD",
    amount: "$85,232",
    percent: 35.7,
    color: "text-primary",
    icon: <i className="las la-dollar-sign text-4xl"></i>,
  },
  {
    title: "EUR",
    amount: "€33,450",
    percent: 45.2,
    color: "text-primary",
    icon: <i className="las la-euro-sign text-4xl"></i>,
  },
  {
    title: "GBP",
    amount: "£92,543",
    percent: 25.7,
    color: "text-secondary2",
    icon: <i className="las la-pound-sign text-4xl"></i>,
  },
  {
    title: "JPY",
    amount: " ¥25c451",
    percent: 50.7,
    color: "text-secondary3",
    icon: <i className="las la-yen-sign text-4xl"></i>,
  },
];
const Statistics = () => {
  return (
    <>
      {statesData.map(({ amount, percent, title, icon, color }) => (
        <div
          key={title}
          className="col-span-12 min-[650px]:col-span-6 xxxl:col-span-3 box bg-n0 dark:bg-bg4">
          <div className="flex items-center gap-4 xxxl:gap-6 mb-5 xxl:mb-7">
            <div className="text-primary px-3 py-2.5 bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-xl">
              {icon}
            </div>
            <div>
              <p className="font-medium mb-3">{title}</p>
              <h4 className="h4">{amount}</h4>
            </div>
          </div>
          <div className="rounded-lg h-1 bg-primary/5 mb-4">
            <div className="w-3/4 h-1 bg-primary rounded-lg"></div>
          </div>
          <span>
            <span className="text-primary">
              <i className="las la-arrow-up text-lg"></i> +2.4%
            </span>{" "}
            Since last month
          </span>
        </div>
      ))}
    </>
  );
};

export default Statistics;
