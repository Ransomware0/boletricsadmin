"use client";
import { sidebarData } from "@/public/data/sidebarData";
import useWindowSize from "@/utils/useWindowSize";
import { IconChevronRight, IconX } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
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

const SidebarHovered = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  const [activeMenu, setActiveMenu] = useState("");
  const path = usePathname();
  const { theme } = useTheme();
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
      className={`xl:w-24 group max-xl:w-[320px] hover:xl:w-[336px] z-[21] ${
        sidebarIsOpen
          ? "translate-x-0 visible"
          : "ltr:-translate-x-full rtl:translate-x-full invisible"
      } duration-300  fixed ltr:left-0 rtl:right-0 shadow-lg h-full bg-n0 dark:bg-bg4 top-0`}
      ref={sidebarRef}>
      <div className={`p-4 xl:p-7 group-hover:lg:p-6 group-hover:xxl:p-[30px]`}>
        <div className="flex justify-between group-hover:justify-between items-center">
          <Link href="/">
            <Image
              width={174}
              height={38}
              src={
                theme == "dark"
                  ? "/images/logo-with-text-dark.png"
                  : "/images/logo-with-text.png"
              }
              alt="logo"
              className="xl:hidden group-hover:xl:block"
            />
            <Image
              width={36}
              height={36}
              src={
                theme == "dark" ? "/images/logo-dark.png" : "/images/logo.png"
              }
              alt="logo"
              className="hidden xl:block group-hover:hidden"
            />
          </Link>
          <button onClick={() => setSidebar(false)} className="xl:hidden">
            <IconX />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto fixed right-0 left-0 h-full sidebar-hovered">
        <div className="px-4 group-hover:lg:px-6 group-hover:xxl:px-8 pb-4 xl:pb-8">
          {sidebarData.map(({ id, items, title }) => (
            <React.Fragment key={id}>
              <p className="text-xs font-semibold py-3 group-hover:xl:py-6 border-t-2 border-dashed border-primary/20">
                <span className="hidden group-hover:block">{title}</span>
              </p>
              <ul className="mb-5 flex flex-col justify-center items-center gap-4 xxl:gap-6 group-hover:gap-2 pb-24">
                {items.map(
                  ({ id, icon, name, submenus }) =>
                    submenus && (
                      <li
                        key={id}
                        className={`relative w-full xl:flex group-hover:flex-col justify-center ${
                          activeMenu == name &&
                          "group-hover:bg-primary/5 dark:group-hover:bg-bg3 rounded-xl xxl:rounded-full group-hover:rounded-xl"
                        }`}>
                        <button
                          onClick={() =>
                            setActiveMenu((p) => (p == name ? "" : name))
                          }
                          className={`max-xl:px-6 max-xl:w-full max-lx:py-3 group-hover:w-full group/btn group-hover:bg-n0 dark:group-hover:bg-bg4 group-hover:border-none justify-center xl:bg-primary/5 xl:dark:bg-bg3 xl:border xl:border-n30 dark:xl:border-n500 flex max-xl:justify-between group-hover:!justify-between xl:h-12 xl:w-12 items-center group-hover:xl:px-6 py-3 group-hover:xl:py-3 max-xl:rounded-xl lg:rounded-full group-hover:rounded-xl hover:!bg-primary hover:text-n0 ${
                            activeMenu == name && "!bg-primary text-n0"
                          } ${path == name && "!bg-primary text-n0"} ${
                            isActive(submenus) && "!bg-primary text-n0"
                          }`}>
                          <span className="flex items-center max-xl:gap-2 group-hover:gap-2">
                            <span
                              className={`text-primary group-hover/btn:text-n0  ${
                                activeMenu == name && " !text-n0"
                              } ${isActive(submenus) && " !text-n0"}`}>
                              {icon}
                            </span>
                            <span className="font-medium xl:hidden group-hover:block">
                              {name}
                            </span>
                          </span>
                          <IconChevronRight
                            className={`xl:hidden group-hover:block ${
                              activeMenu == name && "rotate-90"
                            }`}
                          />
                        </button>
                        <AnimateHeight height={activeMenu == name ? "auto" : 0}>
                          <ul
                            className={`px-4 xxl:px-5 py-3 xl:hidden group-hover:block`}>
                            {submenus.map(({ title, url }) => (
                              <li
                                onClick={() => {
                                  setActiveMenu(name);
                                  windowSize! < 1200 &&
                                    setSidebar(!sidebarIsOpen);
                                }}
                                key={title}>
                                <Link
                                  className={`font-medium flex items-center gap-2 py-3 px-6 ${
                                    path == url && "text-primary"
                                  }`}
                                  href={url}>
                                  <i className="la la-minus"></i>{" "}
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
              <div className="mb-24 flex justify-center">
                <button
                  className={`max-xl:px-6 max-xl:w-full max-lx:py-3 group-hover:w-full group/btn group-hover:bg-n0 dark:group-hover:bg-bg4 group-hover:border-none justify-center xl:bg-primary/5 xl:dark:bg-bg3 xl:border xl:border-n30 dark:xl:border-n500 flex max-xl:justify-between group-hover:!justify-between xl:h-12 xl:w-12 items-center group-hover:xl:px-6 py-3 group-hover:xl:py-3 max-xl:rounded-xl lg:rounded-full group-hover:rounded-xl hover:!bg-primary hover:text-n0`}>
                  <span className="flex items-center max-xl:gap-2 group-hover:gap-2">
                    <span className={`text-primary group-hover/btn:text-n0 }`}>
                      <i className="las la-sign-out-alt"></i>
                    </span>
                    <span className="font-medium xl:hidden group-hover:block">
                      Sign Out
                    </span>
                  </span>
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarHovered;
