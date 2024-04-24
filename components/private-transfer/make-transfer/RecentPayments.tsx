"use client";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
enum PaymentStatus {
  Successful = "Successful",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

type Payment = {
  id: number;
  account: string;
  icon: string;
  transferaccount: string;
  money: number;
  medium: string;
  date: string;
  time: string;
  status: PaymentStatus;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Payment) => void;

const transactionsData: Payment[] = [
  {
    id: 31,
    account: "123 *** *** 456",
    icon: "/images/usa-sm.png",
    transferaccount: "789 *** *** 012",
    medium: "Paypal",
    date: "04/15/2029",
    money: 31579.88,
    status: PaymentStatus.Successful,
    time: "11:30 PM",
  },
  {
    id: 32,
    account: "456 *** *** 789",
    icon: "/images/euro-sm.png",
    transferaccount: "321 *** *** 345",
    medium: "Skrill",
    date: "04/16/2029",
    money: 23918.74,
    status: PaymentStatus.Cancelled,
    time: "08:45 AM",
  },
  {
    id: 33,
    account: "789 *** *** 012",
    icon: "/images/jp-sm.png",
    transferaccount: "654 *** *** 678",
    medium: "Stripe",
    date: "04/17/2029",
    money: 18093.27,
    status: PaymentStatus.Pending,
    time: "02:15 PM",
  },
  {
    id: 34,
    account: "012 *** *** 345",
    icon: "/images/uk-sm.png",
    transferaccount: "987 *** *** 890",
    medium: "TransferWise",
    date: "04/18/2029",
    money: 55028.46,
    status: PaymentStatus.Successful,
    time: "05:00 AM",
  },
  {
    id: 35,
    account: "345 *** *** 678",
    icon: "/images/cn-sm.png",
    transferaccount: "210 *** *** 234",
    medium: "Revolut",
    date: "04/19/2029",
    money: 17624.11,
    status: PaymentStatus.Pending,
    time: "01:30 PM",
  },
  {
    id: 36,
    account: "678 *** *** 901",
    icon: "/images/rs-sm.png",
    transferaccount: "543 *** *** 456",
    medium: "Neteller",
    date: "04/20/2029",
    money: 96234.79,
    status: PaymentStatus.Successful,
    time: "10:20 PM",
  },
  {
    id: 37,
    account: "901 *** *** 234",
    icon: "/images/uk-sm.png",
    transferaccount: "876 *** *** 567",
    medium: "Square",
    date: "04/21/2029",
    money: 4312.09,
    status: PaymentStatus.Cancelled,
    time: "07:40 AM",
  },
  {
    id: 38,
    account: "234 *** *** 567",
    icon: "/images/usa-sm.png",
    transferaccount: "109 *** *** 890",
    medium: "Venmo",
    date: "04/22/2029",
    money: 22897.63,
    status: PaymentStatus.Successful,
    time: "03:55 PM",
  },
  {
    id: 39,
    account: "567 *** *** 890",
    icon: "/images/rs-sm.png",
    transferaccount: "432 *** *** 123",
    medium: "Google Pay",
    date: "04/23/2029",
    money: 50473.15,
    status: PaymentStatus.Successful,
    time: "11:10 AM",
  },
  {
    id: 40,
    account: "890 *** *** 123",
    icon: "/images/uk-sm.png",
    transferaccount: "765 *** *** 456",
    medium: "Apple Pay",
    date: "04/24/2029",
    money: 41687.24,
    status: PaymentStatus.Successful,
    time: "09:05 PM",
  },
  {
    id: 41,
    account: "123 *** *** 456",
    icon: "/images/usa-sm.png",
    transferaccount: "789 *** *** 012",
    medium: "Paypal",
    date: "04/15/2029",
    money: 31579.88,
    status: PaymentStatus.Successful,
    time: "11:30 PM",
  },
  {
    id: 42,
    account: "456 *** *** 789",
    icon: "/images/euro-sm.png",
    transferaccount: "321 *** *** 345",
    medium: "Skrill",
    date: "04/16/2029",
    money: 23918.74,
    status: PaymentStatus.Cancelled,
    time: "08:45 AM",
  },
  {
    id: 43,
    account: "789 *** *** 012",
    icon: "/images/jp-sm.png",
    transferaccount: "654 *** *** 678",
    medium: "Stripe",
    date: "04/17/2029",
    money: 18093.27,
    status: PaymentStatus.Pending,
    time: "02:15 PM",
  },
  {
    id: 44,
    account: "012 *** *** 345",
    icon: "/images/uk-sm.png",
    transferaccount: "987 *** *** 890",
    medium: "TransferWise",
    date: "04/18/2029",
    money: 55028.46,
    status: PaymentStatus.Successful,
    time: "05:00 AM",
  },
  {
    id: 45,
    account: "345 *** *** 678",
    icon: "/images/cn-sm.png",
    transferaccount: "210 *** *** 234",
    medium: "Revolut",
    date: "04/19/2029",
    money: 17624.11,
    status: PaymentStatus.Pending,
    time: "01:30 PM",
  },
  {
    id: 46,
    account: "678 *** *** 901",
    icon: "/images/rs-sm.png",
    transferaccount: "543 *** *** 456",
    medium: "Neteller",
    date: "04/20/2029",
    money: 96234.79,
    status: PaymentStatus.Successful,
    time: "10:20 PM",
  },
  {
    id: 47,
    account: "901 *** *** 234",
    icon: "/images/uk-sm.png",
    transferaccount: "876 *** *** 567",
    medium: "Square",
    date: "04/21/2029",
    money: 4312.09,
    status: PaymentStatus.Cancelled,
    time: "07:40 AM",
  },
  {
    id: 48,
    account: "234 *** *** 567",
    icon: "/images/usa-sm.png",
    transferaccount: "109 *** *** 890",
    medium: "Venmo",
    date: "04/22/2029",
    money: 22897.63,
    status: PaymentStatus.Successful,
    time: "03:55 PM",
  },
  {
    id: 49,
    account: "567 *** *** 890",
    icon: "/images/rs-sm.png",
    transferaccount: "432 *** *** 123",
    medium: "Google Pay",
    date: "04/23/2029",
    money: 50473.15,
    status: PaymentStatus.Successful,
    time: "11:10 AM",
  },
  {
    id: 50,
    account: "890 *** *** 123",
    icon: "/images/uk-sm.png",
    transferaccount: "765 *** *** 456",
    medium: "Apple Pay",
    date: "04/24/2029",
    money: 41687.24,
    status: PaymentStatus.Successful,
    time: "09:05 PM",
  },
];

const sortOptions = ["Recent", "Name", "Amount"];

const RecentPayment = () => {
  const [tableData, setTableData] = useState<Payment[]>(transactionsData);
  const [order, setOrder] = useState<Order>("ASC");
  const [selected, setSelected] = useState(sortOptions[0]);
  const itemsPerPage = 8;
  const {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    startIndex,
    endIndex,
    totalPages,
  } = usePagination(tableData.length, itemsPerPage);

  const displayedData = tableData.slice(startIndex, endIndex + 1);

  const sortData: SortDataFunction = (col) => {
    const [parentCol, childCol] = col.split(".");

    if (order === "ASC") {
      const sorted = [...tableData].sort((a: any, b: any) => {
        const aValue = childCol ? a[parentCol][childCol] : a[col];
        const bValue = childCol ? b[parentCol][childCol] : b[col];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.toLowerCase() > bValue.toLowerCase() ? 1 : -1;
        } else {
          return aValue > bValue ? 1 : -1;
        }
      });

      setTableData(sorted);
      setOrder("DSC");
    } else {
      const sorted = [...tableData].sort((a: any, b: any) => {
        const aValue = childCol ? a[parentCol][childCol] : a[col];
        const bValue = childCol ? b[parentCol][childCol] : b[col];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.toLowerCase() < bValue.toLowerCase() ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      setTableData(sorted);
      setOrder("ASC");
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = transactionsData.filter(
      (item) =>
        item.medium.toLowerCase().includes(searchTerm) ||
        item.account.includes(searchTerm)
    );
    setTableData(result);
  };

  return (
    <>
      <div className="box col-span-12 lg:col-span-6">
        <div className="flex justify-between items-center gap-4 flex-wrap bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
          <h4 className="h4">Recent Payments</h4>
          <div className="flex items-center gap-4 flex-wrap grow sm:justify-end">
            <SearchBar handleSearch={handleSearch} classes="bg-primary/5" />
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span>Sort By : </span>
              <Dropdown
                setSelected={setSelected}
                selected={selected}
                items={sortOptions}
                btnClass="rounded-[32px] lg:py-2.5"
                contentClass="w-full"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mb-4 lg:mb-6">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="bg-secondary1/5 dark:bg-bg3">
                <th
                  onClick={() => sortData("account")}
                  className="text-start py-5 px-6 cursor-pointer min-w-[230px]">
                  <div className="flex items-center gap-1">
                    Account Number <IconSelector size={18} />
                  </div>
                </th>
                <th
                  onClick={() => sortData("transferaccount")}
                  className="text-start py-5 min-w-[170px] cursor-pointer">
                  <div className="flex items-center gap-1">
                    Transfer Account <IconSelector size={18} />
                  </div>
                </th>
                <th
                  onClick={() => sortData("money")}
                  className="text-start py-5 min-w-[120px] cursor-pointer">
                  <div className="flex items-center gap-1">
                    Money <IconSelector size={18} />
                  </div>
                </th>
                <th
                  onClick={() => sortData("medium")}
                  className="text-start py-5 min-w-[130px] cursor-pointer">
                  <div className="flex items-center gap-1">
                    Medium <IconSelector size={18} />
                  </div>
                </th>
                <th className="text-start py-5 min-w-[130px]">Date</th>
                <th className="text-start py-5 min-w-[100px]">Time</th>
                <th
                  onClick={() => sortData("status")}
                  className="text-start py-5 min-w-[130px] cursor-pointer">
                  <div className="flex items-center gap-1">
                    Status <IconSelector size={18} />
                  </div>
                </th>
                <th className="text-center p-5 ">PDF</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map(
                (
                  {
                    icon,
                    account,
                    date,
                    medium,
                    time,
                    transferaccount,
                    money,
                    id,
                    status,
                  },
                  index
                ) => (
                  <tr
                    key={id}
                    className="hover:bg-primary/5 dark:hover:bg-bg3 duration-300 border-b border-n30 dark:border-n500 first:border-t">
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
                          <p className="font-medium mb-1">{account}</p>
                          <span className="text-xs">Account Number</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">{transferaccount}</td>
                    <td className="py-3">${money.toLocaleString()}</td>
                    <td className="py-3">{medium}</td>
                    <td className="py-3">{date}</td>
                    <td className="py-3">{time}</td>
                    <td className="py-3">
                      <span
                        className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                          status === PaymentStatus.Successful &&
                          "bg-primary/10 dark:bg-bg3 text-primary"
                        } ${
                          status === PaymentStatus.Cancelled &&
                          "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                        } ${
                          status == PaymentStatus.Pending &&
                          "bg-secondary3/10 dark:bg-bg3 text-secondary3"
                        }`}>
                        {status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex justify-center">
                        <button>
                          <i className="las la-download"></i>
                        </button>
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
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            nextPage={nextPage}
            startIndex={startIndex}
            endIndex={endIndex}
            prevPage={prevPage}
            total={tableData.length}
            goToPage={(page: number) => goToPage(page)}
          />
        )}
      </div>
    </>
  );
};

export default RecentPayment;
