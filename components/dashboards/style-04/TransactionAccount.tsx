"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const transactionsData = [
  {
    title: "John Snow - Metal",
    icon: "/images/card-sm-1.png",
    time: "**4291 - Exp: 12/26",
    amount: "$95.200.00",
  },
  {
    title: "John Snow - Virtual",
    icon: "/images/card-sm-2.png",
    time: "**4291 - Exp: 12/26",
    amount: "€54,448.54",
  },
  {
    title: "Ben Abramov - Metal",
    icon: "/images/card-sm-3.png",
    time: "**4291 - Exp: 12/26",
    amount: "£74,215.32",
  },
  {
    title: "John Cina - Virtual",
    icon: "/images/card-sm-8.png",
    time: "**4291 - Exp: 12/26",
    amount: "د.ك 67,511.21",
  },
  {
    title: "Kane Methew - Metal",
    icon: "/images/card-sm-4.png",
    time: "**4291 - Exp: 12/26",
    amount: "¥36,122,54",
  },
  {
    title: "Jane Alam - Virtual",
    icon: "/images/card-sm-5.png",
    time: "**4291 - Exp: 12/26",
    amount: "₹75,121,36",
  },
  {
    title: "Jabed Miah - Metal",
    icon: "/images/card-sm-6.png",
    time: "**4291 - Exp: 12/26",
    amount: "₽88,125.00",
  },
  {
    title: "Bablu Sheikh - Virtual",
    icon: "/images/card-sm-7.png",
    time: "**4291 - Exp: 12/26",
    amount: "¢96,214.03",
  },
];

type Transaction = {
  title: string;
  icon: string;
  time: string;
  amount: string;
};

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;
const TransactionAccount = () => {
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
        <p className="font-medium">Transaction Account</p>
        <OptionsHorizontal />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 cursor-pointer min-w-[300px]">
                <div className="flex items-center gap-1">
                  Title
                  <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 w-[14%] cursor-pointer">
                <div className="flex items-center gap-1">
                  Amount
                  <IconSelector size={18} />
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
                      width={60}
                      height={40}
                      className="rounded"
                      alt="payment medium icon"
                    />
                    <div>
                      <p className="font-medium mb-1">{title}</p>
                      <span className="text-xs">{time}</span>
                    </div>
                  </div>
                </td>
                <td className="py-2">
                  <div>
                    <p className="font-medium">{amount}</p>
                    <span className="text-xs">Account Balance</span>
                  </div>
                </td>
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

export default TransactionAccount;
