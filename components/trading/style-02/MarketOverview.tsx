"use client";
import Action from "@/components/dashboards/style-02/Action";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import StateChart from "./Chart";
enum TradingStatus {
  Successful = "Active",
  Pending = "Paused",
  Cancelled = "Cancelled",
}

type Trade = {
  id: number;
  icon1: string;
  icon2: string;
  title: string;
  amount: number;
  charge: number;
  change: number;
  process: number;
  status: TradingStatus;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Trade) => void;

const tradingData: Trade[] = [
  {
    id: 1,
    icon1: "/images/euro-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 475.22,
    charge: 11,
    status: TradingStatus.Successful,
    change: 3,
    title: "EUR/USD",
    process: 20,
  },
  {
    id: 2,
    icon1: "/images/usa-sm.png",
    icon2: "/images/jp-sm.png",
    amount: 785.22,
    charge: 13,
    status: TradingStatus.Cancelled,
    change: 25,
    title: "USD/JPY",
    process: 70,
  },
  {
    id: 3,
    icon1: "/images/euro-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 255.22,
    charge: 41,
    status: TradingStatus.Pending,
    change: -4,
    title: "EUR/USD",
    process: 45,
  },
  {
    id: 4,
    icon1: "/images/uk-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 448.22,
    charge: 17,
    status: TradingStatus.Successful,
    change: -1,
    title: "GBP/USD",
    process: 80,
  },
  {
    id: 5,
    icon1: "/images/usa-sm.png",
    icon2: "/images/rs-sm.png",
    amount: 456.22,
    charge: 29,
    status: TradingStatus.Pending,
    change: 10,
    title: "USD/RSA",
    process: 90,
  },
  {
    id: 6,
    icon1: "/images/rs-sm.png",
    icon2: "/images/euro-sm.png",
    amount: 365.22,
    charge: 36,
    status: TradingStatus.Successful,
    change: -4,
    title: "RSA/EUR",
    process: 35,
  },
  {
    id: 7,
    icon1: "/images/euro-sm.png",
    icon2: "/images/uk-sm.png",
    amount: 425.22,
    charge: 34,
    status: TradingStatus.Cancelled,
    change: -5,
    title: "EUR/GBP",
    process: 75,
  },
  {
    id: 8,
    icon2: "/images/euro-sm.png",
    icon1: "/images/usa-sm.png",
    amount: 775.22,
    charge: 32,
    status: TradingStatus.Successful,
    change: 18,
    title: "USD/EUR",
    process: 85,
  },
  {
    id: 9,
    icon1: "/images/euro-sm.png",
    icon2: "/images/rs-sm.png",
    amount: 555.22,
    charge: 36,
    status: TradingStatus.Successful,
    change: -12,
    title: "EUR/RSA",
    process: 65,
  },
  {
    id: 10,
    icon2: "/images/euro-sm.png",
    icon1: "/images/uk-sm.png",
    amount: 875.22,
    charge: 7,
    status: TradingStatus.Successful,
    change: 5,
    title: "USD/EUR",
    process: 49,
  },
  {
    id: 11,
    icon1: "/images/euro-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 335.22,
    charge: 24,
    status: TradingStatus.Successful,
    change: 3,
    title: "EUR/USD",
    process: 20,
  },
  {
    id: 12,
    icon1: "/images/usa-sm.png",
    icon2: "/images/jp-sm.png",
    amount: 225.22,
    charge: 28,
    status: TradingStatus.Cancelled,
    change: 25,
    title: "USD/JPY",
    process: 70,
  },
  {
    id: 13,
    icon1: "/images/euro-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 475.22,
    charge: 25,
    status: TradingStatus.Pending,
    change: -4,
    title: "EUR/USD",
    process: 45,
  },
  {
    id: 14,
    icon1: "/images/uk-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 875.22,
    charge: 31,
    status: TradingStatus.Successful,
    change: -1,
    title: "GBP/USD",
    process: 80,
  },
  {
    id: 15,
    icon1: "/images/euro-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 475.22,
    charge: 11,
    status: TradingStatus.Successful,
    change: 3,
    title: "EUR/USD",
    process: 20,
  },
  {
    id: 16,
    icon1: "/images/usa-sm.png",
    icon2: "/images/jp-sm.png",
    amount: 785.22,
    charge: 13,
    status: TradingStatus.Cancelled,
    change: 25,
    title: "USD/JPY",
    process: 70,
  },
  {
    id: 17,
    icon1: "/images/euro-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 255.22,
    charge: 41,
    status: TradingStatus.Pending,
    change: -4,
    title: "EUR/USD",
    process: 45,
  },
  {
    id: 18,
    icon1: "/images/uk-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 448.22,
    charge: 17,
    status: TradingStatus.Successful,
    change: -1,
    title: "GBP/USD",
    process: 80,
  },
  {
    id: 19,
    icon1: "/images/usa-sm.png",
    icon2: "/images/rs-sm.png",
    amount: 456.22,
    charge: 29,
    status: TradingStatus.Pending,
    change: 10,
    title: "USD/RSA",
    process: 90,
  },
  {
    id: 20,
    icon1: "/images/rs-sm.png",
    icon2: "/images/euro-sm.png",
    amount: 365.22,
    charge: 36,
    status: TradingStatus.Successful,
    change: -4,
    title: "RSA/EUR",
    process: 35,
  },
  {
    id: 21,
    icon1: "/images/euro-sm.png",
    icon2: "/images/uk-sm.png",
    amount: 425.22,
    charge: 34,
    status: TradingStatus.Cancelled,
    change: -5,
    title: "EUR/GBP",
    process: 75,
  },
  {
    id: 22,
    icon2: "/images/euro-sm.png",
    icon1: "/images/usa-sm.png",
    amount: 775.22,
    charge: 32,
    status: TradingStatus.Successful,
    change: 18,
    title: "USD/EUR",
    process: 85,
  },
  {
    id: 23,
    icon1: "/images/euro-sm.png",
    icon2: "/images/rs-sm.png",
    amount: 555.22,
    charge: 36,
    status: TradingStatus.Successful,
    change: -12,
    title: "EUR/RSA",
    process: 65,
  },
  {
    id: 24,
    icon2: "/images/euro-sm.png",
    icon1: "/images/uk-sm.png",
    amount: 875.22,
    charge: 7,
    status: TradingStatus.Successful,
    change: 5,
    title: "USD/EUR",
    process: 49,
  },
  {
    id: 25,
    icon1: "/images/euro-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 335.22,
    charge: 24,
    status: TradingStatus.Successful,
    change: 3,
    title: "EUR/USD",
    process: 20,
  },
  {
    id: 26,
    icon1: "/images/usa-sm.png",
    icon2: "/images/jp-sm.png",
    amount: 225.22,
    charge: 28,
    status: TradingStatus.Cancelled,
    change: 25,
    title: "USD/JPY",
    process: 70,
  },
  {
    id: 27,
    icon1: "/images/euro-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 475.22,
    charge: 25,
    status: TradingStatus.Pending,
    change: -4,
    title: "EUR/USD",
    process: 45,
  },
  {
    id: 28,
    icon1: "/images/uk-sm.png",
    icon2: "/images/usa-sm.png",
    amount: 875.22,
    charge: 31,
    status: TradingStatus.Successful,
    change: -1,
    title: "GBP/USD",
    process: 80,
  },
];
const sortOptions = ["Recent", "Name", "Amount"];

const MarketOverview = () => {
  const [tableData, setTableData] = useState<Trade[]>(tradingData);
  const [order, setOrder] = useState<Order>("ASC");
  const [selected, setSelected] = useState(sortOptions[0]);
  const itemsPerPage = 10;
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
    const result = tradingData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setTableData(result);
  };

  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex justify-between items-center gap-4 flex-wrap bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Markets Overview</h4>
        <div className="flex items-center gap-4 flex-wrap grow sm:justify-end">
          <SearchBar handleSearch={handleSearch} classes="bg-primary/5" />
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>Sort By : </span>
            <Dropdown
              setSelected={setSelected}
              selected={selected}
              items={sortOptions}
              btnClass="rounded-[32px] md:py-3"
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
                className="text-start py-5 px-6 min-w-[210px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Titile <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 min-w-[100px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Amount <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("charge")}
                className="text-start py-5 min-w-[100px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Charge <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[160px]">Highlight</th>
              <th
                onClick={() => sortData("change")}
                className="text-start py-5 min-w-[100px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Change <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="text-start py-5 min-w-[130px] cursor-pointer">
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
                { id, status, amount, change, charge, icon1, icon2, title },
                index
              ) => (
                <tr
                  key={id}
                  className="hover:bg-primary/5 dark:hover:bg-bg3 duration-300 border-b border-n30 dark:border-n500 first:border-t">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="flex shrink-0">
                        <Image
                          src={icon1}
                          width={32}
                          height={32}
                          className="rounded-full"
                          alt="payment medium icon"
                        />
                        <Image
                          src={icon2}
                          width={32}
                          height={32}
                          className="rounded-full ltr:-ml-3 rtl:-mr-3"
                          alt="payment medium icon"
                        />
                      </div>
                      <p className="font-medium mb-1">{title}</p>
                    </div>
                  </td>
                  <td className="py-4">{amount}</td>
                  <td className="py-4">{charge}%</td>
                  <td>
                    <StateChart height={50} />
                  </td>
                  <td className="py-4">
                    {change > 0 ? (
                      <span className="text-primary">+{change}</span>
                    ) : (
                      <span className="text-secondary2">{change}</span>
                    )}
                  </td>
                  <td className="py-4">
                    <span
                      className={`block text-xs text-center max-w-[100px] rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                        status === TradingStatus.Successful &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        status === TradingStatus.Cancelled &&
                        "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      } ${
                        status == TradingStatus.Pending &&
                        "bg-secondary3/10 dark:bg-bg3 text-secondary3"
                      }`}>
                      {status}
                    </span>
                  </td>
                  <td className="py-4">
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

export default MarketOverview;
