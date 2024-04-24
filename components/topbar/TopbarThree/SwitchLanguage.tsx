"use client";
import useDropdown from "@/utils/useDropdown";
import Image from "next/image";
import { useState } from "react";
const languages = [
  "English (US)",
  "Arabic (SA)",
  "Bangla (BD)",
  "Spanish (ES)",
];
const SwitchLanguage = () => {
  const [selected, setSelected] = useState(languages[0]);
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div
      className="relative max-w-[216px] max-md:hidden lg:ltr:border-l-2 lg:rtl:border-r-2 border-primary/20 border-dashed"
      ref={ref}>
      <button
        onClick={toggleOpen}
        className={`flex gap-2 items-center ltr:ml-5 rtl:mr-5`}>
        <Image src="/images/usa.png" width={48} height={48} alt="img" />
        <span className="font-medium lg:text-lg max-xxl:hidden">
          {selected}
        </span>
        <i className="las la-angle-down text-lg max-xxl:hidden"></i>
      </button>
      <div
        className={`bg-n0 whitespace-nowrap w-full dark:bg-bg4 min-w-max max-xxl:rtl:origin-top-left max-xxl:ltr:origin-top-right rounded-md xxl:origin-top ltr:right-0 rtl:left-0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]  absolute top-full duration-300 ${
          open ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
        }`}>
        <ul className="flex flex-col w-full bg-n0 p-1 rounded-md dark:bg-bg4">
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setSelected(lang);
                toggleOpen();
              }}
              className={`px-4 block py-2 w-full rounded-md cursor-pointer duration-300 hover:text-primary ${
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

export default SwitchLanguage;
