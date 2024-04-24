"use client";
import useDropdown from "@/utils/useDropdown";
import { useState } from "react";
const languages = ["English", "Arabic", "Bangla", "Spanish"];
const SwitchLanguageTwo = () => {
  const [selected, setSelected] = useState(languages[0]);
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative" ref={ref}>
      <button onClick={toggleOpen}>
        <i className="las la-language"></i>
      </button>
      <div
        className={`bg-n0  dark:bg-bg4 ltr:origin-top-right rtl:origin-top-left rounded-md ltr:right-0 rtl:left-0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]  absolute top-full duration-300 ${
          open ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
        }`}>
        <ul className="flex flex-col w-32 bg-n0 p-1 rounded-md dark:bg-bg4">
          {languages.map((lang) => (
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

export default SwitchLanguageTwo;
