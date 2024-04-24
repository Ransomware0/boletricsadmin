"use client";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
enum TransactionStatus {
  Successful = "Successful",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

type Transaction = {
  id: number;
  account: string;
  icon: string;
  currency: {
    short: string;
    long: string;
  };
  money: number;
  balance: number;
  invoice: string;
  status: TransactionStatus;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;

const transactionsData: Transaction[] = [
  {
    id: 1,
    account: "999 *** *** 123",
    icon: "/images/usa-sm.png",
    invoice: "#526589",
    currency: {
      long: "US Dollar",
      short: "USD",
    },
    money: 14516.21,
    status: TransactionStatus.Successful,
    balance: 1121212,
  },
  {
    id: 2,
    account: "999 *** *** 127",
    icon: "/images/euro-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 12246.21,
    status: TransactionStatus.Cancelled,
    balance: 8921212,
  },
  {
    id: 3,
    account: "874 *** *** 870",
    icon: "/images/jp-sm.png",
    invoice: "#526589",
    currency: {
      long: "Japanese Yen",
      short: "JPN",
    },
    money: 14546.21,
    status: TransactionStatus.Pending,
    balance: 2141212,
  },
  {
    id: 4,
    account: "874 *** *** 975",
    icon: "/images/uk-sm.png",
    invoice: "#526589",
    currency: {
      long: "British Pound",
      short: "GBP",
    },
    money: 17846.21,
    status: TransactionStatus.Successful,
    balance: 2521212,
  },
  {
    id: 5,
    account: "874 *** *** 815",
    icon: "/images/cn-sm.png",
    invoice: "#526589",
    currency: {
      long: "Chinese Yuan",
      short: "CNY",
    },
    money: 2546.21,
    status: TransactionStatus.Pending,
    balance: 554100,
  },
  {
    id: 6,
    account: "874 *** *** 885",
    icon: "/images/rs-sm.png",
    invoice: "#526589",
    currency: {
      long: "Russian Ruble",
      short: "RUB",
    },
    money: 87546.21,
    status: TransactionStatus.Successful,
    balance: 1420012,
  },
  {
    id: 7,
    account: "874 *** *** 475",
    icon: "/images/uk-sm.png",
    invoice: "#526589",
    currency: {
      long: "US Dollar",
      short: "USD",
    },
    money: 7786.21,
    status: TransactionStatus.Cancelled,
    balance: 782332,
  },
  {
    id: 8,
    account: "874 *** *** 445",
    icon: "/images/usa-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 2446.21,
    status: TransactionStatus.Successful,
    balance: 8521452,
  },
  {
    id: 9,
    account: "874 *** *** 005",
    icon: "/images/rs-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 4746.21,
    status: TransactionStatus.Successful,
    balance: 85020124,
  },
  {
    id: 10,
    account: "874 *** *** 685",
    icon: "/images/uk-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 4746.21,
    status: TransactionStatus.Successful,
    balance: 8501212,
  },
  {
    id: 11,
    account: "999 *** *** 123",
    icon: "/images/usa-sm.png",
    invoice: "#526589",
    currency: {
      long: "US Dollar",
      short: "USD",
    },
    money: 14516.21,
    status: TransactionStatus.Successful,
    balance: 1121212,
  },
  {
    id: 12,
    account: "999 *** *** 127",
    icon: "/images/euro-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 12246.21,
    status: TransactionStatus.Cancelled,
    balance: 8921212,
  },
  {
    id: 13,
    account: "874 *** *** 870",
    icon: "/images/jp-sm.png",
    invoice: "#526589",
    currency: {
      long: "Japanese Yen",
      short: "JPN",
    },
    money: 14546.21,
    status: TransactionStatus.Pending,
    balance: 2141212,
  },
  {
    id: 14,
    account: "874 *** *** 975",
    icon: "/images/uk-sm.png",
    invoice: "#526589",
    currency: {
      long: "British Pound",
      short: "GBP",
    },
    money: 17846.21,
    status: TransactionStatus.Successful,
    balance: 2521212,
  },
  {
    id: 15,
    account: "874 *** *** 815",
    icon: "/images/cn-sm.png",
    invoice: "#526589",
    currency: {
      long: "Chinese Yuan",
      short: "CNY",
    },
    money: 2546.21,
    status: TransactionStatus.Pending,
    balance: 554100,
  },
  {
    id: 16,
    account: "874 *** *** 885",
    icon: "/images/rs-sm.png",
    invoice: "#526589",
    currency: {
      long: "Russian Ruble",
      short: "RUB",
    },
    money: 87546.21,
    status: TransactionStatus.Successful,
    balance: 1420012,
  },
  {
    id: 17,
    account: "874 *** *** 475",
    icon: "/images/uk-sm.png",
    invoice: "#526589",
    currency: {
      long: "US Dollar",
      short: "USD",
    },
    money: 7786.21,
    status: TransactionStatus.Cancelled,
    balance: 782332,
  },
  {
    id: 18,
    account: "874 *** *** 445",
    icon: "/images/usa-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 2446.21,
    status: TransactionStatus.Successful,
    balance: 8521452,
  },
  {
    id: 19,
    account: "874 *** *** 005",
    icon: "/images/rs-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 4746.21,
    status: TransactionStatus.Successful,
    balance: 85020124,
  },
  {
    id: 20,
    account: "874 *** *** 685",
    icon: "/images/uk-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 4746.21,
    status: TransactionStatus.Successful,
    balance: 8501212,
  },
  {
    id: 21,
    account: "874 *** *** 005",
    icon: "/images/rs-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 4746.21,
    status: TransactionStatus.Successful,
    balance: 85020124,
  },
  {
    id: 22,
    account: "874 *** *** 005",
    icon: "/images/rs-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 4746.21,
    status: TransactionStatus.Successful,
    balance: 85020124,
  },
  {
    id: 23,
    account: "874 *** *** 005",
    icon: "/images/rs-sm.png",
    invoice: "#526589",
    currency: {
      long: "Euro",
      short: "EUR",
    },
    money: 4746.21,
    status: TransactionStatus.Successful,
    balance: 85020124,
  },
];
const sortOptions = ["Recent", "Name", "Amount"];

const PaymentAccount = () => {
  const [tableData, setTableData] = useState<Transaction[]>(transactionsData);
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
        item.currency.long.toLowerCase().includes(searchTerm) ||
        item.account.includes(searchTerm)
    );
    setTableData(result);
  };

  return (
    <>
      <div className="box col-span-12 lg:col-span-6">
        <div className="flex justify-between items-center gap-4 flex-wrap bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
          <h4 className="h4">Payment Account</h4>
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
                  className="text-start py-5 px-6 min-w-[230px] cursor-pointer">
                  <div className="flex items-center gap-1">
                    Account Number <IconSelector size={18} />
                  </div>
                </th>
                <th
                  onClick={() => sortData("currency")}
                  className="text-start py-5 min-w-[100px] cursor-pointer">
                  <div className="flex items-center gap-1">
                    Currency <IconSelector size={18} />
                  </div>
                </th>
                <th
                  onClick={() => sortData("balance")}
                  className="text-start py-5 min-w-[130px] cursor-pointer">
                  <div className="flex items-center gap-1">
                    Account Balance <IconSelector size={18} />
                  </div>
                </th>
                <th
                  onClick={() => sortData("money")}
                  className="text-start py-5 min-w-[120px] cursor-pointer">
                  <div className="flex items-center gap-1">
                    Money <IconSelector size={18} />
                  </div>
                </th>
                <th className="text-start py-5 min-w-[120px] cursor-pointer">
                  Invoice
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
              {displayedData.map(
                (
                  {
                    icon,
                    account,
                    balance,
                    invoice,
                    money,
                    currency,
                    id,
                    status,
                  },
                  index
                ) => (
                  <tr
                    key={id}
                    className="even:bg-secondary1/5 dark:even:bg-bg3">
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
                    <td className="py-2">
                      <div>
                        <p className="font-medium">{currency.short}</p>
                        <span className="text-xs">{currency.long}</span>
                      </div>
                    </td>
                    <td className="py-2">
                      <div>
                        <p className="font-medium">
                          ${balance.toLocaleString()}
                        </p>
                        <span className="text-xs">Account Balance</span>
                      </div>
                    </td>
                    <td className="py-2">${money.toLocaleString()}</td>
                    <td className="py-2">${invoice}</td>
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

export default PaymentAccount;
