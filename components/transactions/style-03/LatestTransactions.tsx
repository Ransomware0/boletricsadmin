"use client";
import Pagination from "@/components/shared/Pagination";
import Action from "@/components/transactions/style-01/Action";
import useDropdown from "@/utils/useDropdown";
import usePagination from "@/utils/usePagination";
import Image from "next/image";
import { useState } from "react";
import DetailsModal from "../style-01/DetailsModal";
import { latestTransactions } from "../style-01/LatestTransactions";
enum TransactionStatus {
  Successful = "Successful",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

const LatestTransactions = () => {
  const [tableData, setTableData] = useState(latestTransactions);

  const itemsPerPage = 12;
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

  const { open, toggleOpen } = useDropdown();
  const onDelete = (id: number) => {
    const remained = tableData.filter((item) => item.id !== id);
    setTableData(remained);
  };
  return (
    <>
      <div className="overflow-x-auto mb-6">
        <div className="bg-n0 dark:bg-bg4 rounded-xl px-3 min-w-min">
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            style={{ borderSpacing: "0 12px" }}
            className="w-full whitespace-nowrap p-0 border-none border-separate">
            <tbody>
              {displayedData.map(
                (
                  {
                    id,
                    amount,
                    icon,
                    invoice,
                    isChecked,
                    medium,
                    status,
                    time,
                    title,
                  },
                  index
                ) => (
                  <tr key={id}>
                    <td>
                      <div className="py-5 pl-6 px-3 bg-secondary1/5 dark:bg-bg3 rounded-s-lg">
                        {id}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center py-2.5 gap-3 pr-6 min-w-[300px] px-3 bg-secondary1/5 dark:bg-bg3">
                        <Image
                          width={32}
                          height={32}
                          className="rounded-full shrink-0"
                          src={icon}
                          alt="img"
                        />
                        <div className="flex flex-col">
                          <span className="font-medium inline-block mb-1">
                            {title}
                          </span>
                          <span className="text-xs">{time}</span>
                        </div>
                      </div>
                    </td>
                    <td className="w-[15%]">
                      <div className="bg-secondary1/5 dark:bg-bg3 py-5 px-3">
                        {invoice}
                      </div>
                    </td>
                    <td className="w-[15%]">
                      <div className="bg-secondary1/5 dark:bg-bg3 py-5 px-3">
                        {medium}
                      </div>
                    </td>
                    <td className="w-[15%]">
                      <div className="bg-secondary1/5 dark:bg-bg3 py-5 px-3">
                        ${amount.toLocaleString()}
                      </div>
                    </td>
                    <td>
                      <div className="bg-secondary1/5 dark:bg-bg3 px-3 py-[13px]">
                        <span
                          className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2.5 ${
                            status == TransactionStatus.Successful &&
                            "bg-primary/10 dark:bg-bg3 text-primary"
                          } ${
                            status == TransactionStatus.Cancelled &&
                            "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                          }  ${
                            status == TransactionStatus.Pending &&
                            "bg-secondary3/10 dark:bg-bg3 text-secondary3"
                          }`}>
                          {status}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="bg-secondary1/5 dark:bg-bg3 px-3 py-5 rounded-e-xl flex justify-end pr-5">
                        <Action
                          onDelete={() => onDelete(id)}
                          showDetails={toggleOpen}
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
      </div>
      <DetailsModal open={open} toggleOpen={toggleOpen} />
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
    </>
  );
};

export default LatestTransactions;
