"use client";
import Dropdown from "@/components/shared/Dropdown";
import Image from "next/image";
import { useState } from "react";
const options = ["Visa", "Payoneer", "Mastercard"];

const cardDetails = {
  "Card Type": "Visa",
  "Card Holder": "Felecia Brown",
  Expires: "12/27",
  "Card Number": "325 541 565 546",
  "Total Balance": "99,245.54 USD",
  "Total Debt": "9,546.45 USD",
};

const CardDetails = () => {
  const [selectedCard, setSelectedCard] = useState(options[0]);
  return (
    <div className="box mb-4 xxl:mb-6">
      <div className="bb-dashed pb-4 mb-4 lg:mb-6 lg:pb-6 flex justify-between items-center">
        <h4 className="h4">Details</h4>
        <Dropdown
          items={options}
          setSelected={setSelectedCard}
          selected={selectedCard}
          btnClass="rounded-[30px]"
          contentClass="w-full min-w-max"
          img={
            <Image
              src="/images/mastercard.png"
              width={20}
              height={20}
              alt="img"
            />
          }
        />
      </div>
      <div className="bb-dashed pb-4 mb-4 lg:mb-6 lg:pb-6 flex flex-col">
        <div className="bg-secondary1 p-4 lg:px-6 lg:py-5 rounded-xl text-n0 relative overflow-hidden after:absolute after:rounded-full after:w-[300px] after:h-[300px] after:bg-[#FFC861] after:top-[45%] after:ltr:left-[65%] after:rtl:right-[65%] mb-6 lg:mb-8">
          <div className="flex justify-between items-start mb-3 sm:mb-4 lg:mb-8 xxxl:mb-14">
            <div>
              <p className="text-xs mb-1">Current Balance</p>
              <h4 className="h4">80,700.00 USD</h4>
            </div>
            <Image
              src="/images/visa-sm.png"
              width={45}
              height={16}
              alt="visa icon"
            />
          </div>
          <Image
            src="/images/mastercard.png"
            width={45}
            height={45}
            alt="visa icon"
          />
          <div className="flex justify-between items-end lg:mt-2">
            <div>
              <p className="mb-1">Felecia Brown</p>
              <p className="text-xs">•••• •••• •••• 8854</p>
            </div>
            <p className="text-n700 relative z-[1]">12/27</p>
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          {Object.entries(cardDetails).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span>{key}:</span> <span className="font-medium">{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="list-disc accent-primary flex flex-col gap-4">
          <li className="flex justify-between items-center">
            <span className="flex gap-2 items-center">
              <span className="text-primary">•</span>{" "}
              <span className="font-semibold">Download Statement</span>
            </span>
            <button className="w-9 h-9 rounded-full bg-primary text-n0">
              <i className="text-lg las la-download"></i>
            </button>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex gap-2 items-center">
              <span className="text-primary">•</span>{" "}
              <span className="font-semibold">Change Password</span>
            </span>
            <button className="w-9 h-9 rounded-full bg-primary/5 border border-n30 dark:border-n500 ">
              <i className="text-lg las la-edit"></i>
            </button>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex gap-2 items-center">
              <span className="text-primary">•</span>{" "}
              <span className="font-semibold">Download Statement</span>
            </span>
            <button className="w-9 h-9 rounded-full bg-primary/5 border border-n30 dark:border-n500 ">
              <i className="text-lg las la-ban"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardDetails;
