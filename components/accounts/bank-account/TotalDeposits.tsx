"use client";
import Action from "@/components/dashboards/style-02/Action";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import useDropdown from "@/utils/useDropdown";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import { useState } from "react";
import AddDepositForm from "./AddDepositForm";

enum TransactionStatus {
  active = "Active",
  paused = "Paused",
  cancelled = "Cancelled",
}

type Deposit = {
  id: number;
  title: string;
  rate: number;
  balance: number;
  interest: number;
  expire: string;
  status: TransactionStatus;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Deposit) => void;

const depositData: Deposit[] = [
  {
    id: 1,
    title: "Savings Deposit",
    rate: 14,
    interest: 22542,
    expire: "11/05/2028",
    status: TransactionStatus.active,
    balance: 8547592,
  },
  {
    id: 4,
    title: "Foreign Deposit",
    rate: 34,
    interest: 2542,
    expire: "11/05/2028",
    status: TransactionStatus.active,
    balance: 584212,
  },
  {
    id: 5,
    title: "Savings Deposit",
    rate: 14,
    interest: 22542,
    expire: "11/05/2028",
    status: TransactionStatus.active,
    balance: 8547592,
  },
  {
    id: 2,
    title: "Fixed Deposit",
    rate: 58,
    interest: 28542,
    expire: "11/05/2028",
    status: TransactionStatus.paused,
    balance: 6580592,
  },
  {
    id: 3,
    title: "Market Deposit",
    rate: 24,
    interest: 2542,
    expire: "11/05/2028",
    status: TransactionStatus.cancelled,
    balance: 3251212,
  },

  {
    id: 6,
    title: "Fixed Deposit",
    rate: 58,
    interest: 28542,
    expire: "11/05/2028",
    status: TransactionStatus.paused,
    balance: 6580592,
  },
  {
    id: 7,
    title: "Market Deposit",
    rate: 24,
    interest: 2542,
    expire: "11/05/2028",
    status: TransactionStatus.cancelled,
    balance: 3251212,
  },
  {
    id: 8,
    title: "Foreign Deposit",
    rate: 34,
    interest: 2542,
    expire: "11/05/2028",
    status: TransactionStatus.active,
    balance: 584212,
  },
  {
    id: 9,
    title: "Market Deposit",
    rate: 24,
    interest: 2542,
    expire: "11/05/2028",
    status: TransactionStatus.cancelled,
    balance: 3251212,
  },
  {
    id: 10,
    title: "Foreign Deposit",
    rate: 34,
    interest: 2542,
    expire: "11/05/2028",
    status: TransactionStatus.active,
    balance: 584212,
  },
  {
    id: 11,
    title: "Savings Deposit",
    rate: 14,
    interest: 22542,
    expire: "11/05/2028",
    status: TransactionStatus.active,
    balance: 8547592,
  },
  {
    id: 12,
    title: "Fixed Deposit",
    rate: 58,
    interest: 28542,
    expire: "11/05/2028",
    status: TransactionStatus.paused,
    balance: 6580592,
  },
];
const options = ["Recent", "Name", "Amount"];
const TotalDeposits = () => {
  const [tableData, setTableData] = useState<Deposit[]>(depositData);
  const [order, setOrder] = useState<Order>("ASC");
  const [selected, setSelected] = useState(options[0]);
  const { open, toggleOpen } = useDropdown();

  const itemsPerPage = 4;
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
        item.expire.toLowerCase().includes(searchTerm) ||
        item.status.includes(searchTerm)
    );
    setTableData(result);
  };

  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Total Deposits</h4>
        <div className="flex grow sm:justify-end items-center flex-wrap gap-4">
          <button onClick={toggleOpen} className="btn shrink-0">
            Add Deposit
          </button>
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
                className="text-start py-5 px-6 min-w-[230px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Title <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("rate")}
                className="text-start py-5 min-w-[100px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Rate <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("balance")}
                className="text-start py-5 min-w-[200px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Account Balance <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("interest")}
                className="text-start py-5 min-w-[200px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Account Interest <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("expire")}
                className="text-start py-5 min-w-[130px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Expiry Date <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="text-start py-5 cursor-pointer min-w-[100px]">
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
                { balance, expire, id, status, interest, rate, title },
                index
              ) => (
                <tr
                  key={id}
                  className="hover:bg-primary/5 dark:hover:bg-bg3 border-b border-n30 dark:border-n500 first:border-t">
                  <td className="py-2 px-6">
                    <div className="flex items-center gap-3">
                      <i className="las la-wallet text-primary"></i>
                      <span className="font-medium">{title}</span>
                    </div>
                  </td>
                  <td className="py-2">
                    <div>
                      <p className="font-medium">{rate}%</p>
                      <span className="text-xs">Rate</span>
                    </div>
                  </td>
                  <td className="py-2">
                    <div>
                      <p className="font-medium">{balance.toLocaleString()}</p>
                      <span className="text-xs">Account Balance</span>
                    </div>
                  </td>
                  <td className="py-2">
                    <div>
                      <p className="font-medium">{interest.toLocaleString()}</p>
                      <span className="text-xs">Account Interest</span>
                    </div>
                  </td>
                  <td>{expire}</td>
                  <td className="py-2">
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
                  <td className="py-2">
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
      {tableData.length > 1 && (
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
      <AddDepositForm open={open} toggleOpen={toggleOpen} />
    </div>
  );
};

export default TotalDeposits;
