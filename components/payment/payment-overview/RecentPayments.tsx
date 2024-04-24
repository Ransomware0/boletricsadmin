"use client";
import Action from "@/components/dashboards/style-02/Action";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import { useState } from "react";
enum TransactionStatus {
  active = "Active",
  paused = "Paused",
  cancelled = "Cancelled",
}

type Deposit = {
  id: number;
  title: string;
  invoice: string;
  medium: string;
  date: string;
  time: string;
  money: number;
  status: TransactionStatus;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Deposit) => void;

const depositData: Deposit[] = [
  {
    id: 1,
    title: "Savings Deposit",
    invoice: "#105986",
    medium: "Paypal",
    date: "11/05/2028",
    status: TransactionStatus.active,
    time: "05:12 AM",
    money: 7000,
  },
  {
    id: 2,
    title: "Fixed Deposit",
    invoice: "#105987",
    medium: "Bank Transfer",
    date: "12/15/2028",
    status: TransactionStatus.paused,
    time: "02:45 PM",
    money: 10000,
  },
  {
    id: 3,
    title: "Term Deposit",
    invoice: "#105988",
    medium: "Credit Card",
    date: "08/20/2028",
    status: TransactionStatus.active,
    time: "10:30 AM",
    money: 5000,
  },
  {
    id: 4,
    title: "Emergency Fund",
    invoice: "#105989",
    medium: "Venmo",
    date: "03/10/2029",
    status: TransactionStatus.active,
    time: "08:00 PM",
    money: 12000,
  },
  {
    id: 5,
    title: "Holiday Savings",
    invoice: "#105990",
    medium: "Cash Deposit",
    date: "06/25/2029",
    status: TransactionStatus.paused,
    time: "01:15 PM",
    money: 8000,
  },
  {
    id: 6,
    title: "Investment Portfolio",
    invoice: "#105991",
    medium: "Wire Transfer",
    date: "02/18/2029",
    status: TransactionStatus.cancelled,
    time: "11:45 AM",
    money: 15000,
  },
  {
    id: 7,
    title: "Education Fund",
    invoice: "#105992",
    medium: "Google Pay",
    date: "09/30/2028",
    status: TransactionStatus.active,
    time: "04:30 AM",
    money: 9500,
  },
  {
    id: 8,
    title: "Home Purchase Savings",
    invoice: "#105993",
    medium: "Direct Deposit",
    date: "07/12/2029",
    status: TransactionStatus.paused,
    time: "03:20 PM",
    money: 18000,
  },
  {
    id: 9,
    title: "Education Fund",
    invoice: "#105992",
    medium: "Google Pay",
    date: "09/30/2028",
    status: TransactionStatus.active,
    time: "04:30 AM",
    money: 9500,
  },
  {
    id: 10,
    title: "Home Purchase Savings",
    invoice: "#105993",
    medium: "Direct Deposit",
    date: "07/12/2029",
    status: TransactionStatus.paused,
    time: "03:20 PM",
    money: 18000,
  },
  {
    id: 11,
    title: "Savings Deposit",
    invoice: "#105986",
    medium: "Paypal",
    date: "11/05/2028",
    status: TransactionStatus.active,
    time: "05:12 AM",
    money: 7000,
  },
  {
    id: 12,
    title: "Fixed Deposit",
    invoice: "#105987",
    medium: "Bank Transfer",
    date: "12/15/2028",
    status: TransactionStatus.paused,
    time: "02:45 PM",
    money: 10000,
  },
  {
    id: 13,
    title: "Term Deposit",
    invoice: "#105988",
    medium: "Credit Card",
    date: "08/20/2028",
    status: TransactionStatus.active,
    time: "10:30 AM",
    money: 5000,
  },
  {
    id: 14,
    title: "Emergency Fund",
    invoice: "#105989",
    medium: "Venmo",
    date: "03/10/2029",
    status: TransactionStatus.active,
    time: "08:00 PM",
    money: 12000,
  },
  {
    id: 15,
    title: "Holiday Savings",
    invoice: "#105990",
    medium: "Cash Deposit",
    date: "06/25/2029",
    status: TransactionStatus.paused,
    time: "01:15 PM",
    money: 8000,
  },
  {
    id: 16,
    title: "Investment Portfolio",
    invoice: "#105991",
    medium: "Wire Transfer",
    date: "02/18/2029",
    status: TransactionStatus.cancelled,
    time: "11:45 AM",
    money: 15000,
  },
  {
    id: 17,
    title: "Education Fund",
    invoice: "#105992",
    medium: "Google Pay",
    date: "09/30/2028",
    status: TransactionStatus.active,
    time: "04:30 AM",
    money: 9500,
  },
  {
    id: 18,
    title: "Home Purchase Savings",
    invoice: "#105993",
    medium: "Direct Deposit",
    date: "07/12/2029",
    status: TransactionStatus.paused,
    time: "03:20 PM",
    money: 18000,
  },
  {
    id: 19,
    title: "Education Fund",
    invoice: "#105992",
    medium: "Google Pay",
    date: "09/30/2028",
    status: TransactionStatus.active,
    time: "04:30 AM",
    money: 9500,
  },
  {
    id: 20,
    title: "Home Purchase Savings",
    invoice: "#105993",
    medium: "Direct Deposit",
    date: "07/12/2029",
    status: TransactionStatus.paused,
    time: "03:20 PM",
    money: 18000,
  },
];
const options = ["Recent", "Name", "Amount"];
const RecentPayments = () => {
  const [tableData, setTableData] = useState<Deposit[]>(depositData);
  const [order, setOrder] = useState<Order>("ASC");
  const [selected, setSelected] = useState(options[0]);
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
  const onDelete = (id: number) => {
    const remained = tableData.filter((item) => item.id !== id);
    setTableData(remained);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = depositData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.medium.toLowerCase().includes(searchTerm) ||
        item.status.includes(searchTerm)
    );
    setTableData(result);
  };

  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Recent Payments</h4>
        <div className="flex flex-wrap grow sm:justify-end items-center gap-4">
          <SearchBar handleSearch={handleSearch} classes="bg-primary/5" />
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>Sort By : </span>
            <Dropdown
              setSelected={setSelected}
              selected={selected}
              items={options}
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
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 cursor-pointer min-w-[250px]">
                <div className="flex items-center gap-1">
                  Title <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[100px]">Invoice</th>
              <th
                onClick={() => sortData("medium")}
                className="text-start py-5 min-w-[120px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Medium <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[130px]">Date</th>
              <th
                onClick={() => sortData("money")}
                className="text-start py-5 min-w-[130px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Money <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[130px]">Time</th>
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
            {displayedData.map(
              (
                { id, status, title, date, invoice, medium, money, time },
                index
              ) => (
                <tr
                  key={id}
                  className="hover:bg-primary/5 dark:hover:bg-bg3 duration-500 border-b border-n30 dark:border-n500 first:border-t">
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <i className="las la-file text-primary"></i>
                      <span className="font-medium">{title}</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <p className="font-medium">{invoice}</p>
                  </td>
                  <td className="py-5">
                    <span>{medium}</span>
                  </td>
                  <td className="py-5">{date}</td>
                  <td className="py-5">${money.toLocaleString()}</td>
                  <td>{time}</td>
                  <td className="py-5">
                    <span
                      className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                        status === TransactionStatus.active &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        status === TransactionStatus.cancelled &&
                        "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      } ${
                        status == TransactionStatus.paused &&
                        "bg-secondary3/10 dark:bg-bg3 text-secondary3"
                      }`}>
                      {status}
                    </span>
                  </td>
                  <td className="py-5">
                    <div className="flex justify-center">
                      <Action
                        onDelete={() => onDelete(id)}
                        fromBottom={
                          index == displayedData.length - 1 ||
                          index == displayedData.length - 2
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
  );
};

export default RecentPayments;
