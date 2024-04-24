"use client";
import Dropdown from "@/components/shared/Dropdown";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const currencylist = ["USD", "GBP", "EURO"];
const AddContact = () => {
  const [currency, setCurrency] = useState(currencylist[0]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  return (
    <div className="box mb-4 xxxl:mb-6">
      <div className="mb-6 pb-6 bb-dashed flex justify-between items-center">
        <h4 className="h4">Add New Contact</h4>
        <OptionsHorizontal />
      </div>
      <form className="grid grid-cols-2 gap-4 xxxl:gap-6">
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="name" className="mb-4 md:text-lg font-medium block">
            Account Holder Name
          </label>
          <input
            type="text"
            className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
            placeholder="Enter name"
            id="name"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="account"
            className="mb-4 md:text-lg font-medium block">
            Account Number
          </label>
          <input
            type="number"
            className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
            placeholder="Enter Account"
            id="account"
            required
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <label htmlFor="number" className="md:text-lg font-medium block mb-4">
            Phone Number
          </label>
          <input
            type="number"
            className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
            placeholder="Enter Number"
            id="number"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="currency"
            className="mb-4 md:text-lg font-medium block">
            Currency
          </label>
          <Dropdown
            items={currencylist}
            setSelected={setCurrency}
            selected={currency}
            btnClass="bg-secondary1/5 rounded-[32px] w-full py-2.5 md:py-3 md:px-5 dark:bg-bg3 !text-sm"
            contentClass="w-full"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
            Interest Rate
          </label>
          <input
            type="number"
            className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
            placeholder="Enter Rate %"
            id="rate"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="date" className="md:text-lg font-medium block mb-4">
            Expiry Date
          </label>
          <div className="relative bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl">
            <DatePicker
              placeholderText="Select Date"
              selected={startDate}
              popperClassName="max-w-[240px] dark:bg-bg4"
              onFocus={() => setIsDatePickerOpen(true)}
              open={isDatePickerOpen}
              wrapperClassName="dark:bg-bg3 rounded-[32px]"
              onClickOutside={() => setIsDatePickerOpen(false)}
              className="w-full text-sm py-2 md:py-3 px-3 lg:px-6 rounded-[32px] bg-transparent  dark:bg-transparent"
              onChange={(date) => setStartDate(date)}
              onSelect={() => setIsDatePickerOpen(false)}
              calendarClassName="dark:bg-bg4 dark:text-n30 dark:border-n500"
              dayClassName={(date) => "dark:text-n0"}
            />
            <i
              className="las la-calendar absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}></i>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="deposits"
            className="md:text-lg font-medium block mb-4">
            Current Deposits
          </label>
          <input
            type="number"
            className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
            placeholder="Enter Deposits"
            id="deposits"
            required
          />
        </div>
        <div className="col-span-2 flex gap-4 md:gap-6 mt-2">
          <button className="btn" type="submit">
            Create Account
          </button>
          <button className="btn-outline" type="reset">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
