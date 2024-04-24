"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { eventsData } from "@/public/data/demoData";

// Aquí se muestran los eventos, con la fecha del evento y la cantidad que generaron, para ello el evento debe estar activo o ya concluído y se debe ordenar por fecha de publicación

const transactionsData = eventsData.map((event) => ({
  ...event, // Include all existing properties from the event object
  Sales: event.Sales !== null ? event.Sales : 0, // Set Sales to 0 if it's null
  Status: event.Status === "Activo" || event.Status === "Finalizado" ? event.Status : undefined, // Only include Active or Finalized statuses
}));

transactionsData.sort((a, b) => (typeof a.Sales === "number" && typeof b.Sales === "number") ? (b.Sales - a.Sales) : 0); // Sort by Sales descending, only if both are numbers

type Transaction = {
  EventName: string;
  Sales: number;
};

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;
const TransactionAccount = () => {
  const [tableData, setTableData] = useState<Transaction[]>(transactionsData);
  const [order, setOrder] = useState<Order>("ASC");

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
  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Eventos por cantidad generada</h4>
        <OptionsHorizontal />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th
                onClick={() => sortData("EventName")}
                className="text-start py-5 px-6 cursor-pointer min-w-[280px]">
                <div className="flex items-center gap-1">
                  Evento
                  <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("Sales")}
                className="text-start py-5 px-6 w-[20%] cursor-pointer">
                <div className="flex items-center gap-1">
                  Ventas
                  <IconSelector size={18} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ EventName, Sales }) => (
              <tr key={Sales} className="even:bg-secondary1/5 dark:even:bg-bg3">
                <td className="py-2 px-6">
                  <div className="flex items-center gap-3">
                    {/* <Image
                      src={icon}
                      width={60}
                      height={40}
                      className="rounded"
                      alt="payment medium icon"
                    /> */}
                    <div>
                      <p className="font-medium mb-1">{EventName}</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-6">
                  <div>
                    <p className="font-medium">{Sales.toLocaleString("es-MX", {
                      style: "currency",
                      currency: "MXN",
                      minimumFractionDigits: 2,
                    })}</p>
                    {/* <span className="text-xs">Account Balance</span> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {tableData.length < 1 && (
          <div className="text-center py-10">
            <div className="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
              <div className="px-5 lg:px-14 xl:px-24 mb-5">
                <i className="las text-primary la-search text-7xl"></i>
              </div>
              <h3 className="h3 mb-3 lg:mb-6">Por ahora, no hay eventos</h3>
              <p>
                Parece que no pudimos encontrar ningún evento actualmente, crea un evento para visualizar información aquí.
              </p>
            </div>
          </div>
        )}
      </div>
      {tableData.length > 0 && (
        <Link
          className="text-primary font-semibold inline-flex gap-1 items-center mt-6 group"
          href="/eventos">
          Ver más {" "}
          <i className="las la-arrow-right group-hover:pl-2 duration-300"></i>
        </Link>
      )}
    </div>
  );
};

export default TransactionAccount;
