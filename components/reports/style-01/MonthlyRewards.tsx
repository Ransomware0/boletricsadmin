import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import Link from "next/link";

const rewards = [
  {
    title: "US Dollar (USD)",
    amount: 54,
    percent: 45,
    icon: <i className="las la-dollar-sign text-4xl"></i>,
  },
  {
    title: "Euro (EUR)",
    amount: 72,
    percent: 62,
    icon: <i className="las la-euro-sign text-4xl"></i>,
  },
  {
    title: "British Pound (GBP)",
    amount: 109,
    percent: 82,
    icon: <i className="las la-pound-sign text-4xl"></i>,
  },
];
const MonthlyRewards = () => {
  return (
    <div className="box xl:p-8">
      <div className="flex justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Monthly Rewards</h4>
        <OptionsHorizontal />
      </div>
      {rewards.map(({ title, amount, icon, percent }) => (
        <div
          key={title}
          className="bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6 flex gap-4 xxl:gap-6 items-center">
          <div className="text-primary px-3 py-2.5 bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-xl">
            {icon}
          </div>
          <div className="grow">
            <div className="flex justify-between items-center mb-3">
              <p className="text-base md:text-lg font-semibold">{title}</p>
              <span>{amount}</span>
            </div>
            <div className="flex gap-2 items-center">
              <p>{percent}%</p>
              <div className="rounded-lg grow h-1 bg-primary/5 dark:bg-n600">
                <div
                  style={{ width: `${percent}%` }}
                  className="h-1 bg-primary rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Link
        className="text-primary font-semibold inline-flex gap-1 items-center mt-6 group"
        href="#">
        See More{" "}
        <i className="las la-arrow-right group-hover:pl-2 duration-300"></i>
      </Link>
    </div>
  );
};

export default MonthlyRewards;
