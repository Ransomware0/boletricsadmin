"use client";
import Customizer from "@/components/shared/Customizer";
import Footer from "@/components/shared/Footer";
import SidebarDetached from "@/components/sidebar/SidebarDetached";
import SidebarHovered from "@/components/sidebar/SidebarHovered";
import SidebarTwoColumn from "@/components/sidebar/SidebarTwoColumn";
import SidebarVertical from "@/components/sidebar/SidebarVertical";
import TopbarFive from "@/components/topbar/TopbarFive/TopbarFive";
import TopbarFour from "@/components/topbar/TopbarFour/TopbarFour";
import TopBarOne from "@/components/topbar/TopbarOne/TopBarOne";
import TopBarThree from "@/components/topbar/TopbarThree/TopBarThree";
import TopBarTwo from "@/components/topbar/topbarTwo/TopBarTwo";
import { useLayout } from "@/utils/LayoutContext";
import useWindowSize from "@/utils/useWindowSize";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { layout } = useLayout();
  const { windowSize } = useWindowSize();
  const [customizerOpen, setCustomizerOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setSidebarIsOpen(true);
    } else {
      setSidebarIsOpen(false);
    }
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setSidebarIsOpen(false);
      } else {
        setSidebarIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Sidebar */}

      {layout == "Vertical" && (
        <>
          <TopBarOne
            setSidebar={setSidebarIsOpen}
            sidebarIsOpen={sidebarIsOpen}
          />
          <SidebarVertical
            sidebarIsOpen={sidebarIsOpen}
            setSidebar={setSidebarIsOpen}
          />
        </>
      )}
      {/* Navbar top  */}
      {layout == "Horizontal" && windowSize! > 1200 && <TopbarFour />}

      {layout == "Horizontal" && windowSize! < 1201 && (
        <>
          <TopBarOne
            setSidebar={setSidebarIsOpen}
            sidebarIsOpen={sidebarIsOpen}
          />
          <SidebarVertical
            sidebarIsOpen={sidebarIsOpen}
            setSidebar={setSidebarIsOpen}
          />
        </>
      )}
      {/* Two column layout */}
      {layout == "Two Column" && (
        <>
          <TopBarTwo
            setSidebar={setSidebarIsOpen}
            sidebarIsOpen={sidebarIsOpen}
          />
          <SidebarTwoColumn
            sidebarIsOpen={sidebarIsOpen}
            setSidebar={setSidebarIsOpen}
          />
        </>
      )}

      {/* Hovered Layout */}
      {layout == "Hovered" && (
        <>
          <TopBarThree
            setSidebar={setSidebarIsOpen}
            sidebarIsOpen={sidebarIsOpen}
          />
          <SidebarHovered
            sidebarIsOpen={sidebarIsOpen}
            setSidebar={setSidebarIsOpen}
          />
        </>
      )}
      {/* Detached Layout */}
      {layout == "Detached" && (
        <>
          <TopbarFive
            sidebarIsOpen={sidebarIsOpen}
            setSidebar={setSidebarIsOpen}
          />
          <div
            onClick={() => setSidebarIsOpen(false)}
            className={`absolute xl:hidden w-10 h-10 top-3 md:top-4 ltr:left-3 cursor-pointer rtl:right-3 z-[31] ${
              sidebarIsOpen ? "max-xl:block" : "hidden"
            }`}></div>
        </>
      )}

      {/* main content  */}
      <div
        className={`pt-[72px] md:pt-20 xl:pt-[98px] transition-all duration-500 bg-secondary1/5 dark:bg-bg3  ${
          sidebarIsOpen &&
          layout == "Vertical" &&
          "xl:ltr:ml-[280px] xxxl:ltr:ml-[336px] xl:rtl:mr-[280px] xxxl:rtl:mr-[336px]"
        } ${
          sidebarIsOpen &&
          layout == "Two Column" &&
          "xl:ltr:ml-[280px] xxxl:ltr:ml-[360px] xl:rtl:mr-[280px] xxxl:rtl:mr-[360px]"
        } ${
          sidebarIsOpen && layout == "Hovered" && "xl:ltr:ml-24 xl:rtl:mr-24"
        } ${layout == "Horizontal" && windowSize! > 1400 && "!pt-[172px]"}`}>
        <div
          className={`px-3 relative sm:px-4 xxxl:px-6 py-6 lg:py-8 duration-300 ${
            layout == "Horizontal" && "max-w-[1850px] mx-auto xxl:px-3"
          } ${
            layout == "Detached" &&
            "max-w-[1850px] mx-auto xxl:px-3 grid grid-cols-12 gap-4 xxl:gap-6"
          }`}>
          {layout == "Detached" && (
            <SidebarDetached
              sidebarIsOpen={sidebarIsOpen}
              setSidebar={setSidebarIsOpen}
            />
          )}
          <div
            className={`${layout == "Detached" && "col-span-12"} ${
              sidebarIsOpen &&
              layout == "Detached" &&
              "xl:ltr:ml-[300px] xxl:ltr:ml-[350px] xl:rtl:mr-[300px] xxl:rtl:mr-[350px]"
            }`}>
            {children}
          </div>
        </div>
        <Footer />

        {/* Theme Customizer */}

        {/* <button
          onClick={() => setCustomizerOpen(true)}
          className="fixed ltr:right-4 rtl:left-4 z-50 top-1/2 bg-primary text-n0 w-10 h-10 rounded-full flex items-center justify-center">
          <i className="las la-cog animate-spin-slow"></i>
        </button>

        <Customizer
          setCustomizerOpen={setCustomizerOpen}
          customizerOpen={customizerOpen}
        /> */}
      </div>
    </>
  );
}
