"use client";
import { sidebarData } from "@/public/data/sidebarData";
import useWindowSize from "@/utils/useWindowSize";
import { IconX } from "@tabler/icons-react";
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

const SidebarTwoColumn = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  const [activeMenu, setActiveMenu] = useState("");
  const path = usePathname();
  const { windowSize } = useWindowSize();
  const { theme } = useTheme();
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
  const isActive = (submenus: any[]) => {
    return submenus.some(({ url }) => path == url);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <aside
      className={`w-[280px] xxxl:w-[360px] z-[21] bg-n0 dark:bg-bg3 ${
        sidebarIsOpen
          ? "translate-x-0 visible"
          : "ltr:-translate-x-full rtl:translate-x-full invisible"
      } duration-300 sidebar fixed ltr:left-0 rtl:right-0 h-full top-0`}
      ref={sidebarRef}>
      <div className="flex">
        <div className="h-screen shrink-0 bg-primary/5 dark:bg-bg3">
          <div className="p-3.5 xxxl:p-[22px]">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="rounded-full p-2 inline-block border border-n30 dark:border-n500 bg-n0 dark:bg-bg3">
                <Image
                  width={36}
                  height={36}
                  src={
                    theme == "dark"
                      ? "/images/logo-dark.png"
                      : "/images/logo.png"
                  }
                  className="w-full"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="overflow-y-auto fixed h-full sidebar-hovered">
            <div className="px-4 xxxl:px-6 pb-28">
              {sidebarData.map(({ id, items, title }) => (
                <React.Fragment key={id}>
                  {/* <p className="text-xs font-semibold py-4 lg:py-6 border-t-2 border-dashed border-primary/20">
                {title}
              </p> */}
                  <ul className="mb-5 flex flex-col gap-4 xxl:gap-6 border-t-2 border-dashed border-primary/20 pt-4 lg:pt-6">
                    {items.map(
                      ({ id, icon, name, submenus }) =>
                        submenus && (
                          <li
                            key={id}
                            className={`inline-block rounded-xl duration-300`}>
                            <button
                              onClick={() => setActiveMenu(name)}
                              className={`group h-12 w-12 rounded-full hover:bg-primary bg-n0 border border-n30 dark:bg-bg3 dark:border-n500 hover:text-n0 duration-300 ${
                                activeMenu == name &&
                                "bg-primary text-n0 dark:bg-primary"
                              } ${
                                path == name &&
                                "bg-primary text-n0 dark:bg-primary"
                              } ${
                                isActive(submenus) &&
                                "bg-primary text-n0 dark:bg-primary"
                              }`}>
                              <span
                                className={`text-primary group-hover:text-n0 ${
                                  activeMenu == name && " !text-n0"
                                } ${isActive(submenus) && " !text-n0"}`}>
                                {icon}
                              </span>
                            </button>
                          </li>
                        )
                    )}
                  </ul>
                  <div className="pt-20">
                    <button
                      className={`group h-12 w-12 rounded-full hover:bg-primary bg-n0 border border-n30 dark:bg-bg3 dark:border-n500 hover:text-n0 duration-300 `}>
                      <span className={`text-primary group-hover:text-n0 `}>
                        <i className="las la-sign-out-alt"></i>
                      </span>
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="relative grow h-screen bg-n0 dark:bg-bg4">
          <div className="sticky top-0 bg-n0 dark:bg-bg4 w-full flex flex-col justify-between h-full">
            <div>
              <button
                onClick={() => setSidebar(false)}
                className="xl:hidden absolute top-3 right-3 z-20">
                <IconX />
              </button>
              <Link href="/">
                <Image
                  width={141}
                  height={38}
                  className="pt-8 pb-3 xxxl:pb-7 ltr:ml-6 xxl:ltr:ml-8 rtl:mr-6 xxl:rtl:mr-8 border-b-2 border-dashed border-primary/20"
                  src={
                    theme == "dark"
                      ? "/images/logo-text-dark.png"
                      : "/images/logo-text.png"
                  }
                  alt="logo text"
                />
              </Link>
              {sidebarData.map(({ items, id }) => (
                <div key={id}>
                  {items.map(({ id, name, submenus }) => (
                    <div key={id}>
                      {activeMenu == name && (
                        <ul className="pt-4 max-xl:pt-8 px-2.5 xxxl:px-6">
                          {submenus.map(({ title, url }) => (
                            <li
                              onClick={() => {
                                setActiveMenu(name);
                                windowSize! < 1200 &&
                                  setSidebar(!sidebarIsOpen);
                              }}
                              key={title}>
                              <Link
                                className={`font-medium block hover:text-primary duration-300 py-3 ${
                                  path == url && "text-primary"
                                }`}
                                href={url}>
                                <i className="las la-minus text-xl"></i> {title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="px-2.5 xxxl:px-6 pb-5">
              <Image
                src="/images/upgrade.png"
                width={272}
                height={173}
                alt="upgrade"
              />
              <p className="mt-6 mb-8 text-sm">
                Upgrade your account to{" "}
                <span className="text-primary font-semibold">PRO</span> for even
                more examples.
              </p>
              <Link href="#" className="btn flex w-full justify-center">
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarTwoColumn;
