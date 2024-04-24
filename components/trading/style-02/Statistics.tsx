import StaticticsCard from "./StaticticsCard";

const statisticsData = [
  {
    id: 1,
    title: "USD",
    amount: 72245,
    percent: 28.3,
    color: "text-primary",
    arrow: <i className="las la-arrow-up text-lg"></i>,
  },
  {
    id: 2,
    title: "EUR",
    amount: 72245,
    percent: 45.3,
    color: "text-primary",
    arrow: <i className="las la-arrow-up text-lg"></i>,
  },
  {
    id: 3,
    title: "GBP",
    amount: 72245,
    percent: -12.3,
    color: "text-secondary2",
    arrow: <i className="las la-arrow-down text-lg"></i>,
  },
  {
    id: 4,
    title: "JPY",
    amount: 72245,
    percent: 10.3,
    color: "text-secondary3",
    arrow: <i className="las la-arrows-alt-v text-lg"></i>,
  },
];

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 gap-4 xxl:gap-6">
      {statisticsData.map((item) => (
        <StaticticsCard key={item.id} cardData={item} />
      ))}
    </div>
  );
};

export default Statistics;
