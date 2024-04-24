import line from "@/public/images/demo/line.png";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
const StartDesign = () => {
  return (
    <div className="container py-14 xl:py-28 rtl:text-left">
      <div className="grid grid-cols-12 gap-6 items-center mb-10 lg:mb-14">
        <div className="col-span-12 md:col-span-6">
          <h2 className="display-4">Mix and match Jump-start your design</h2>
          <h2 className="text-7xl lg:text-[195px] font-semibold text-primary leading-tight">
            42
            <span className="text-[#FFC861] text-7xl lg:text-[195px]">+</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
          <p className="text-secondary1 rotate-6 max-w-[131px] text-center mx-auto">
            the biggest design collection ever built
          </p>
          <Image
            className="relative ltr:left-16 rtl:right-16"
            src={line}
            alt="img"
          />
          <div className="flex items-center gap-4 mt-10 mb-6">
            <div className="bg-[#FFC861] text-n700 w-12 h-12 flex items-center justify-center rounded-full">
              <IconPlayerPlayFilled size={20} />
            </div>
            <p className="font-semibold">See How Its Work</p>
          </div>
          <p className="mb-6">
            We prioritize the security of your financial data. BankHub employs
            state-of-the-art encryption and security measures, ensuring that
            your information{" "}
          </p>
          <Link
            href="/dashboards/style-01"
            className="text-primary font-semibold flex items-center gap-2">
            <span>See It In Action</span>
            <i className="las la-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 items-center text-n500">
        <div className="col-span-12 md:col-span-7 xl:col-span-8 bg-[url(/images/demo/banner-1.png)] bg-cover p-5 sm:p-10 xl:py-20 xl:px-16 flex rtl:justify-end rounded-xl">
          <div>
            <h2 className="display-1 mb-1 pt-10">42+</h2>
            <h4 className="h4 mb-5 lg:mb-10 max-w-[320px]">
              Professionally designed and exclusive sections.
            </h4>
            <Link href="/dashboards/style-01" className="btn">
              View Demos
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 xl:col-span-4 bg-[url(/images/demo/banner-2.png)] h-full bg-cover p-5 sm:p-6 xl:p-10 rounded-xl rtl:justify-end flex items-end">
          <div className="max-w-[192px] pt-32">
            <h4 className="h4 mb-2 lg:mb-4">Super Fast Loading Speed</h4>
            <p className="text-sm">Super Change Your Store with BankHub</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 xl:col-span-4 bg-[url(/images/demo/banner-3.png)] h-full bg-cover p-5 sm:p-6 xl:p-10 rounded-xl rtl:justify-end flex items-end">
          <div className="pt-16">
            <h4 className="h4 mb-2 lg:mb-4 pt-10">
              Optimized for SEO and Performance
            </h4>
            <p className="text-sm">
              Design with SEO best practices in mind to improve your stores
              visibility and rangking.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 xl:col-span-8 bg-[url(/images/demo/banner-4.png)] bg-cover p-5 sm:p-10 xl:py-20 xl:px-16 flex rtl:justify-end rounded-xl">
          <div>
            <h2 className="display-1 mb-1 pt-10">72+</h2>
            <h4 className="h4 mb-5 lg:mb-10 max-w-[320px]">
              Exclusive Unique Mobile Apps Screens
            </h4>
            <Link href="/dashboards/style-01" className="btn">
              View Demos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartDesign;
