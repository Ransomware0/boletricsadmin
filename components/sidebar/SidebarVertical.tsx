"use client";
import { sidebarData } from "@/public/data/sidebarData";
import logoDark from "@/public/images/LogoWebTextDark.png";
import logoWhite from "@/public/images/LogoWebTextLight.png";
import useWindowSize from "@/utils/useWindowSize";
import { IconX } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { eventsData } from "@/public/data/demoData";
import { Event } from "@/public/data/types";
import { usePathname } from "next/navigation";
import { Link } from "nextjs13-progress";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AnimateHeight from "react-animate-height";

const calculateStatistics = (events: Event[]) => {
  let totalRevenue = 0;

  events.forEach(event => {
    if (event.Sales !== null && event.Sales !== undefined) {
      totalRevenue += event.Sales.valueOf(); // Suma solo si event.Sales tiene un valor definido
    }
  });
  return {
    totalRevenue
  };
};

const SidebarVertical = ({
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
  const { totalRevenue } = calculateStatistics(eventsData);

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
      className={`w-[280px] xxxl:w-[336px] shadow-sm z-[21] ${sidebarIsOpen
        ? "translate-x-0 visible"
        : "ltr:-translate-x-full rtl:translate-x-full invisible"
        } duration-300 sidebar fixed ltr:left-0 rtl:right-0 h-full bg-n0 dark:bg-bg4 top-0`}
      ref={sidebarRef}>
      <div className={`p-4 xl:p-6 xxxl:p-[31px]`}>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              width={174}
              height={38}
              src={theme == "light" ? logoWhite : logoDark}
              alt="logo"
            />
          </Link>
          <button onClick={() => setSidebar(false)} className="xl:hidden">
            <IconX />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto fixed right-0 left-0 h-full">
        <div className="px-4 xxl:px-6 xxxl:px-8">
          {sidebarData.map(({ id, items, title }) => (
            <React.Fragment key={id}>
              <p className="text-xs font-semibold py-4 lg:py-6 border-t-2 border-dashed border-primary/20">
                {/* {title} */}
              </p>
              <ul className="mb-5 flex flex-col gap-2 ">
                {items.map(
                  ({ id, icon, name, submenus }) =>
                    submenus && (
                      <li
                        key={id}
                        className={`relative rounded-xl duration-300 ${activeMenu == name && "bg-primary/5 dark:bg-bg3 "
                          }`}>
                        <button
                          onClick={() =>
                            setActiveMenu((p) => (p == name ? "" : name))
                          }
                          className={`px-4 w-full group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-3 rounded-xl hover:bg-primary hover:text-n0 duration-300 ${activeMenu == name && "bg-primary text-n0"
                            } ${path == name && "bg-primary text-n0"} ${isActive(submenus) && "bg-primary text-n0"
                            }`}>
                          <span className="flex items-center gap-2">
                            <span
                              className={`text-primary self-center -mb-1 group-hover:text-n0 ${activeMenu == name && " !text-n0"
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
                                  className={`font-medium flex items-center gap-2 py-3 hover:text-primary duration-300 capitalize  ${path == url && "text-primary"
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
        <div className="px-4 xxl:px-6 xxxl:px-8 pb-28">
          <p className="text-xs font-semibold py-4 lg:py-6 border-t-2 border-dashed border-primary/20">
            Ingresos generados
          </p>
          <ul>
            <li>
              <button
                disabled
                className={`px-4 w-full group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-3 rounded-xl `}>
                <span className="flex items-center gap-2">
                  <span className={`text-primary self-center -mb-1`}>
                    <i className="las la-dollar-sign"></i>
                  </span>
                  <span className="font-medium">
                    {totalRevenue.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
                  </span>
                </span>
              </button>
              {/* <button
                className={`px-4 w-full group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-3 rounded-xl `}>
                <span className="flex items-center gap-2">
                  <span className={`text-primary self-center -mb-1`}>
                    <i className="las la-euro-sign"></i>
                  </span>
                  <span className="font-medium">15,254.32 EUR</span>
                </span>
              </button>
              <button
                className={`px-4 w-full group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-3 rounded-xl `}>
                <span className="flex items-center gap-2">
                  <span className={`text-primary self-center -mb-1`}>
                    <i className="las la-pound-sign"></i>
                  </span>
                  <span className="font-medium">7,029.14 GBP</span>
                </span>
              </button>
              <button
                className={`px-4 w-full group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-3 rounded-xl `}>
                <span className="flex items-center gap-2">
                  <span className={`text-primary self-center -mb-1`}>
                    <i className="las la-plus-circle"></i>
                  </span>
                  <span className="font-medium">Add More Balance</span>
                </span>
              </button> */}
            </li>
          </ul>
          <div>
            <p className="mt-6 mb-8 text-sm">
              Upgrade your account to{" "}
              <span className="text-primary font-semibold">PRO</span> for even
              more examples.
              Último evento
            </p>
            {/* <Image
              src="/images/upgrade.png"
              width={272}
              height={173}
              alt="upgrade"
            /> */}
            {/* <p className="mt-6 mb-8 text-sm">
              Upgrade your account to{" "}
              <span className="text-primary font-semibold">PRO</span> for even
              more examples.
            </p>
            <Link href="#" className="btn flex w-full justify-center">
              Upgrade Now
            </Link> */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarVertical;
