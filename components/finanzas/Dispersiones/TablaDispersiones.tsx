"use client";
import Action from "@/components/dashboards/style-02/Action";
import DropdownDisbursements from "@/components/shared/DropdownDisbursements";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { DisbursementsSstatus } from "@/public/data/types";
import { eventsData, DisbursementsData } from "@/public/data/demoData";
import useDropdown from "@/utils/useDropdown";
import CrearDispersion from "./CrearDispersion";

const transactionsData = DisbursementsData.map((disbursement) => {
    const matchingEvent = eventsData.find((event) => event.id === disbursement.idEvent);

    // Convertir la fecha de dispersión a un objeto Date
    const dateDisbursements = disbursement.dateDisbursements !== null ? new Date(disbursement.dateDisbursements) : null;

    // Extract the last four digits of the CLABE using slice() and pad with asterisks
    const maskedCLABE = `**${disbursement.CLABE.slice(-4)}`;

    return {
        id: matchingEvent ? matchingEvent.id : 1,
        EventName: matchingEvent ? matchingEvent.EventName : "No hay evento",
        Logo: matchingEvent ? matchingEvent.Logo : "No hay logo",
        dateDisbursements: dateDisbursements, // Now dateDisbursements is a Date object
        CLABE: maskedCLABE,
        method: disbursement.method,
        status: disbursement.status,
        amount: disbursement.amount,
    };
});

// Ordenar los datos por fecha en orden descendente (del más reciente al más antiguo)
transactionsData.sort((a, b) => {
    // Verificar si alguna de las fechas es null
    if (a.dateDisbursements === null || b.dateDisbursements === null) {
        // Manejar el caso donde una de las fechas es null
        // Por ejemplo, puedes considerar que las fechas null van al final del array
        if (a.dateDisbursements === null && b.dateDisbursements === null) {
            return 0; // Ambas fechas son null, no hay diferencia
        } else if (a.dateDisbursements === null) {
            return 1; // La fecha de 'a' es null, entonces 'b' va antes
        } else {
            return -1; // La fecha de 'b' es null, entonces 'a' va antes
        }
    } else {
        // Ambas fechas son válidas, simplemente las ordenamos normalmente
        return b.dateDisbursements.getTime() - a.dateDisbursements.getTime();
    }
});

type Transaction = {
    id: number;
    EventName: string;
    Logo: string;
    dateDisbursements: Date | null;
    CLABE: string;
    method: string;
    status: string;
    amount: number;
};

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;

const sortOptionsMap: Partial<Record<keyof Transaction, string>> = {
    id: "ID",
    EventName: "Nombre",
    dateDisbursements: "Fecha de dispersión",
    CLABE: "CLABE",
    method: "Método",
    status: "Estatus",
    amount: "Cantidad"
};

const TablaDispersiones = () => {
    const [tableData, setTableData] = useState<Transaction[]>(transactionsData);
    const [order, setOrder] = useState<Order>("ASC");
    const [selected, setSelected] = useState(Object.values(sortOptionsMap)[0]);
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

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        let filteredData: Transaction[] = [];
        if (searchTerm.trim() === '') {
            // Si la cadena de búsqueda está vacía, restaura los datos originales
            filteredData = transactionsData;
        } else {
            if (selectedTab === 'all') {
                filteredData = transactionsData.filter(
                    (item) =>
                        item.EventName.toLowerCase().includes(searchTerm) ||
                        item.id.toString().toLowerCase().includes(searchTerm) ||
                        item.status.includes(searchTerm)
                );
            } else {
                filteredData = tableData.filter(
                    (item) =>
                        item.EventName.toLowerCase().includes(searchTerm) ||
                        item.id.toString().toLowerCase().includes(searchTerm) ||
                        item.status.includes(searchTerm)
                );
            }
        }
        setTableData(filteredData);
    };

    const [selectedTab, setSelectedTab] = useState('all'); // Estado para mantener el tab seleccionado

    const handleTabChange = (tab: any) => {
        setSelectedTab(tab); // Función para cambiar el tab seleccionado
        // Filtrar los eventos según la pestaña seleccionada
        if (tab === 'all') {
            setTableData(transactionsData);
        } else {
            const filteredData = transactionsData.filter(disbursement => {
                switch (tab) {
                    case 'Pagado':
                        return disbursement.status === DisbursementsSstatus.Pagado;
                    case 'Procesando':
                        return disbursement.status === DisbursementsSstatus.Procesando;
                    case 'Error':
                        return disbursement.status === DisbursementsSstatus.Error;
                    default:
                        return false;
                }
            });
            setTableData(filteredData);
        }
    };

    return (
        <>
            <div className="flex gap-4 border-b-2 border-gray-300 pb-2 mb-4">
                <button
                    onClick={() => handleTabChange("all")}
                    className={`py-2 px-4 text-sm font-semibold ${selectedTab === "all" ? "bg-primary text-white" : "text-gray-700 dark:text-gray-300 hover:dark:text-green-800"
                        } rounded-md hover:bg-primary-100 hover:text-gray-500 focus:outline-none`}
                >
                    Todas
                </button>
                <button
                    onClick={() => handleTabChange("Pagado")}
                    className={`py-2 px-4 text-sm font-semibold ${selectedTab === "Pagado" ? "bg-primary text-white" : "text-gray-700 dark:text-gray-300 hover:dark:text-green-800"
                        } rounded-md hover:bg-primary-100 hover:text-gray-500 focus:outline-none`}
                >
                    Pagado
                </button>
                <button
                    onClick={() => handleTabChange("Procesando")}
                    className={`py-2 px-4 text-sm font-semibold ${selectedTab === "Procesando" ? "bg-primary text-white" : "text-gray-700 dark:text-gray-300 hover:dark:text-green-800"
                        } rounded-md hover:bg-primary-100 hover:text-gray-500 focus:outline-none`}
                >
                    Procesando
                </button>
                <button
                    onClick={() => handleTabChange("Error")}
                    className={`py-2 px-4 text-sm font-semibold ${selectedTab === "Error" ? "bg-primary text-white" : "text-gray-700 dark:text-gray-300 hover:dark:text-green-800"
                        } rounded-md hover:bg-primary-100 hover:text-gray-500 focus:outline-none`}
                >
                    Error
                </button>
            </div>
            <div className="box col-span-12 lg:col-span-6">
                <div className="flex justify-between items-center gap-4 flex-wrap bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
                    <h4 className="h4">{selectedTab === 'all' ? 'Todas las dispersiones' : selectedTab}</h4>
                    <div className="flex items-center gap-4 flex-wrap grow sm:justify-end">
                        <button onClick={toggleOpen} className="btn shrink-0">
                            Crear dispersión
                        </button>
                        <SearchBar handleSearch={handleSearch} classes="bg-primary/5" />
                        <div className="flex items-center gap-3 whitespace-nowrap">
                            <span>Ordenar por: </span>
                            <DropdownDisbursements
                                setSelected={setSelected}
                                selected={selected}
                                items={Object.values(sortOptionsMap)}
                                btnClass="rounded-[32px] lg:py-2.5"
                                contentClass="w-full"
                                onSelectOption={(option: keyof Transaction) => {
                                    // Encuentra la clave basada en el valor seleccionado
                                    const selectedKey = Object.keys(sortOptionsMap).find(
                                        key => sortOptionsMap[key as keyof Transaction] === option
                                    ) as keyof Transaction;
                                    sortData(selectedKey);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto mb-4 lg:mb-6">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="bg-secondary1/5 dark:bg-bg3">
                                <th
                                    onClick={() => sortData("id")}
                                    className="text-start py-5 px-6 min-w-auto cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        ID <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("EventName")}
                                    className="text-start py-5 px-6 min-w-[230px] cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Evento <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("dateDisbursements")}
                                    className="text-start py-5 min-w-[130px] cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Fecha de la dispersión <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("CLABE")}
                                    className="text-start py-5 min-w-auto cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        CLABE <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("status")}
                                    className="text-start py-5 min-w-auto cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Estatus <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("amount")}
                                    className="text-start py-5 min-w-auto cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Cantidad <IconSelector size={18} />
                                    </div>
                                </th>
                                <th className="text-center p-5 ">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedData.map(
                                (
                                    {
                                        id,
                                        Logo,
                                        EventName,
                                        dateDisbursements,
                                        CLABE,
                                        status,
                                        amount
                                    },
                                    index
                                ) => {

                                    return (
                                        <tr
                                            key={index}
                                            className="even:bg-secondary1/5 dark:even:bg-bg3">
                                            <td className="py-2">
                                                <div>
                                                    <p className="font-medium text-center">
                                                        {id}
                                                    </p>
                                                </div>
                                            </td>
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
                                                        {/* <span className="text-xs">Account Number</span> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div>
                                                    <p className="font-medium">
                                                        {dateDisbursements && dateDisbursements.getTime() > 0 ? (
                                                            <>
                                                                <span>{dateDisbursements.toLocaleDateString()}</span> {/* Mostrar fecha */}
                                                                <span className="text-xs">{dateDisbursements?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                            </>
                                                        ) : (
                                                            "No realizado"
                                                        )}
                                                    </p>
                                                </div>
                                            </td>
                                            {/* <td className="py-2">
                                                <div>
                                                    <p className="font-medium">{durationInHours}</p>
                                                </div>
                                            </td> */}
                                            <td className="py-2">
                                                <div>
                                                    <p className="font-medium">{CLABE}</p>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div>
                                                    <span
                                                        className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${status === DisbursementsSstatus.Pagado &&
                                                            "bg-green-500 dark:bg-bg3 dark:text-green-500 text-white"
                                                            } ${status === DisbursementsSstatus.Pagado &&
                                                            "bg-yellow-500 dark:bg-bg3 dark:text-yellow-500 text-white"
                                                            } ${status == DisbursementsSstatus.Procesando &&
                                                            "bg-orange-500 dark:bg-bg3 dark:text-orange-500 text-white"
                                                            } ${status == DisbursementsSstatus.Error &&
                                                            "bg-red-500 dark:bg-bg3 dark:text-red-500 text-white"
                                                            }`}>
                                                        {status}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="py-2">
                                                <div>
                                                    <p className="font-medium">
                                                        ${amount?.toLocaleString()}
                                                    </p>
                                                </div>
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
                                }
                            )}
                        </tbody>
                    </table>
                    {tableData.length < 1 && (
                        <div className="text-center py-10">
                            <div className="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
                                <div className="px-5 lg:px-14 xl:px-24 mb-5">
                                    <i className="las text-primary la-search text-7xl"></i>
                                </div>
                                <h3 className="h3 mb-3 lg:mb-6">No se encontraron resultados</h3>
                                <p>
                                    Parece que no pudimos encontrar ningún resultado que coincida para tu
                                    términos de búsqueda. Pruebe con otros términos de búsqueda.
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
                        itemsPerPageOptions={itemsPerPageOptions}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                    />
                )}

            </div>
            <CrearDispersion open={open} toggleOpen={toggleOpen} />
        </>
    );
};

export default TablaDispersiones;
