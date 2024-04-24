"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Disbursements, DisbursementsSstatus, Event } from "@/public/data/types";
import { eventsData, DisbursementsData } from "@/public/data/demoData";

const transactionsData = DisbursementsData.map((disbursement) => {
  const matchingEvent = eventsData.find((event) => event.id === disbursement.idEvent);

  // Convertir la fecha de dispersión a un objeto Date
  const dateDisbursements = new Date(disbursement.dateDisbursements);

  // Extract the last four digits of the CLABE using slice() and pad with asterisks
  const maskedCLABE = `**${disbursement.CLABE.slice(-4)}`;

  return {
    EventName: matchingEvent ? matchingEvent.EventName : "No hay evento",
    Logo: matchingEvent ? matchingEvent.Logo : "No hay logo",
    dateDisbursements, // Now dateDisbursements is a Date object
    CLABE: maskedCLABE,
    method: disbursement.method,
    status: disbursement.status,
    amount: disbursement.amount,
  };
});

// Ordenar los datos por fecha en orden descendente (del más reciente al más antiguo)
transactionsData.sort((a, b) => b.dateDisbursements.getTime() - a.dateDisbursements.getTime());


type Transaction = {
  EventName: string;
  Logo: string;
  dateDisbursements: Date;
  CLABE: string;
  method: string;
  status: string;
  amount: number;
};

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;

const LatestTransactions = () => {
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
      <div className="flex flex-wrap gap-4 justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Últimas dispersiones</h4>
        <OptionsHorizontal />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-normal">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th
                onClick={() => sortData("EventName")}
                className="text-start py-5 px-6 cursor-pointer min-w-[300px] flex items-center gap-1"
              >
                Evento <IconSelector size={18} />
              </th>
              <th
                onClick={() => sortData("method")}
                className="text-start py-5 px-6 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Método <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="text-start py-5 px-6 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Estatus <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 px-6 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Cantidad <IconSelector size={18} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ EventName, amount, Logo, CLABE, method, status, dateDisbursements }) => (
              <tr key={EventName} className="even:bg-secondary1/5 dark:even:bg-bg3">
                <td className="py-2 px-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src={Logo}
                      width={32}
                      height={32}
                      className="rounded-full"
                      alt="payment medium icon"
                    />
                    <div>
                      <p className="font-medium mb-1">{EventName}</p>
                      <span className="text-xs">Pago: {dateDisbursements.toLocaleString('es-MX')} - {CLABE}</span>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-6">{method}</td>
                <td className="py-2 px-6">
                  <span
                    className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${status === DisbursementsSstatus.Pagado &&
                      "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${status === DisbursementsSstatus.Error &&
                      "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      } ${status == DisbursementsSstatus.Procesando &&
                      "bg-secondary3/10 dark:bg-bg3 text-secondary3"
                      }`}>
                    {status}
                  </span>
                </td>
                <td className="py-2 px-6">
                  {amount.toLocaleString("es-MX", {
                    style: "currency",
                    currency: "MXN",
                    minimumFractionDigits: 2,
                  })}
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
              <h3 className="h3 mb-3 lg:mb-6">Por ahora, no hay dispersiones</h3>
              <p>
                Parece que no pudimos encontrar ninguna dispersión actualmente, crea un evento para visualizar información aquí.
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Va hacia donde el historial de dispersiones */}
      {tableData.length > 0 && (
        <Link
          className="text-primary font-semibold inline-flex gap-1 items-center mt-6 group"
          href="/dispersiones">
          Ver más {" "}
          <i className="las la-arrow-right group-hover:pl-2 duration-300"></i>
        </Link>
      )}
    </div>
  );
};

export default LatestTransactions;
