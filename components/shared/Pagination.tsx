import React from "react";
import cn from "@/utils/cn";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  startIndex: number;
  endIndex: number;
  total: number;
  itemsPerPageOptions: number[]; // Nuevas opciones para la cantidad de registros por página
  itemsPerPage: number; // Nueva prop para la cantidad de registros a mostrar por página
  setItemsPerPage: (value: number) => void; // Nueva función para establecer la cantidad de registros por página
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  goToPage,
  total,
  startIndex,
  endIndex,
  nextPage,
  prevPage,
  itemsPerPageOptions,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex col-span-12 gap-4 sm:justify-between justify-center items-center flex-wrap">
      <p>
        Mostrando {startIndex + 1} - {endIndex + 1} de {total} resultados
      </p>

      {/* Agregar selector para la cantidad de registros por página */}


      <ul className="flex gap-2 md:gap-3 flex-wrap md:font-semibold items-center">
        <span>Registros por página: </span>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="ml-2 form-select rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <li>
          <button
            onClick={prevPage}
            className={cn(
              "hover:bg-primary text-primary hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary"
            )}
          >
            <i className="las la-angle-left text-lg"></i>
          </button>
        </li>
        {pages.map((page, i) => (
          <li key={i}>
            <button
              onClick={() => goToPage(page)}
              className={cn(
                "hover:bg-primary text-primary hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary",
                {
                  "bg-primary text-n0": currentPage === page,
                }
              )}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={nextPage}
            className={cn(
              "hover:bg-primary text-primary hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary"
            )}
          >
            <i className="las la-angle-right text-lg"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
