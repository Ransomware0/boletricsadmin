"use client";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import cn from "@/utils/cn";
import useDropdown from "@/utils/useDropdown";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import { useState } from "react";
import InvoiceModal from "./InvoiceModal";
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

export const invoiceData: Invoice[] = [
  {
    id: 9,
    title: "Retirement Fund",
    invoice: "#105994",
    amount: 175.54,
    dueDate: "05/22/2029",
    status: InvoiceStatus.paid,
    time: "07:55 AM",
    rate: 75,
  },
  {
    id: 10,
    title: "Emergency Savings",
    invoice: "#105995",
    amount: 455.54,
    dueDate: "11/08/2028",
    status: InvoiceStatus.paid,
    time: "09:40 PM",
    rate: 85,
  },
  {
    id: 11,
    title: "Travel Fund",
    invoice: "#105996",
    amount: 275.54,
    dueDate: "01/30/2029",
    status: InvoiceStatus.rejected,
    time: "06:10 AM",
    rate: 70,
  },
  {
    id: 12,
    title: "Healthcare Savings",
    invoice: "#105997",
    amount: 4575.54,
    dueDate: "04/12/2029",
    status: InvoiceStatus.unpaid,
    time: "02:25 PM",
    rate: 90,
  },
  {
    id: 13,
    title: "Real Estate Investment",
    invoice: "#105998",
    amount: 555.54,
    dueDate: "10/05/2028",
    status: InvoiceStatus.paid,
    time: "08:50 AM",
    rate: 100,
  },
  {
    id: 14,
    title: "Charity Fund",
    invoice: "#105999",
    amount: 411.54,
    dueDate: "07/28/2029",
    status: InvoiceStatus.rejected,
    time: "01:05 PM",
    rate: 80,
  },
  {
    id: 15,
    title: "Personal Development",
    invoice: "#106000",
    amount: 225.54,
    dueDate: "03/15/2029",
    status: InvoiceStatus.unpaid,
    time: "11:35 AM",
    rate: 95,
  },
  {
    id: 16,
    title: "Rainy Day Fund",
    invoice: "#106001",
    amount: 525.54,
    dueDate: "09/18/2028",
    status: InvoiceStatus.paid,
    time: "04:20 AM",
    rate: 100,
  },
  {
    id: 17,
    title: "Future Investment",
    invoice: "#106002",
    amount: 755.54,
    dueDate: "06/05/2029",
    status: InvoiceStatus.rejected,
    time: "03:15 PM",
    rate: 85,
  },
  {
    id: 18,
    title: "Vacation Savings",
    invoice: "#106003",
    amount: 785.54,
    dueDate: "02/25/2029",
    status: InvoiceStatus.unpaid,
    time: "10:45 AM",
    rate: 90,
  },
  {
    id: 19,
    title: "Property Purchase",
    invoice: "#106004",
    amount: 695.54,
    dueDate: "08/08/2029",
    status: InvoiceStatus.paid,
    time: "07:30 PM",
    rate: 100,
  },
  {
    id: 20,
    title: "Hobby Fund",
    invoice: "#106005",
    amount: 4021.54,
    dueDate: "04/02/2029",
    status: InvoiceStatus.rejected,
    time: "06:40 AM",
    rate: 75,
  },
  {
    id: 21,
    title: "Family Vacation Fund",
    invoice: "#106006",
    amount: 475.54,
    dueDate: "12/10/2028",
    status: InvoiceStatus.paid,
    time: "09:20 AM",
    rate: 80,
  },
  {
    id: 22,
    title: "Children's Education Savings",
    invoice: "#106007",
    amount: 485.54,
    dueDate: "05/05/2029",
    status: InvoiceStatus.rejected,
    time: "02:50 PM",
    rate: 90,
  },
  {
    id: 23,
    title: "Technology Upgrade Fund",
    invoice: "#106008",
    amount: 250.54,
    dueDate: "01/20/2029",
    status: InvoiceStatus.unpaid,
    time: "10:15 AM",
    rate: 100,
  },
  {
    id: 24,
    title: "Art and Culture Sponsorship",
    invoice: "#106009",
    amount: 5012.54,
    dueDate: "07/03/2029",
    status: InvoiceStatus.paid,
    time: "08:30 PM",
    rate: 85,
  },
  {
    id: 25,
    title: "Green Energy Investment",
    invoice: "#106010",
    amount: 4715.54,
    dueDate: "03/28/2029",
    status: InvoiceStatus.rejected,
    time: "11:10 AM",
    rate: 95,
  },
  {
    id: 26,
    title: "Fitness and Wellness Fund",
    invoice: "#106011",
    amount: 4755.54,
    dueDate: "09/15/2028",
    status: InvoiceStatus.unpaid,
    time: "04:40 PM",
    rate: 100,
  },
  {
    id: 27,
    title: "Social Responsibility Donation",
    invoice: "#106012",
    amount: 4765.54,
    dueDate: "06/08/2029",
    status: InvoiceStatus.paid,
    time: "01:00 PM",
    rate: 75,
  },
  {
    id: 28,
    title: "Personal Project Funding",
    invoice: "#106013",
    amount: 4725.54,
    dueDate: "02/22/2029",
    status: InvoiceStatus.rejected,
    time: "09:45 AM",
    rate: 85,
  },
  {
    id: 29,
    title: "Home Renovation Budget",
    invoice: "#106014",
    amount: 4785.54,
    dueDate: "10/12/2029",
    status: InvoiceStatus.unpaid,
    time: "03:35 PM",
    rate: 90,
  },
  {
    id: 30,
    title: "Philanthropy Fund",
    invoice: "#106015",
    amount: 495.54,
    dueDate: "07/05/2029",
    status: InvoiceStatus.paid,
    time: "02:25 AM",
    rate: 100,
  },
  {
    id: 31,
    title: "Career Development Investment",
    invoice: "#106016",
    amount: 4035.54,
    dueDate: "04/18/2029",
    status: InvoiceStatus.rejected,
    time: "07:15 AM",
    rate: 90,
  },
  {
    id: 32,
    title: "Community Garden Project",
    invoice: "#106017",
    amount: 425.54,
    dueDate: "11/30/2028",
    status: InvoiceStatus.unpaid,
    time: "05:55 PM",
    rate: 80,
  },
  {
    id: 33,
    title: "Music Education Support",
    invoice: "#106018",
    amount: 461.54,
    dueDate: "01/25/2029",
    status: InvoiceStatus.paid,
    time: "11:30 AM",
    rate: 100,
  },
  {
    id: 34,
    title: "Green Technology Research Fund",
    invoice: "#106019",
    amount: 435.54,
    dueDate: "08/10/2029",
    status: InvoiceStatus.rejected,
    time: "06:20 AM",
    rate: 85,
  },
  {
    id: 35,
    title: "Animal Welfare Donation",
    invoice: "#106020",
    amount: 355.54,
    dueDate: "03/05/2029",
    status: InvoiceStatus.unpaid,
    time: "02:10 PM",
    rate: 95,
  },
];
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
    <div className="box">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Recent Invoice</h4>
        <div className="flex items-center max-lg:flex-wrap gap-4">
          <SearchBar classes="bg-primary/5" handleSearch={handleSearch} />
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
                className="text-start py-5 px-6 min-w-[230px] cursor-pointer">
                <div className="flex items-center gap-1">
                  Title <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[130px]">Invoice</th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 min-w-[130px] cursor-pointer">
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
              (
                { id, status, title, invoice, time, amount, dueDate, rate },
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
