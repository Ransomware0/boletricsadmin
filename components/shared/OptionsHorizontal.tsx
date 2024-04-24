"use client";
import useDropdown from "@/utils/useDropdown";
import { IconDots } from "@tabler/icons-react";
import Link from "next/link";
const options = [
  {
    title: "Edit",
    url: "#",
  },
  {
    title: "Print",
    url: "#",
  },
  {
    title: "Share",
    url: "#",
  },
];
const OptionsHorizontal = () => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div ref={ref} className="relative">
      <IconDots onClick={toggleOpen} className="cursor-pointer" />
      <ul
        className={`${
          open ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
        } absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md`}>
        {options.map(({ title, url }) => (
          <li key={title}>
            <Link
              href={url}
              className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsHorizontal;
