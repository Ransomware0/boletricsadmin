"use client";
import Dropdown from "@/components/shared/Dropdown";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const cards = ["Visa", "MasterCard", "Payoneer"];
const currencies = ["$", "€", "¥", "£"];
const wallets = [
  "/images/my-wallet-1.png",
  "/images/my-wallet-2.png",
  "/images/my-wallet-3.png",
];
const MyWallet = () => {
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <div className="box">
      <h4 className="h4 bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">My Wallet</h4>
      <div className="flex items-center justify-center gap-3 xxl:gap-4 mb-6 lg:mb-8">
        <button className="prev-wallet w-8 h-8 xxl:w-10 xxl:h-10 shrink-0 text-primary hover:text-n0 border border-primary rounded-full duration-300 dark:hover:bg-primary dark:bg-bg4 bg-n0 hover:bg-primary">
          <i className="las la-angle-left text-lg rtl:rotate-180"></i>
        </button>
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          loop
          modules={[Autoplay, Navigation]}
          speed={1500}
          autoplay={{
            delay: 1400,
          }}
          navigation={{
            prevEl: ".prev-wallet",
            nextEl: ".next-wallet",
          }}>
          {wallets.map((wallet) => (
            <SwiperSlide key={wallet}>
              <div className="flex justify-center">
                <Image
                  src={wallet}
                  width={296}
                  className="rounded-xl"
                  height={200}
                  alt="card img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="next-wallet w-8 h-8 xxl:w-10 xxl:h-10 shrink-0 text-primary hover:text-n0 border border-primary rounded-full duration-300 dark:hover:bg-primary dark:bg-bg4 bg-n0 hover:bg-primary">
          <i className="las la-angle-right rtl:rotate-180 text-lg"></i>
        </button>
      </div>
      <h5 className="text-lg md:text-xl font-medium mb-6">Quick Transfer</h5>
      <form>
        <div className="p-1 rounded-[32px] border border-n30 dark:border-n500 bg-primary/5 dark:bg-bg3 flex gap-4 items-center mb-5">
          <Dropdown
            items={cards}
            selected={selectedCard}
            setSelected={setSelectedCard}
            btnClass="bg-n0 dark:bg-bg4 rounded-[32px] w-[150px]]"
            contentClass="left-0 min-w-max"
          />
          <input
            type="text"
            className="bg-transparent w-full pr-5"
            placeholder="Account Number..."
            name="card"
          />
        </div>
        <div className="p-1 rounded-[32px] border border-n30 dark:border-n500 bg-primary/5 dark:bg-bg3 flex gap-4 items-center mb-6 lg:mb-8">
          <Dropdown
            items={currencies}
            selected={selectedCurrency}
            setSelected={setSelectedCurrency}
            btnClass="bg-n0 dark:bg-bg4 rounded-[32px] max-w-max"
            contentClass="left-0 max-w-max"
          />
          <input
            type="number"
            className="bg-transparent w-full pr-5"
            placeholder="Enter Amount..."
            name="amount"
          />
        </div>
        <button type="submit" className="btn w-full flex justify-center">
          Send Money
        </button>
      </form>
    </div>
  );
};

export default MyWallet;
