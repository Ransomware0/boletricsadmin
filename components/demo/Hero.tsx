"use client";
import chart from "@/public/images/demo/chart.png";
import illustration from "@/public/images/demo/hero-illustration.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Navbar from "./Navbar";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-[url(/images/demo/hero-bg.png)] relative">
      {/* 
      <Image
      className="absolute max-md:hidden top-20 xxl:top-36 right-5 lg:right-[30%]"
      src={rocket}
      alt="banner image"
      />
    */}
      <Image
        className="absolute max-md:hidden bottom-0 right-5 xxl:right-14"
        src={chart}
        alt="banner image"
      />
      <Image
        className="absolute max-xl:hidden bottom-0 left-5"
        src={illustration}
        alt="banner image"
      />
      <div className="bg-gradient-to-b from-primary/20 to-n0 dark:to-[#1B232D] pt-32 md:pt-40 lg:pt-44 pb-14 lg:pb-20">
        <Navbar />
        <div className="container ">
          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="btn-outline font-semibold py-2 px-4">
                {" "}
                <i className="las la-rocket"></i> Kick Start Your Project Using
              </span>
              <h1 className="text-3xl sm:text-4xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6">
                Modern FinTech and Banking Dashboard
              </h1>
              <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
                Welcome to BankHub, where cutting-edge technology meets
                financial convenience. With BankHub, managing your finances
                becomes a seamless experience.
              </p>
              <div className="flex gap-4 justify-center lg:gap-6">
                <Link href="#" className="btn">
                  Purchase Now
                </Link>
                <Link href="#pages" className="btn-outline">
                  View Demos
                </Link>
              </div>
            </div>
            <div className="max-w-7xl mx-auto">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/images/demo/demo-light.png"
                    width={1842}
                    height={1014}
                    alt="Image one"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/images/demo/demo-dark.png"
                    width={1842}
                    height={1014}
                    alt="Image two"
                  />
                }
                boundsPadding={30}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
