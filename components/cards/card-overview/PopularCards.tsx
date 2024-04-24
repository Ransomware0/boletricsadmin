"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import cn from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import AddCard from "./AddCard";
const cards = [
  {
    id: 1,
    balance: 80700.0,
    expire: "12/27",
    background: "bg-[#4371E9]",
  },
  {
    id: 2,
    balance: 80700.0,
    expire: "12/27",
    background: "bg-[#20B757]",
  },
  {
    id: 3,
    balance: 80700.0,
    expire: "12/27",
    background: "bg-[#47264C]",
  },
  {
    id: 4,
    balance: 80700.0,
    expire: "12/27",
    background: "bg-[#0E777E]",
  },
  {
    id: 5,
    balance: 80700.0,
    expire: "12/27",
    background: "bg-[#5F4607]",
  },
  {
    id: 6,
    balance: 80700.0,
    expire: "12/27",
    background: "bg-[#205CB7]",
  },
  {
    id: 7,
    balance: 80700.0,
    expire: "12/27",
    background: "bg-[#343436]",
  },
];
const PopularCards = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="box">
        <div className="bb-dashed border-secondary1/20 flex justify-between items-center mb-6 pb-6">
          <h4 className="h4">Popular Cards</h4>
          <OptionsHorizontal />
        </div>
        <div className="grid grid-cols-12 gap-4 xxl:gap-6">
          {cards.map(({ id, balance, expire, background }) => (
            <div
              key={id}
              className={cn(
                "col-span-12 text-n0 sm:col-span-6 lg:col-span-4 4xl:col-span-3 rounded-xl p-5 relative overflow-hidden after:absolute after:rounded-full after:w-[300px] after:h-[300px] after:bg-[#FFC861] after:top-[45%] after:ltr:left-[60%] after:rtl:right-[60%]",
                background
              )}>
              <div className="mb-3 sm:mb-6 flex justify-between items-center">
                <div>
                  <p className="text-xs mb-1">Deposits Balance</p>
                  <h4 className="h4">{balance.toLocaleString()}</h4>
                </div>
                <Image
                  src="/images/visa-sm.png"
                  width={36}
                  height={13}
                  className="mb-1"
                  alt="visa"
                />
              </div>
              <div>
                <Image
                  src="/images/mastercard.png"
                  width={45}
                  height={45}
                  className="mb-1"
                  alt="visa"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold mb-1">Felicia Brown</p>
                    <p className="text-xs">•••• •••• •••• 8854</p>
                  </div>
                  <span className="text-n700 relative z-[1]">{expire}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 4xl:col-span-3 border border-dashed self-stretch max-xxxl:py-14 w-full rounded-2xl border-primary bg-primary/10 flex flex-col justify-center items-center text-center h-full">
            <button className="bg-primary text-n0 p-2 rounded-full mb-3">
              <i className="las la-plus"></i>
            </button>
            <p className="font-medium mb-2">Add New Credit Card</p>
            <button
              className="text-sm text-primary"
              onClick={() => setOpenModal(true)}>
              Add Now
            </button>
          </div>
        </div>
      </div>
      <AddCard open={openModal} toggleOpen={() => setOpenModal(false)} />
    </>
  );
};

export default PopularCards;
