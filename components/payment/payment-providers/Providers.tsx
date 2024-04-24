"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import Pagination from "@/components/shared/Pagination";

import SearchBar from "@/components/shared/SearchBar";
import cn from "@/utils/cn";
import usePagination from "@/utils/usePagination";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
const defaultStyle: React.CSSProperties = {
  transition: `all 500ms ease-in-out`,
  opacity: 0,
};
interface TransitionStyles {
  entering: React.CSSProperties;
  entered: React.CSSProperties;
  exiting: React.CSSProperties;
  exited: React.CSSProperties;
}
const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, transform: "translateY(0)" },
  entered: { opacity: 1, transform: "translateY(0)" },
  exiting: { opacity: 0, transform: "translateY(30px)" },
  exited: { opacity: 0, transform: "translateY(30px)" },
};

const providersTabData = [
  {
    title: "Utilities",
    icon: <i className="las la-gas-pump"></i>,
    desc: "Electricity, gas, water, sewage, trash disposal",
    services: [
      {
        title: "Electricity",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Natural Gas",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Thames Water",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
      {
        title: "National Grid",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "AT&T Internet",
        icon: <i className="las la-wifi"></i>,
        price: 32.23,
      },
      {
        title: "Direct TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Dish Network",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Spectrum TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Duke Energy",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Comcast Cable",
        icon: <i className="las la-ethernet"></i>,
        price: 32.23,
      },
      {
        title: "Nextera Energy",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "City Water Board",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
    ],
  },
  {
    title: "Saved Templates",
    icon: <i className="lar la-star"></i>,
    desc: "Payment your save template",
    services: [
      {
        title: "Duke Energy",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Comcast Cable",
        icon: <i className="las la-ethernet"></i>,
        price: 32.23,
      },
      {
        title: "Nextera Energy",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Electricity",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Natural Gas",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Thames Water",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
      {
        title: "National Grid",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "AT&T Internet",
        icon: <i className="las la-wifi"></i>,
        price: 32.23,
      },
      {
        title: "Direct TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Dish Network",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Spectrum TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },

      {
        title: "City Water Board",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
    ],
  },
  {
    title: "Communication",
    icon: <i className="las la-tv"></i>,
    desc: "Telephone, internet, cable TV",
    services: [
      {
        title: "National Grid",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Dish Network",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Spectrum TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "AT&T Internet",
        icon: <i className="las la-wifi"></i>,
        price: 32.23,
      },
      {
        title: "Direct TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Electricity",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Natural Gas",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Thames Water",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },

      {
        title: "Duke Energy",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Comcast Cable",
        icon: <i className="las la-ethernet"></i>,
        price: 32.23,
      },
      {
        title: "Nextera Energy",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "City Water Board",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
    ],
  },
  {
    title: "Housing",
    icon: <i className="las la-home"></i>,
    desc: "Rent, mortgage, property taxes, insurance",
    services: [
      {
        title: "AT&T Internet",
        icon: <i className="las la-wifi"></i>,
        price: 32.23,
      },
      {
        title: "Direct TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Electricity",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },

      {
        title: "National Grid",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Dish Network",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Spectrum TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },

      {
        title: "Natural Gas",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Thames Water",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },

      {
        title: "Duke Energy",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Comcast Cable",
        icon: <i className="las la-ethernet"></i>,
        price: 32.23,
      },
      {
        title: "Nextera Energy",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "City Water Board",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
    ],
  },
  {
    title: "Transportation",
    icon: <i className="las la-car"></i>,
    desc: "Car loan, car insurance, gasoline",
    services: [
      {
        title: "Dish Network",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Spectrum TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "AT&T Internet",
        icon: <i className="las la-wifi"></i>,
        price: 32.23,
      },

      {
        title: "National Grid",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },

      {
        title: "Direct TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Electricity",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Natural Gas",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Thames Water",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },

      {
        title: "Duke Energy",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Comcast Cable",
        icon: <i className="las la-ethernet"></i>,
        price: 32.23,
      },
      {
        title: "Nextera Energy",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "City Water Board",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
    ],
  },
  {
    title: "Food",
    icon: <i className="las la-hamburger"></i>,
    desc: "Groceries, dining out",
    services: [
      {
        title: "Electricity",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Natural Gas",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Thames Water",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },

      {
        title: "Duke Energy",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Comcast Cable",
        icon: <i className="las la-ethernet"></i>,
        price: 32.23,
      },
      {
        title: "National Grid",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Dish Network",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Spectrum TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "AT&T Internet",
        icon: <i className="las la-wifi"></i>,
        price: 32.23,
      },
      {
        title: "Direct TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Nextera Energy",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "City Water Board",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
    ],
  },
  {
    title: "Healthcare",
    icon: <i className="las la-heartbeat"></i>,
    desc: "Health insurance, medical bills",
    services: [
      {
        title: "Dish Network",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Spectrum TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "AT&T Internet",
        icon: <i className="las la-wifi"></i>,
        price: 32.23,
      },
      {
        title: "Direct TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Electricity",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },

      {
        title: "National Grid",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },

      {
        title: "Natural Gas",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Thames Water",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },

      {
        title: "Duke Energy",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Comcast Cable",
        icon: <i className="las la-ethernet"></i>,
        price: 32.23,
      },
      {
        title: "Nextera Energy",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "City Water Board",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
    ],
  },
  {
    title: "Education",
    icon: <i className="las la-graduation-cap"></i>,
    desc: "Tuition, fees, books, supplies",
    services: [
      {
        title: "Spectrum TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "AT&T Internet",
        icon: <i className="las la-wifi"></i>,
        price: 32.23,
      },
      {
        title: "Direct TV",
        icon: <i className="las la-tv"></i>,
        price: 32.23,
      },
      {
        title: "Electricity",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Natural Gas",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Thames Water",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
      {
        title: "National Grid",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "Dish Network",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },

      {
        title: "Duke Energy",
        icon: <i className="las la-gas-pump"></i>,
        price: 32.23,
      },
      {
        title: "Comcast Cable",
        icon: <i className="las la-ethernet"></i>,
        price: 32.23,
      },
      {
        title: "Nextera Energy",
        icon: <i className="las la-bolt"></i>,
        price: 32.23,
      },
      {
        title: "City Water Board",
        icon: <i className="las la-tint"></i>,
        price: 32.23,
      },
    ],
  },
];
const PaymentProviders = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(providersTabData[0].title);
  const itemsPerPage = 12;
  const {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    startIndex,
    endIndex,
    totalPages,
  } = usePagination(activeTab.length, itemsPerPage);

  const displayedData = activeTab.slice(startIndex, endIndex + 1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(true);
      }
      if (window.innerWidth < 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSearch = () => "";
  const nodeRef = useRef(null);
  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="md:hidden flex items-center gap-2 min-w-max py-2 px-3 relative z-[3] rounded-lg bg-primary text-n0">
        <i className="las la-bars"></i> <span>Menu</span>
      </button>
      <div
        onClick={() => setOpenMenu(false)}
        className={`absolute md:hidden md:invisible inset-0 z-[2] ${
          openMenu ? "block visible" : "hidden invisible"
        }`}></div>
      <div className="grid grid-cols-12 relative gap-4 xxl:gap-6 max-md:mt-3">
        <div
          className={`max-md:box md:bg-transparent duration-500 max-md:w-[280px] max-md:max-h-[600px] max-md:overflow-y-auto max-md:rounded-xl max-md:absolute max-md:left-0 z-[3] max-md:bg-n0 max-md:dark:bg-bg4 max-md:top-0 md:col-span-5 xl:col-span-4 max-md:min-w-[300px] ${
            openMenu
              ? "max-md:translate-x-0 max-md:visible max-md:opacity-100"
              : "max-md:-translate-x-[120%] max-md:opacity-0 max-md:invisible"
          }`}>
          <div className="md:box sticky top-20">
            <div className="bb-dashed border-secondary1/20 mb-4 pb-4 lg:mb-6 lg:pb-6">
              <SearchBar
                handleSearch={handleSearch}
                classes=" bg-primary/5 max-w-full xxl:max-w-full"
              />
            </div>
            <ul className="flex flex-col gap-4 lg:gap-6 bb-dashed mb-6 pb-6">
              {providersTabData.map(({ title, desc, icon }) => (
                <li key={title}>
                  <button
                    onClick={() => setActiveTab(title)}
                    className={cn(
                      "flex justify-between duration-300 gap-2 w-full text-start items-center",
                      {
                        "p-3 xxl:p-4 xxxl:p-6 rounded-xl border border-dashed border-primary bg-primary/5":
                          title == activeTab,
                      }
                    )}>
                    <div>
                      <p className="text-base xxl:text-lg font-medium">
                        {title}
                      </p>
                      <span className="text-xs">{desc}</span>
                    </div>
                    <span className="border border-n30 dark:border-n500 bg-primary/5 shrink-0 w-10 h-10 xxl:w-14 xxl:h-14 flex items-center justify-center rounded-full">
                      {icon}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <Link
              className="text-primary font-semibold inline-flex gap-1 items-center mt-6 group"
              href="#">
              See More{" "}
              <i className="las la-arrow-right group-hover:pl-2 duration-300"></i>
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 xl:col-span-8 box xl:p-8">
          <div className="flex justify-between items-center gap-2 bb-dashed pb-4 mb-4 lg:mb-6 lg:pb-6">
            <h4 className="h4">Utility Services</h4>
            <OptionsHorizontal />
          </div>
          <div className="bb-dashed border-secondary1/20 mb-4 pb-4 lg:mb-6 lg:pb-6">
            {providersTabData.map(({ title, services }) => (
              <Transition
                nodeRef={nodeRef}
                in={activeTab == title}
                timeout={500}
                key={title}>
                {(state) => (
                  <div
                    ref={nodeRef}
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state as keyof TransitionStyles],
                    }}>
                    {activeTab == title && (
                      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
                        {services.map(({ title, icon, price }) => (
                          <div
                            key={title}
                            className="col-span-12 min-[430px]:col-span-6 border border-n30 hover:border-primary hover:border-dashed duration-300 py-5 dark:border-n500 dark:hover:border-primary min-[600px]:col-span-4 md:col-span-6 xxl:col-span-4 4xl:col-span-3 box p-3 xl:p-6 bg-primary/5 dark:bg-bg3 flex flex-col items-center">
                            <div className="bg-n0 mb-6 dark:bg-bg4 rounded-full text-3xl w-[52px] h-[52px] flex items-center justify-center shrink-0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.04)]">
                              {icon}
                            </div>
                            <h5 className="h5 font-semibold mb-5 text-center">
                              {title}
                            </h5>
                            <span className="bg-primary py-1 px-3 rounded-xl text-n0">
                              ${price}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </Transition>
            ))}
          </div>
          {activeTab.length > 0 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              nextPage={nextPage}
              startIndex={startIndex}
              endIndex={endIndex}
              prevPage={prevPage}
              total={activeTab.length}
              goToPage={(page: number) => goToPage(page)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentProviders;
