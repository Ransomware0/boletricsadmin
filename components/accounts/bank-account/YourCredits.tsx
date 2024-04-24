"use client";
import Action from "@/components/dashboards/style-02/Action";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";

import SearchBar from "@/components/shared/SearchBar";
import cn from "@/utils/cn";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

enum TransactionStatus {
  Active = "Active",
  Paused = "Paused",
  Cancelled = "Cancelled",
}

type Credit = {
  id: number;
  title: string;
  cardImg: string;
  rate: number;
  balance: number;
  interest: number;
  status: TransactionStatus;
  isChecked: boolean;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Credit) => void;

const CreditsData: Credit[] = [
  {
    id: 1,
    title: "John Snow - Metal",
    cardImg: "/images/card-sm-1.png",
    rate: 14,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 2,
    title: "John Snow - Virtual",
    cardImg: "/images/card-sm-2.png",
    rate: 24,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Cancelled,
    isChecked: false,
  },
  {
    id: 3,
    title: "John Kobir - Metal",
    cardImg: "/images/card-sm-3.png",
    rate: 15,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Paused,
    isChecked: false,
  },
  {
    id: 4,
    title: "John Cena - Metal",
    cardImg: "/images/card-sm-4.png",
    rate: 19,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 5,
    title: "John Cena - Virtual",
    cardImg: "/images/card-sm-5.png",
    rate: 42,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Paused,
    isChecked: false,
  },
  {
    id: 6,
    title: "Snow White - Metal",
    cardImg: "/images/card-sm-6.png",
    rate: 32,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 7,
    title: "Snow White- Virtual",
    cardImg: "/images/card-sm-7.png",
    rate: 40,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Cancelled,
    isChecked: false,
  },
  {
    id: 8,
    title: "John Shanto - Metal",
    cardImg: "/images/card-sm-8.png",
    rate: 25,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 9,
    title: "Evan You - Metal",
    cardImg: "/images/card-sm-4.png",
    rate: 19,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 10,
    title: "Rahul Cina - Virtual",
    cardImg: "/images/card-sm-5.png",
    rate: 42,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Paused,
    isChecked: false,
  },
  {
    id: 11,
    title: "Kabir Basu - Metal",
    cardImg: "/images/card-sm-1.png",
    rate: 14,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 12,
    title: "Babul Beg - Virtual",
    cardImg: "/images/card-sm-2.png",
    rate: 24,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Cancelled,
    isChecked: false,
  },
  {
    id: 13,
    title: "Jafa Iqbal - Metal",
    cardImg: "/images/card-sm-3.png",
    rate: 15,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Paused,
    isChecked: false,
  },
  {
    id: 14,
    title: "Jafor BP - Metal",
    cardImg: "/images/card-sm-4.png",
    rate: 19,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 15,
    title: "Taylor Otwel - Virtual",
    cardImg: "/images/card-sm-5.png",
    rate: 42,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Paused,
    isChecked: false,
  },
  {
    id: 16,
    title: "Diego Maradona - Metal",
    cardImg: "/images/card-sm-6.png",
    rate: 32,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 17,
    title: "Lionel Messi- Virtual",
    cardImg: "/images/card-sm-7.png",
    rate: 40,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Cancelled,
    isChecked: false,
  },
  {
    id: 18,
    title: "John Modi - Metal",
    cardImg: "/images/card-sm-8.png",
    rate: 25,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 19,
    title: "John Wales - Metal",
    cardImg: "/images/card-sm-4.png",
    rate: 19,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 20,
    title: "William Ken - Virtual",
    cardImg: "/images/card-sm-5.png",
    rate: 42,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Paused,
    isChecked: false,
  },
  {
    id: 21,
    title: "Watson trait- Virtual",
    cardImg: "/images/card-sm-7.png",
    rate: 40,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Cancelled,
    isChecked: false,
  },
  {
    id: 22,
    title: "Andrew Tate - Metal",
    cardImg: "/images/card-sm-8.png",
    rate: 25,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
  {
    id: 23,
    title: "Daniel Trate - Metal",
    cardImg: "/images/card-sm-4.png",
    rate: 19,
    balance: 953254,
    interest: 25415,
    status: TransactionStatus.Active,
    isChecked: false,
  },
];
const options = ["Recent", "Name", "Amount"];
const YourCredits = () => {
  const [tableData, setTableData] = useState(CreditsData);
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
    const result = CreditsData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTableData(result);
  };
  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Your Credits</h4>
        <div className="flex flex-wrap items-center gap-4 grow sm:justify-end">
          <SearchBar handleSearch={handleSearch} classes="bg-primary/5" />
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>Sort By : </span>
            <Dropdown
              setSelected={setSelected}
              selected={selected}
              items={options}
              btnClass="rounded-[32px] bg-primary/5 md:py-2.5"
              contentClass="w-full"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-4 lg:mb-6">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th className="text-start w-16 px-6">
                <input
                  name="allSelect"
                  type="checkbox"
                  onChange={handleSelect}
                  checked={
                    tableData.length > 0 &&
                    tableData.every((item) => item.isChecked == true)
                  }
                  className="scale-125 accent-bg3"
                />
              </th>
              <th
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 cursor-pointer min-w-[330px]">
                <div className="flex items-center gap-1">
                  Title <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("rate")}
                className="text-start py-5 min-w-[80px] cursor-pointer">
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
                onClick={() => sortData("status")}
                className="text-start py-5 min-w-[100px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Status <IconSelector size={18} />
                </div>
              </th>
              <th className="text-center p-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map(
              (
                { title, status, isChecked, balance, cardImg, interest, rate },
                index
              ) => (
                <tr
                  key={title}
                  className={cn(
                    "border-b first:border-t border-n30 dark:border-n500",
                    { "bg-primary/5 dark:bg-bg3": isChecked }
                  )}>
                  <td className="text-start px-6">
                    <input
                      type="checkbox"
                      className="scale-125 accent-bg3"
                      checked={isChecked}
                      onChange={handleSelect}
                      name={title}
                    />
                  </td>
                  <td className="py-2 px-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={cardImg}
                        width={60}
                        height={40}
                        className="rounded-sm"
                        alt="payment medium icon"
                      />
                      <div>
                        <p className="font-medium mb-1">{title}</p>
                        <span className="text-xs">**4291 - Exp: 12/26</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="font-medium mb-1">{rate}%</p>
                      <span className="text-xs">Rate</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="font-medium mb-1">
                        ${balance.toLocaleString()}
                      </p>
                      <span className="text-xs">Account Balance</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p className="font-medium mb-1">
                        ${interest.toLocaleString()}
                      </p>
                      <span className="text-xs">Account Interest</span>
                    </div>
                  </td>
                  <td className="py-2">
                    <span
                      className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                        status === TransactionStatus.Active &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        status === TransactionStatus.Cancelled &&
                        "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      } ${
                        status == TransactionStatus.Paused &&
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
  );
};

export default YourCredits;
