import Dropdown from "@/components/shared/Dropdown";
import Modal from "@/components/shared/Modal";
import placeholder from "@/public/images/placeholder.png";
import Image from "next/image";
import { FocusEvent, useState } from "react";
const currencies = ["USD", "GBP", "YEN", "JPN"];
const statuses = ["Active", "Inactive"];

const OpenAccountForm = ({
  toggleOpen,
  open,
}: {
  toggleOpen: () => void;
  open: boolean;
}) => {
  const [currency, setCurrency] = useState(currencies[0]);
  const [status, setStatus] = useState(statuses[0]);
  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    try {
      e.currentTarget.showPicker();
    } catch (error) {}
  };

  return (
    <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1200px]">
      <div className="flex justify-between items-center mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
        <h4 className="h4">Create Bank Account</h4>
      </div>
      <form>
        <p className="text-lg font-medium mb-4">Profile Photo</p>
        <div className="flex flex-wrap items-center gap-5 xl:gap-10 mb-6">
          <Image
            src={placeholder}
            className="w-20 h-20 lg:w-auto lg:h-auto"
            alt="placeholder"
          />
          <div className="flex gap-4">
            <input type="file" name="photo" id="photo" className="hidden" />
            <label htmlFor="photo" className="btn">
              Upload Photo
            </label>
            <button className="btn-outline">Cancel</button>
          </div>
        </div>
        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div className="col-span-2">
            <label htmlFor="name" className="md:text-lg font-medium block mb-4">
              Account Holder Name
            </label>
            <input
              type="text"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Enter Name"
              id="name"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="number"
              className="md:text-lg font-medium block mb-4">
              Phone Number
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Enter Number"
              id="number"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="currency"
              className="md:text-lg font-medium block mb-4">
              Select Currency
            </label>
            <Dropdown
              items={currencies}
              setSelected={setCurrency}
              selected={currency}
              btnClass="rounded-[32px] bg-secondary1/5 dark:bg-bg3 py-2.5 md:py-3 md:px-5"
              contentClass="w-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Interest Rate
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Interest Rate %"
              id="rate"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="expire"
              className="md:text-lg font-medium block mb-4">
              Expiry Date
            </label>
            <input
              type="date"
              onFocus={handleFocus}
              className="w-full  appearance-none relative bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              id="expire"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="amount"
              className="md:text-lg font-medium block mb-4">
              Amount
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Enter Amount"
              id="amount"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="status"
              className="md:text-lg font-medium block mb-4">
              Select Status
            </label>
            <Dropdown
              items={statuses}
              setSelected={setStatus}
              selected={status}
              btnClass="rounded-[32px] bg-primary/5 dark:bg-bg3 md:py-3 md:px-5 text-primary"
              contentClass="w-full"
            />
          </div>
          <div className="col-span-2 mt-4">
            <button className="btn flex w-full justify-center" type="submit">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default OpenAccountForm;
