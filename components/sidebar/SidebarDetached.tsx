"use client";
import { sidebarData } from "@/public/data/sidebarData";
import useWindowSize from "@/utils/useWindowSize";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AnimateHeight from "react-animate-height";

const SidebarDetached = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  const [activeMenu, setActiveMenu] = useState("");
  const path = usePathname();
  const { windowSize } = useWindowSize();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const currentWindowSize = window.innerWidth;

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (currentWindowSize < 1200) {
          setSidebar(false);
        }
      }
    },
    [setSidebar]
  );

  useEffect(() => {
    sidebarData.map(({ items }) =>
      items.map(({ submenus, name }) =>
        submenus.map(({ url }) => (url == path ? setActiveMenu(name) : ""))
      )
    );
  }, [path]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const isActive = (submenus: any[]) => {
    return submenus.some(({ url }) => path == url);
  };
  return (
    <aside
      className={`w-full sticky top-0 max-xl:top-20 max-xl:fixed max-xl:left-0 max-xl:w-[320px] min-h-screen shadow-sm z-[21] xl:col-span-3 ${
        sidebarIsOpen
          ? "max-xl:translate-x-0 visible"
          : "max-xl:-translate-x-full invisible"
      } duration-300 sidebar xl:fixed xl:max-w-[300px] xxl:max-w-[350px] rounded-xl h-full top-28 `}>
      <div
        ref={sidebarRef}
        className="overflow-y-auto max-h-[800px] bg-n0 dark:bg-bg4">
        <div className="px-4 xxl:px-6 xxxl:px-8">
          {sidebarData.map(({ id, items, title }) => (
            <React.Fragment key={id}>
              <p className="text-xs font-semibold py-4 lg:py-6">{title}</p>
              <ul className="mb-5 flex flex-col gap-1 overflow-x-auto pb-32 xl:pb-36">
                {items.map(
                  ({ id, icon, name, submenus }) =>
                    submenus && (
                      <li
                        key={id}
                        className={`relative rounded-xl duration-300 ${
                          activeMenu == name && "bg-primary/5 dark:bg-bg3 "
                        }`}>
                        <button
                          onClick={() =>
                            setActiveMenu((p) => (p == name ? "" : name))
                          }
                          className={`px-4 w-full group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-3 rounded-xl hover:bg-primary hover:text-n0 duration-300 ${
                            activeMenu == name && "bg-primary text-n0"
                          } ${path == name && "bg-primary text-n0"} ${
                            isActive(submenus) && "bg-primary text-n0"
                          }`}>
                          <span className="flex items-center gap-2">
                            <span
                              className={`text-primary group-hover:text-n0 ${
                                activeMenu == name && " !text-n0"
                              } ${isActive(submenus) && " !text-n0"}`}>
                              {icon}
                            </span>
                            <span className="font-medium">{name}</span>
                          </span>
                          {activeMenu == name ? (
                            <i className="las text-xl la-minus"></i>
                          ) : (
                            <i className="las text-xl la-plus"></i>
                          )}
                        </button>
                        <AnimateHeight height={activeMenu == name ? "auto" : 0}>
                          <ul className={`px-3 4xl:px-5 py-3 menu`}>
                            {submenus.map(({ title, url }) => (
                              <li
                                onClick={() => {
                                  setActiveMenu(name);
                                  windowSize! < 1200 &&
                                    setSidebar(!sidebarIsOpen);
                                }}
                                key={title}>
                                <Link
                                  className={`font-medium flex items-center gap-2 py-3 hover:text-primary duration-300 capitalize px-3 xxxl:px-6 ${
                                    path == url && "text-primary"
                                  }`}
                                  href={url}>
                                  <i className="las la-minus text-xl"></i>{" "}
                                  <span>{title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AnimateHeight>
                      </li>
                    )
                )}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarDetached;
