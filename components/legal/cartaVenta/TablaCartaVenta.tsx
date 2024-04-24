"use client";
import Pagination from "@/components/shared/Pagination";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import { useState } from "react";
import useDropdown from "@/utils/useDropdown";
import { SalesCartData, eventsData } from "@/public/data/demoData";
import { SalesCart, SalesCartStatus } from "@/public/data/types";
import CrearCartaVenta from "./CrearCartadeVenta";

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof SalesCart) => void;

const TablaCartaVenta = () => {
    const [tableData, setTableData] = useState<SalesCart[]>(SalesCartData);
    const [order, setOrder] = useState<Order>("ASC");
    const { open, toggleOpen } = useDropdown();
    const itemsPerPageOptions = [15, 30, 50, 100]; // Opciones disponibles de cantidad de registros por página
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]); // Cantidad inicial de registros por página

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

    return (
        <div className="box col-span-12 lg:col-span-6 min-h-full">
            <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
                <h4 className="h4">Historial cartas de venta</h4>
                <button onClick={toggleOpen} className="btn shrink-0">
                    Solicitar carta de venta
                </button>
            </div>
            <div className="overflow-x-auto mb-4 lg:mb-6">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="bg-secondary1/5 dark:bg-bg3">
                            <th
                                onClick={() => sortData("idEvent")}
                                className="text-start py-5 px-6 cursor-pointer min-w-[250px]">
                                <div className="flex items-center gap-1">
                                    Evento <IconSelector size={18} />
                                </div>
                            </th>
                            <th
                                onClick={() => sortData("createDate")}
                                className="text-start py-5 min-w-[120px] cursor-pointer">
                                <div className="flex items-center gap-1">
                                    Fecha <IconSelector size={18} />
                                </div>
                            </th>
                            <th
                                onClick={() => sortData("status")}
                                className="text-start py-5 cursor-pointer">
                                <div className="flex items-center gap-1">
                                    Estatus <IconSelector size={18} />
                                </div>
                            </th>
                            <th className="text-center p-5 ">Descargar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map(({ id, idEvent, createDate, urlSalesCart, status }, index) => {
                            // Buscamos el evento correspondiente en eventsData
                            const eventIndex = eventsData.findIndex(event => event.id === idEvent);
                            const event = eventIndex !== -1 ? eventsData[eventIndex] : null;

                            return (
                                <tr
                                    key={id}
                                    className="hover:bg-primary/5 dark:hover:bg-bg3 duration-500 border-b border-n30 dark:border-n500 first:border-t"
                                >
                                    <td className="py-5 px-6">
                                        <div className="flex items-center gap-3">
                                            {/* <i className="las la-file text-primary"></i> */}
                                            📜
                                            {/* Mostramos el nombre del evento si se encontró, de lo contrario, mostramos el idEvent */}
                                            <span className="font-medium">
                                                {event && urlSalesCart ? (
                                                    <a href={urlSalesCart} className="hover:underline" target="_blank" rel="noopener noreferrer">{event.EventName}</a>
                                                ) : (
                                                    idEvent
                                                )}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-5">
                                        <p className="font-medium">
                                            {createDate.toLocaleDateString()}{' '}
                                            <span className="text-xs">{createDate?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </p>
                                    </td>
                                    <td className="py-5">
                                        <span
                                            className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${status === SalesCartStatus.Emitida &&
                                                "bg-primary/10 dark:bg-bg3 text-primary"
                                                } ${status === SalesCartStatus.Procesando &&
                                                "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                                                }}`}>
                                            {status}
                                        </span>
                                    </td>
                                    <td className="py-5">
                                        <div className="flex justify-center">
                                            {urlSalesCart && (
                                                <a href={urlSalesCart} target="_blank" rel="noopener noreferrer">
                                                    <i className="las la-download hover:text-primary cursor-pointer"></i>
                                                </a>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {tableData.length < 1 && (
                    <div className="text-center py-10">
                        <div className="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
                            <div className="px-5 lg:px-14 xl:px-24 mb-5">
                                <i className="las text-primary la-search text-7xl"></i>
                            </div>
                            <h3 className="h3 mb-3 lg:mb-6">No hay cartas de venta</h3>
                            <p>
                                Solicita una carta de venta de tus eventos
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
                    itemsPerPageOptions={itemsPerPageOptions}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                />
            )}
            <CrearCartaVenta open={open} toggleOpen={toggleOpen} />
        </div>
    );
};

export default TablaCartaVenta;
