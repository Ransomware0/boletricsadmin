"use client";
import Dropdown from "@/components/shared/Dropdown";
import SearchBar from "@/components/shared/SearchBar";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Action from "./Action";
enum TransactionStatus {
  Successful = "Successful",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

type Transaction = {
  title: string;
  icon: string;
  time: string;
  medium: string;
  invoice: string;
  status: TransactionStatus;
  amount: number;
  isChecked: boolean;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;

const transactionsData = [
  {
    title: "Hooli INV-79820",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    medium: "Paypal",
    invoice: "#521452",
    status: TransactionStatus.Successful,
    amount: 1121212,
    isChecked: false,
  },
  {
    title: "Initech INV-24792",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    medium: "Paypal",
    invoice: "#521452",
    status: TransactionStatus.Cancelled,
    amount: 8921212,
    isChecked: false,
  },
  {
    title: "Bluth Company INV-84732",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    medium: "Paypal",
    invoice: "#521452",
    status: TransactionStatus.Pending,
    amount: 2141212,
    isChecked: false,
  },
  {
    title: "Salaries",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    medium: "Paypal",
    invoice: "#521452",
    status: TransactionStatus.Successful,
    amount: 2521212,
    isChecked: false,
  },
  {
    title: "Massive Dynamic INV-90874",
    icon: "/images/visa.png",
    time: "11 Aug, 24. 10:36 am",
    medium: "Visa",
    invoice: "#521452",
    status: TransactionStatus.Pending,
    amount: 554100,
    isChecked: false,
  },
  {
    title: "Jack Collingwood Card reload",
    icon: "/images/payoneer.png",
    time: "11 Aug, 24. 10:36 am",
    medium: "Payoneer",
    invoice: "#521452",
    status: TransactionStatus.Successful,
    amount: 1420012,
    isChecked: false,
  },
  {
    title: "DOGE Yearly Return Invest.",
    icon: "/images/payoneer.png",
    time: "11 Aug, 24. 10:36 am",
    medium: "Payoneer",
    invoice: "#521452",
    status: TransactionStatus.Cancelled,
    amount: 782332,
    isChecked: false,
  },
  {
    title: "Globex Corporation INV-24398",
    icon: "/images/paypal.png",
    time: "11 Aug, 24. 10:36 am",
    medium: "Paypal",
    invoice: "#521452",
    status: TransactionStatus.Successful,
    amount: 8521212,
    isChecked: false,
  },
];
const options = ["Recent", "Name", "Amount"];
const LatestTransactions = () => {
  const [tableData, setTableData] = useState<Transaction[]>(transactionsData);
  const [order, setOrder] = useState<Order>("ASC");
  const [selected, setSelected] = useState(options[0]);
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
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;

    if (name === "allSelect") {
      let tempData = tableData.map((item) => {
        return { ...item, isChecked: checked };
      });
      setTableData(tempData);
    } else {
      let tempData = tableData.map((item) =>
        item.title === name ? { ...item, isChecked: checked } : item
      );
      setTableData(tempData);
    }
  };
  const onDelete = (title: string) => {
    const remained = tableData.filter((item) => item.title !== title);
    setTableData(remained);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = transactionsData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value)
    );
    setTableData(result);
  };
  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Latest Transaction</h4>
        <div className="flex items-center gap-4">
          <SearchBar handleSearch={handleSearch} />
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>Sort By : </span>
            <Dropdown
              setSelected={setSelected}
              selected={selected}
              items={options}
              btnClass="rounded-[32px] bg-secondary1/5 md:py-2.5"
              contentClass="w-full"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th className="text-start px-6 w-[50px]">
                <input
                  name="allSelect"
                  type="checkbox"
                  onChange={handleSelect}
                  checked={
                    tableData.length > 0 &&
                    tableData.every((item) => item.isChecked == true)
                  }
                  className="scale-125 accent-secondary1"
                />
              </th>
              <th
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 cursor-pointer min-w-[330px]">
                <div className="flex items-center gap-1">
                  Title <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[120px]">Invoice</th>
              <th
                onClick={() => sortData("medium")}
                className="text-start py-5 min-w-[120px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Medium <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5  min-w-[120px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Transaction <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="text-start py-5 cursor-pointer">
                <div className="flex items-center gap-1">
                  Status <IconSelector size={18} />
                </div>
              </th>
              <th className="text-center p-5 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
              (
                {
                  title,
                  amount,
                  icon,
                  medium,
                  time,
                  invoice,
                  status,
                  isChecked,
                },
                index
              ) => (
                <tr
                  key={title}
                  className="even:bg-secondary1/5 dark:even:bg-bg3">
                  <td className="text-start px-6">
                    <input
                      type="checkbox"
                      className="scale-125 accent-secondary1"
                      checked={isChecked}
                      onChange={handleSelect}
                      name={title}
                    />
                  </td>
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
                  <td className="py-2">{invoice}</td>
                  <td className="py-2">{medium}</td>
                  <td className="py-2">${amount.toLocaleString()}</td>
                  <td className="py-2">
                    <span
                      className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                        status === TransactionStatus.Successful &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        status === TransactionStatus.Cancelled &&
                        "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      } ${
                        status == TransactionStatus.Pending &&
                        "bg-secondary3/10 dark:bg-bg3 text-secondary3"
                      }`}>
                      {status}
                    </span>
                  </td>
                  <td className="py-2">
                    <div className="flex justify-center">
                      <Action
                        onDelete={() => onDelete(title)}
                        fromBottom={
                          index == tableData.length - 1 ||
                          index == tableData.length - 2
                        }
                      />
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        {tableData.length < 1 && (
          <div className="text-center py-10">
            <div className="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
              <div className="px-5 lg:px-14 xl:px-24 mb-5">
                <i className="las text-primary la-search text-7xl"></i>
              </div>
              <h3 className="h3 mb-3 lg:mb-6">No matching results</h3>
              <p>
                Looks like we couldn&nbsp;t find any matching results for your
                search terms. Try other search terms.
              </p>
            </div>
          </div>
        )}
      </div>
      {tableData.length > 0 && (
        <Link
          className="text-primary font-semibold inline-flex gap-1 items-center mt-6 group"
          href="#">
          See More{" "}
          <i className="las la-arrow-right group-hover:pl-2 duration-300"></i>
        </Link>
      )}
    </div>
  );
};

export default LatestTransactions;
