"use client";
import { useLayout } from "@/utils/LayoutContext";
import useDropdown from "@/utils/useDropdown";

const options = ["Vertical", "Two Column", "Hovered", "Horizontal", "Detached"];

const SelectLayout = () => {
  const { open, ref, toggleOpen } = useDropdown();
  const { layout, changeLayout } = useLayout();
  return (
    <div ref={ref} className="relative max-w-[180px] w-full max-sm:hidden">
      <div
        onClick={toggleOpen}
        className={`bg-n0 dark:bg-bg4 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.02)] cursor-pointer w-full rounded-[30px] py-1 xxl:py-1.5 flex items-center justify-between gap-2 px-4 xxl:px-6`}>
        <span className="flex items-center font-medium gap-2 select-none">
          <i className="las la-border-all text-primary text-2xl md:text-3xl"></i>
          {layout}
        </span>
        <i
          className={`shrink-0 las text-lg la-angle-down ${
            open && "rotate-180"
          } duration-300`}></i>
      </div>
      <ul
        className={`absolute top-full bg-n0 duration-300 origin-top dark:bg-bg4 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] rounded-lg z-20 left-0 p-2 w-full ${
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"
        }`}>
        {options.map((item) => (
          <li
            onClick={() => {
              changeLayout(item);
              toggleOpen();
            }}
            className={`p-2 block select-none rounded-md hover:text-primary cursor-pointer duration-300 ${
              layout == item ? "bg-primary text-n0 hover:!text-n0" : ""
            }`}
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectLayout;
