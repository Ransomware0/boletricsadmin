"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import { ReactNode } from "react";
import StateChart from "./Chart";

type CardProps = {
  id: number;
  title: string;
  amount: number;
  percent: number;
  color: string;
  arrow: ReactNode;
};
const StaticticsCard = ({ cardData }: { cardData: CardProps }) => {
  const { amount, color, percent, title, arrow } = cardData;
  return (
    <div className="col-span-2 sm:col-span-1 lg:col-span-2 xxl:col-span-1 box p-3 md:p-4 xxxl:px-8 xxxl:py-6">
      <div className="flex items-center justify-between bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <div className="flex items-center gap-3">
          <span className="font-medium">{title}</span>
        </div>
        <OptionsHorizontal />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="h4 mb-3">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: title,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(amount)}
          </h4>
          <span className={`${color} flex items-center gap-1`}>
            {arrow} {percent}%
          </span>
        </div>
        <StateChart height={60} />
      </div>
    </div>
  );
};

export default StaticticsCard;
