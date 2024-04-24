"use client";
import useDropdown from "@/utils/useDropdown";
import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";
const options = [
  {
    title: "Edit",
    url: "#",
  },
  {
    title: "Delete",
    url: "#",
  },
  {
    title: "Share",
    url: "#",
  },
];
const OptionsVertical = ({ fromBottom }: { fromBottom?: boolean }) => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative top-0 " ref={ref}>
      <IconDotsVertical onClick={toggleOpen} className="cursor-pointer" />
      <ul
        className={`${open ? "block" : "hidden"} absolute ${
          fromBottom ? "bottom-0" : "top-0"
        } ltr:right-5 rtl:left-5 z-30  min-w-[122px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] p-1.5 rounded-md bg-n0 dark:bg-bg4`}>
        {options.map(({ title, url }) => (
          <li key={title}>
            <Link
              href={url}
              className="py-1.5 hover:bg-primary/5 dark:hover:bg-bg3 text-sm rounded-md duration-300 block px-3">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsVertical;
