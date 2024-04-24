"use client";
import {
  LeftSideMenuItems,
  rightSideMenuItems,
} from "@/public/data/sidebarDataHorizontal";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HorizontalMenu = () => {
  const path = usePathname();

  return (
    <div className="w-full bg-n0 dark:bg-bg4">
      <div className="mx-auto max-w-[1850px] py-4 xl:px-3 flex justify-between items-center">
        <ul className="relative flex gap-2">
          {LeftSideMenuItems.map(({ submenus, id, name }) => {
            const isActive =
              submenus && submenus.some(({ url }) => path == url);
            return (
              <li
                key={id}
                className="group relative cursor-pointer px-2 xxxl:px-3 py-2.5">
                <span
                  className={`flex gap-1 items-center duration-300 hover:text-primary ${
                    isActive && "text-primary"
                  }`}>
                  <span className={`font-medium`}>{name}</span>
                  {submenus && <i className="las la-angle-down text-base"></i>}
                </span>

                {submenus && (
                  <ul
                    className={`group-hover:event-unset pointer-events-none invisible absolute rtl:right-0 ltr:left-0 top-[120%] min-w-[200px] bg-n7 p-3 text-n2 opacity-0 duration-300 group-hover:visible group-hover:top-full group-hover:opacity-100 lg:px-5 bg-n0 dark:bg-bg3 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-md`}>
                    {submenus.map(({ title, url }) => (
                      <li key={title} className="min-w-[180px]">
                        <Link
                          className={`relative inline-block py-2 hover:text-primary duration-200 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:left-0 hover:after:right-auto hover:after:w-full ${
                            path == url && "text-primary"
                          }`}
                          href={url}>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="relative group">
          <button className={`font-medium flex items-center gap-2 py-3`}>
            More <i className="las la-angle-down text-base"></i>
          </button>
          <ul className="absolute group-hover:event-unset pointer-events-none invisible group-hover:visible duration-300 transition-all translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 group-hover:flex flex-col bg-n0 dark:bg-bg3 rounded-md w-full min-w-[200px] rtl:left-0 ltr:right-0 top-full shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
            {rightSideMenuItems.map(({ id, name, submenus }) => {
              const isActive =
                submenus && submenus.some(({ url }) => path == url);
              return (
                <li
                  key={id}
                  className="min-w-[200px] w-full relative group/submenu">
                  <button
                    className={`flex w-full justify-between items-center px-4 py-2.5 hover:text-primary duration-300 ${
                      isActive && "text-primary"
                    }`}>
                    {name}{" "}
                    {submenus && (
                      <i className="las la-angle-right text-base"></i>
                    )}
                  </button>
                  <ul className="absolute group-hover/submenu:event-unset pointer-events-none invisible group-hover/submenu:visible ltr:right-full rtl:left-full shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] top-0 opacity-0 group-hover/submenu:opacity-100 duration-300 min-w-[200px] group-hover/submenu:flex flex-col bg-n0 dark:bg-bg3 border border-n0 dark:border-n800 rounded-md">
                    {submenus.map(({ title, url }) => (
                      <li key={title}>
                        <Link
                          href={url}
                          className={`px-4 py-2.5 inline-block hover:text-primary duration-300 ${
                            path == url && "text-primary"
                          }`}>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMenu;
