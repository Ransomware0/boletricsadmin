"use client";
import useDropdown from "@/utils/useDropdown";
import { useState } from "react";
const currencies = ["USD", "BDT", "GBP", "EUR", "JPY"];
const SelectCurrency = () => {
  const [selected, setSelected] = useState(currencies[0]);
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative max-sm:hidden" ref={ref}>
      <button
        onClick={toggleOpen}
        className={`flex gap-2 items-center py-1 md:py-1.5 xl:py-2 px-3 xl:px-5 rounded-full bg-n0 dark:bg-bg4 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.02)]`}>
        <i className="las la-dollar-sign text-primary text-2xl"></i>
        <span className="flex items-center gap-2 text-sm lg:text-base font-semibold">
          {selected} <i className="las la-angle-down text-base lg:text-lg"></i>
        </span>
      </button>
      <div
        className={`bg-n0 border  dark:border-n500 dark:bg-bg4 rounded-md right-0 shadow-lg  absolute top-full duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}>
        <ul className="flex flex-col w-32 bg-n0 p-1 rounded-md dark:bg-bg4">
          {currencies.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setSelected(lang);
                toggleOpen();
              }}
              className={`px-4 block py-2 rounded-md cursor-pointer duration-300 hover:text-primary ${
                selected == lang && "bg-primary text-n0 hover:!text-n0"
              }`}>
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectCurrency;
