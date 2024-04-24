"use client";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import cn from "@/utils/cn";
import useDropdown from "@/utils/useDropdown";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import { useState } from "react";
import InvoiceModal from "../invoice-style-01/InvoiceModal";
import { invoiceData } from "../invoice-style-01/RecentInvoice";

enum InvoiceStatus {
  paid = "Paid",
  unpaid = "Unpaid",
  rejected = "Rejected",
}

type Invoice = {
  id: number;
  title: string;
  invoice: string;
  amount: number;
  rate: number;
  dueDate: string;
  time: string;
  status: InvoiceStatus;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Invoice) => void;

const sortOptions = ["Recent", "Name", "Amount"];
const filterOptions = ["All", "Paid", "Unpaid", "Rejected"];
const RecentInvoice = () => {
  const [tableData, setTableData] = useState<Invoice[]>(invoiceData);
  const [order, setOrder] = useState<Order>("ASC");
  const [selected, setSelected] = useState(sortOptions[0]);
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);
  const { open, toggleOpen } = useDropdown();
  const itemsPerPage = 9;
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
    const result = invoiceData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setTableData(result);
  };
  const handleFilter = (option: string) => {
    setActiveFilter(option);
    if (option == "All") {
      setTableData(invoiceData);
    } else {
      const result = invoiceData.filter((item) => item.status == option);
      setTableData(result);
    }
  };
  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Recent Invoice</h4>
        <div className="flex items-center max-lg:flex-wrap gap-4">
          <div className="rounded-[32px] bg-primary/5 border border-n30 dark:border-n500 flex">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleFilter(option)}
                className={cn(
                  "font-medium text-xs px-4 sm:px-5 xxxl:px-6 py-3.5",
                  {
                    "bg-primary text-n0 rounded-[32px]": option == activeFilter,
                  }
                )}>
                {option}
              </button>
            ))}
          </div>
          <SearchBar classes="bg-primary/5" handleSearch={handleSearch} />
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>Sort By : </span>
            <Dropdown
              setSelected={setSelected}
              selected={selected}
              items={sortOptions}
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
              <th
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 min-w-[300px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Title <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[100px]">Invoice</th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 min-w-[100px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Amount <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("rate")}
                className="text-start py-5 min-w-[80px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Rate <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[130px]">Due Date</th>
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
              ({ id, status, title, invoice, time, amount, dueDate, rate }) => (
                <tr key={id} className="even:bg-secondary1/5 dark:even:bg-bg3">
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
                    <span>${amount.toLocaleString()}</span>
                  </td>
                  <td className="py-5">{rate}%</td>
                  <td className="py-5">{dueDate}</td>
                  <td>{time}</td>
                  <td className="py-5">
                    <span
                      className={`block text-xs px-5 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                        status === InvoiceStatus.paid &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        status === InvoiceStatus.rejected &&
                        "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      } ${
                        status == InvoiceStatus.unpaid &&
                        "bg-secondary3/10 dark:bg-bg3 text-secondary3"
                      }`}>
                      {status}
                    </span>
                  </td>
                  <td className="py-5">
                    <div className="flex justify-center">
                      <button onClick={toggleOpen}>
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
      <InvoiceModal open={open} toggleOpen={toggleOpen} />
    </div>
  );
};

export default RecentInvoice;
