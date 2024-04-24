"use client";
import DiscoverApps from "@/components/demo/DiscoverApps";
import Footer from "@/components/demo/Footer";
import Navbar from "@/components/demo/Navbar";
import { demoData } from "@/components/demo/demodata";
import cn from "@/utils/cn";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const DemoPage = () => {
  const { theme } = useTheme();
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* All Demo pages */}
      <section
        id="pages"
        className={`pb-14 xxl:pb-28 bg-n0 dark:bg-bg4 pt-24 lg:pt-40`}>
        <div className="container">
          <div className="max-w-[636px] mx-auto text-center mb-10 lg:mb-14">
            <span className="btn-outline font-semibold py-2 px-4">
              {" "}
              <i className="las la-rocket"></i> Trending & Clean Design Demos
            </span>
            <h2 className="h2 mb-4 lg:mb-6 mt-4">42+ Amazing Demos</h2>
            <p className="text-sm md:text-base">
              BankHub dashboard template built in html language with sass
              supported using gulp except. We have wrote minimal code to improve
              the site performance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 xxl:gap-6">
            {demoData.map(({ id, img, title, url, bgColor, imgDark }) => (
              <Link
                href={url}
                key={id}
                className={cn(
                  "col-span-2 lg:col-span-1 group after:inset-0 after:duration-500 block rounded-xl p-4 lg:p-6 relative after:absolute after:w-full after:h-full after:rounded-xl hover:after:bg-n900 dark:hover:after:bg-n0 hover:after:bg-opacity-30 dark:hover:after:bg-opacity-30",
                  bgColor
                )}>
                <span className="md:px-10 text-sm lg:text-base px-5 py-2.5 xl:py-3.5 rounded-[32px] duration-300 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 bg-primary text-n0 font-semibold cursor-pointer absolute top-1/3 min-[450px]:top-5/12 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                  View Demo Page
                </span>
                <Image
                  src={theme == "dark" ? imgDark : img}
                  alt="page img"
                  className="rounded-xl w-full"
                />
                <h4 className="h4 mt-4 lg:mt-6  text-center">{title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <DiscoverApps />
      <Footer />
    </>
  );
};

export default DemoPage;
