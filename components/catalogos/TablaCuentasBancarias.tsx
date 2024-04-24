"use client";
import Pagination from "@/components/shared/Pagination";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import { useState } from "react";
import { AccountsBank, AccountsBankStatus } from "@/public/data/types";
import { AccountsBankData } from "@/public/data/demoData";
import Action from "./Action";
import useDropdown from "@/utils/useDropdown";
import CrearCuentaBancaria from "./CrearCuentaBancaria";

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof AccountsBank) => void;

const TablaCuentasBancarias = () => {
    const [tableData, setTableData] = useState<AccountsBank[]>(AccountsBankData);
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
        <div className="box col-span-12 lg:col-span-6">
            <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
                <h4 className="h4">Cuentas origen</h4>
                <button onClick={toggleOpen} className="btn shrink-0">
                    Agregar cuenta
                </button>
            </div>
            <div className="overflow-x-auto mb-4 lg:mb-6">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="bg-secondary1/5 dark:bg-bg3">
                            <th
                                onClick={() => sortData("name")}
                                className="text-start py-5 px-6 cursor-pointer min-w-[250px]">
                                <div className="flex items-center gap-1">
                                    Nombre <IconSelector size={18} />
                                </div>
                            </th>
                            <th
                                onClick={() => sortData("accountNumber")}
                                className="text-start py-5 min-w-[120px] cursor-pointer">
                                <div className="flex items-center gap-1">
                                    No. Cuenta <IconSelector size={18} />
                                </div>
                            </th>
                            <th
                                onClick={() => sortData("CLABE")}
                                className="text-start py-5 min-w-[130px] cursor-pointer">
                                <div className="flex items-center gap-1">
                                    Clabe <IconSelector size={18} />
                                </div>
                            </th>
                            <th
                                onClick={() => sortData("bank")}
                                className="text-start py-5 cursor-pointer">
                                <div className="flex items-center gap-1">
                                    Banco <IconSelector size={18} />
                                </div>
                            </th>
                            <th
                                onClick={() => sortData("status")}
                                className="text-start py-5 cursor-pointer">
                                <div className="flex items-center gap-1">
                                    Estatus <IconSelector size={18} />
                                </div>
                            </th>
                            <th className="text-center p-5 ">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map(
                            (
                                { id, name, accountNumber, CLABE, bank, status },
                                index
                            ) => (
                                <tr
                                    key={id}
                                    className="hover:bg-primary/5 dark:hover:bg-bg3 duration-500 border-b border-n30 dark:border-n500 first:border-t">
                                    <td className="py-5 px-6">
                                        <div className="flex items-center gap-3">
                                            💳
                                            <span className="font-medium">{name}</span>
                                        </div>
                                    </td>
                                    <td className="py-5">
                                        <p className="font-medium">{accountNumber}</p>
                                    </td>
                                    <td className="py-5">
                                        <span>{CLABE}</span>
                                    </td>
                                    {/* <td className="py-5">{date}</td>
                                    <td className="py-5">${money.toLocaleString()}</td> */}
                                    <td>{bank}</td>
                                    <td className="py-5">
                                        <span
                                            className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${status === AccountsBankStatus.Activa &&
                                                "bg-primary/10 dark:bg-bg3 text-primary"
                                                } ${status === AccountsBankStatus.Inactiva &&
                                                "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                                                }}`}>
                                            {status}
                                        </span>
                                    </td>
                                    <td className="py-5">
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
                            <h3 className="h3 mb-3 lg:mb-6">No hay cuentas bancarias origen</h3>
                            <p>
                                Ingresa una cuenta bancaria origen.
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
            <CrearCuentaBancaria open={open} toggleOpen={toggleOpen} />
        </div>
    );
};

export default TablaCuentasBancarias;
