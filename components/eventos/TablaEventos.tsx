"use client";
import Action from "@/components/dashboards/style-02/Action";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { eventsData } from "@/public/data/demoData";
import { EventStatus } from "@/public/data/types";
import { Event } from "@/public/data/types";

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Event) => void;

const sortOptionsMap: Partial<Record<keyof Event, string>> = {
    EventName: "Nombre",
    Status: "Estatus",
    Sales: "Ventas",
    CreateDate: "Fecha de creación"
};

const TablaEventos = () => {
    const [tableData, setTableData] = useState<Event[]>(eventsData);
    const [order, setOrder] = useState<Order>("ASC");
    const [selected, setSelected] = useState(Object.values(sortOptionsMap)[0]);
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
        let filteredData: Event[] = [];
        if (searchTerm.trim() === '') {
            // Si la cadena de búsqueda está vacía, restaura los datos originales
            filteredData = eventsData;
        } else {
            if (selectedTab === 'all') {
                filteredData = eventsData.filter(
                    (item) =>
                        item.EventName.toLowerCase().includes(searchTerm) ||
                        (item.Description && item.Description.toLowerCase().includes(searchTerm)) ||
                        item.Status.includes(searchTerm)
                );
            } else {
                filteredData = tableData.filter(
                    (item) =>
                        item.EventName.toLowerCase().includes(searchTerm) ||
                        (item.Description && item.Description.toLowerCase().includes(searchTerm)) ||
                        item.Status.includes(searchTerm)
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
            setTableData(eventsData);
        } else {
            const filteredData = eventsData.filter(event => {
                switch (tab) {
                    case 'Activos':
                        return event.Status === EventStatus.Active;
                    case 'Inactivos':
                        return event.Status === EventStatus.Inactive;
                    case 'Borradores':
                        return event.Status === EventStatus.Draft;
                    case 'Finalizados':
                        return event.Status === EventStatus.Finished;
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
                        } rounded-md hover:bg-primary-100 hover:text-gray-50 focus:outline-none`}
                >
                    Todos
                </button>
                <button
                    onClick={() => handleTabChange("Activos")}
                    className={`py-2 px-4 text-sm font-semibold ${selectedTab === "Activos" ? "bg-primary text-white" : "text-gray-700 dark:text-gray-300 hover:dark:text-green-800"
                        } rounded-md hover:bg-primary-100 hover:text-gray-50 focus:outline-none`}
                >
                    Activos
                </button>
                <button
                    onClick={() => handleTabChange("Inactivos")}
                    className={`py-2 px-4 text-sm font-semibold ${selectedTab === "Inactivos" ? "bg-primary text-white" : "text-gray-700 dark:text-gray-300 hover:dark:text-green-800"
                        } rounded-md hover:bg-primary-100 hover:text-gray-50 focus:outline-none`}
                >
                    Inactivos
                </button>
                <button
                    onClick={() => handleTabChange("Finalizados")}
                    className={`py-2 px-4 text-sm font-semibold ${selectedTab === "Finalizados" ? "bg-primary text-white" : "text-gray-700 dark:text-gray-300 hover:dark:text-green-800"
                        } rounded-md hover:bg-primary-100 hover:text-gray-50 focus:outline-none`}
                >
                    Finalizados
                </button>
                <button
                    onClick={() => handleTabChange("Borradores")}
                    className={`py-2 px-4 text-sm font-semibold ${selectedTab === "Borradores" ? "bg-primary text-white" : "text-gray-700 dark:text-gray-300 hover:dark:text-green-800"
                        } rounded-md hover:bg-primary-100 hover:text-gray-50 focus:outline-none`}
                >
                    Borradores
                </button>
            </div>
            <div className="box col-span-12 lg:col-span-6">
                <div className="flex justify-between items-center gap-4 flex-wrap bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
                    <h4 className="h4">{selectedTab === 'all' ? 'Todos los eventos' : selectedTab}</h4>
                    <div className="flex items-center gap-4 flex-wrap grow sm:justify-end">
                        {/* <button onClick={toggleOpen} className="btn shrink-0">
                            Crear evento
                        </button> */}
                        <SearchBar handleSearch={handleSearch} classes="bg-primary/5" />
                        <div className="flex items-center gap-3 whitespace-nowrap">
                            <span>Ordenar por: </span>
                            <Dropdown
                                setSelected={setSelected}
                                selected={selected}
                                items={Object.values(sortOptionsMap)}
                                btnClass="rounded-[32px] lg:py-2.5"
                                contentClass="w-full"
                                onSelectOption={(option: keyof Event) => {
                                    // Encuentra la clave basada en el valor seleccionado
                                    const selectedKey = Object.keys(sortOptionsMap).find(
                                        key => sortOptionsMap[key as keyof Event] === option
                                    ) as keyof Event;
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
                                    onClick={() => sortData("EventName")}
                                    className="text-start py-5 px-6 cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Evento <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("StartDate")}
                                    className="text-start py-5 cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Fecha <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    className="text-start py-5 cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Duración
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("EventModality")}
                                    className="text-start py-5 cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Modalidad <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("Status")}
                                    className="text-start py-5 cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Estatus <IconSelector size={18} />
                                    </div>
                                </th>
                                <th
                                    onClick={() => sortData("Sales")}
                                    className="text-start py-5 cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        Ventas <IconSelector size={18} />
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
                                        StartDate,
                                        EndDate,
                                        EventModality,
                                        Status,
                                        Sales,
                                    },
                                    index
                                ) => {

                                    let durationInHours = "Fecha no disponible";

                                    // Verifica si StartDate no es null antes de calcular la duración
                                    if (StartDate) {
                                        // Verifica si EndDate también está presente para calcular la duración
                                        if (EndDate) {
                                            // Calcula la diferencia en milisegundos entre las fechas
                                            const durationMilliseconds = Math.abs(EndDate.getTime() - StartDate.getTime());
                                            // Convierte la diferencia a horas
                                            const durationHours = durationMilliseconds / (1000 * 60 * 60);
                                            // Formatea la duración con dos decimales y lo concatena con "horas"
                                            durationInHours = durationHours.toFixed(2) + " h";
                                        } else {
                                            // Si EndDate es null, establece "Duración desconocida"
                                            durationInHours = "Duración desconocida";
                                        }
                                    }

                                    return (
                                        <tr
                                            key={id}
                                            className="even:bg-secondary1/5 dark:even:bg-bg3">
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
                                                        {StartDate ? (
                                                            <>
                                                                <span>{StartDate?.toLocaleDateString()}</span> {/* Mostrar fecha */}
                                                            </>
                                                        ) : (
                                                            "Fecha no disponible"
                                                        )}
                                                    </p>
                                                    <span className="text-xs">{StartDate?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div>
                                                    <p className="font-medium">{durationInHours}</p>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div>
                                                    <p className="font-medium">{EventModality}</p>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div>
                                                    <span
                                                        className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${Status === EventStatus.Active &&
                                                            "bg-green-500 dark:bg-bg3 dark:text-green-500 text-white"
                                                            } ${Status === EventStatus.Inactive &&
                                                            "bg-yellow-500 dark:bg-bg3 dark:text-yellow-500 text-white"
                                                            } ${Status == EventStatus.Draft &&
                                                            "bg-orange-500 dark:bg-bg3 dark:text-orange-500 text-white"
                                                            } ${Status == EventStatus.Finished &&
                                                            "bg-red-500 dark:bg-bg3 dark:text-red-500 text-white"
                                                            }`}>
                                                        {Status}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="py-2">
                                                <div>
                                                    <p className="font-medium">
                                                        ${Sales?.toLocaleString()}
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
        </>
    );
};

export default TablaEventos;
