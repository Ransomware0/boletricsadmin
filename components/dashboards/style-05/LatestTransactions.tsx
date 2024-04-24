"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const transactionsData = [
  {
    title: "Hooli INV-79820",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 1121212,
  },
  {
    title: "Initech INV-24792",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 8921212,
  },
  {
    title: "Bluth Company INV-84732",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 2141212,
  },
  {
    title: "Salaries",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 2521212,
  },
  {
    title: "Massive Dynamic INV-90874",
    icon: "/images/visa.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 554100,
  },
  {
    title: "Jack Collingwood Card reload",
    icon: "/images/payoneer.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 1420012,
  },
  {
    title: "DOGE Yearly Return Invest.",
    icon: "/images/payoneer.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 782332,
  },
  {
    title: "Massive Dynamic INV-97004",
    icon: "/images/visa.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 554100,
  },
  {
    title: "Globex Corporation INV-2438",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 8521212,
  },
  {
    title: "ATM Return Invest.",
    icon: "/images/payoneer.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 782332,
  },
  {
    title: "Corporation INV-298",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    amount: 8521212,
  },
];

type Transaction = {
  title: string;
  icon: string;
  time: string;
  amount: number;
};

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;

const LatestTransactions = () => {
  const [tableData, setTableData] = useState<Transaction[]>(transactionsData);
  const [order, setOrder] = useState<Order>("ASC");

  const sortData: SortDataFunction = (col) => {
    if (order == "ASC") {
      const sorted = [...tableData].sort((a, b) => {
        if (typeof a[col] === "string" && typeof b[col] === "string") {
          return (a[col] as string).toLowerCase() >
            (b[col] as string).toLowerCase()
            ? 1
            : -1;
        } else {
          return a[col] > b[col] ? 1 : -1;
        }
      });
      setTableData(sorted);
      setOrder("DSC");
    } else {
      const sorted = [...tableData].sort((a, b) => {
        if (typeof a[col] === "string" && typeof b[col] === "string") {
          return (a[col] as string).toLowerCase() <
            (b[col] as string).toLowerCase()
            ? 1
            : -1;
        } else {
          return a[col] < b[col] ? 1 : -1;
        }
      });
      setTableData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="box">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Latest Transaction</h4>
        <OptionsHorizontal />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 cursor-pointer min-w-[330px]">
                <div className="flex items-center gap-1">
                  Title <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 min-w-[100px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Amount <IconSelector size={18} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ title, amount, icon, time }) => (
              <tr key={title} className="even:bg-secondary1/5 dark:even:bg-bg3">
                <td className="py-2 px-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src={icon}
                      width={32}
                      height={32}
                      className="rounded-full"
                      alt="payment medium icon"
                    />
                    <div>
                      <p className="font-medium mb-1">{title}</p>
                      <span className="text-xs">{time}</span>
                    </div>
                  </div>
                </td>
                <td className="py-2">${amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        className="text-primary font-semibold inline-flex gap-1 items-center mt-6 group"
        href="#">
        See More{" "}
        <i className="las la-arrow-right group-hover:pl-2 duration-300"></i>
      </Link>
    </div>
  );
};

export default LatestTransactions;
