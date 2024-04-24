"use client";
import Dropdown from "@/components/shared/Dropdown";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const templateList = ["Web Design", "Marketing", "UI/UX Design"];
const categoryList = ["Design", "Development", "Uncategorized"];

const AddInvoice = () => {
  const [template, setTemplate] = useState(templateList[0]);
  const [category, setCategory] = useState(categoryList[0]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  return (
    <div className="box mb-4 xxxl:mb-6">
      <div className="mb-6 pb-6 bb-dashed flex justify-between items-center">
        <h4 className="h4">Add New Invoice</h4>
        <OptionsHorizontal />
      </div>
      <form className="flex flex-col gap-6">
        <div className="box bg-secondary1/5 dark:bg-bg3 xl:p-8 grid grid-cols-2 gap-4 xxl:gap-6">
          <div className="col-span-2 flex justify-center items-center gap-6">
            <div className="w-full h-px bg-secondary1 bg-opacity-[0.15]"></div>
            <span className="btn-white dark:bg-bg4 text-secondary1 font-semibold hover:text-secondary1">
              Template
            </span>
            <div className="w-full h-px bg-secondary1 bg-opacity-[0.15] "></div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="template"
              className="mb-4 md:text-lg font-medium block">
              Template
            </label>
            <Dropdown
              items={templateList}
              setSelected={setTemplate}
              selected={template}
              btnClass="bg-n0 dark:bg-bg4 rounded-[32px] w-full py-2.5 md:py-3 md:px-5 !text-sm"
              contentClass="w-full"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="category"
              className="mb-4 md:text-lg font-medium block">
              Category
            </label>
            <Dropdown
              items={categoryList}
              setSelected={setCategory}
              selected={category}
              btnClass="bg-n0 dark:bg-bg4 rounded-[32px] py-2.5 w-full md:py-3 md:px-5 !text-sm"
              contentClass="w-full"
            />
          </div>
        </div>

        <div className="box bg-secondary1/5 dark:bg-bg3 xl:p-8 grid grid-cols-2 gap-4 xxl:gap-6">
          <div className="col-span-2 flex justify-center items-center gap-6">
            <div className="w-full h-px bg-secondary1 bg-opacity-[0.15]"></div>
            <span className="btn-white dark:bg-bg4 shrink-0 text-secondary1 font-semibold hover:text-secondary1">
              Company Details
            </span>
            <div className="w-full h-px bg-secondary1 bg-opacity-[0.15] "></div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="invoice"
              className="md:text-lg font-medium block mb-4">
              Invoice Number
            </label>
            <input
              type="number"
              className="w-full text-sm  bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
              placeholder="Enter Number"
              id="invoice"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="date" className="md:text-lg font-medium block mb-4">
              Due Date
            </label>
            <div className="relative bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl">
              <DatePicker
                placeholderText="Select Date"
                selected={startDate}
                popperClassName="max-w-[240px] dark:bg-bg4"
                onFocus={() => setIsDatePickerOpen(true)}
                open={isDatePickerOpen}
                wrapperClassName="dark:bg-bg4 rounded-[32px]"
                onClickOutside={() => setIsDatePickerOpen(false)}
                className="w-full py-2 md:py-3 px-3 lg:px-6 rounded-[32px] dark:bg-bg4 text-sm"
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
            <label htmlFor="name" className="md:text-lg font-medium block mb-4">
              Company Name
            </label>
            <input
              type="text"
              className="w-full text-sm  bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
              placeholder="Enter Name"
              id="name"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="address"
              className="md:text-lg font-medium block mb-4">
              Enter Address
            </label>
            <input
              type="text"
              className="w-full text-sm  bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
              placeholder="Enter Address"
              id="address"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="email"
              className="md:text-lg font-medium block mb-4">
              Contact Email
            </label>
            <input
              type="email"
              className="w-full text-sm  bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
              placeholder="Enter Email"
              id="email"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="number"
              className="md:text-lg font-medium block mb-4">
              Contact Number
            </label>
            <input
              type="number"
              className="w-full text-sm  bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
              placeholder="Enter Email"
              id="number"
              required
            />
          </div>
        </div>
        <div className="box bg-secondary1/5 dark:bg-bg3 xl:p-8 grid grid-cols-2 gap-4 xxl:gap-6">
          <div className="col-span-2 flex justify-center items-center gap-6">
            <div className="w-full h-px bg-secondary1 bg-opacity-[0.15]"></div>
            <span className="btn-white dark:bg-bg4 shrink-0 text-secondary1 font-semibold hover:text-secondary1">
              Service
            </span>
            <div className="w-full h-px bg-secondary1 bg-opacity-[0.15] "></div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="money"
              className="md:text-lg font-medium block mb-4">
              Enter Money
            </label>
            <input
              type="number"
              className="w-full text-sm  bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
              placeholder="Enter Money"
              id="money"
              required
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Rate
            </label>
            <input
              type="number"
              className="w-full text-sm  bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
              placeholder="Enter Rate"
              id="rate"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="desc" className="md:text-lg font-medium block mb-4">
              Enter Description
            </label>
            <textarea
              className="w-full text-sm  bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
              placeholder="Enter Description..."
              rows={5}
              id="desc"
              required></textarea>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 mt-2">
          <button className="btn" type="submit">
            Send Invoice
          </button>
          <button className="btn-outline">Save as Draft</button>
        </div>
      </form>
    </div>
  );
};

export default AddInvoice;
