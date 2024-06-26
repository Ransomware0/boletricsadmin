import Dropdown from "@/components/shared/Dropdown";
import Modal from "@/components/shared/Modal";
import { FocusEvent, useState } from "react";
const currencies = ["USD", "GBP", "YEN", "JPN"];
const statuses = ["Active", "Inactive"];

const AddDepositForm = ({
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
    <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1220px]">
      <div className="flex justify-between items-center mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
        <h4 className="h4">Add New Deposit</h4>
      </div>
      <form>
        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div className="col-span-2">
            <label htmlFor="name" className="md:text-lg font-medium block mb-4">
              Deposit Name
            </label>
            <input
              type="text"
              className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-1.5 md:py-3"
              placeholder="Enter Deposit Name"
              id="name"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="number"
              className="md:text-lg font-medium block mb-4">
              Account Number
            </label>
            <input
              type="number"
              className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-1.5 md:py-3"
              placeholder="Enter Account number"
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
              btnClass="rounded-[32px] bg-secondary1/5 dark:bg-bg3 py-2 md:py-3 md:px-5"
              contentClass="w-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Interest Rate
            </label>
            <input
              type="number"
              className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-1.5 md:py-3"
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
              className="w-full text-sm  appearance-none relative bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-1.5 md:py-3"
              id="expire"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="balance"
              className="md:text-lg font-medium block mb-4">
              Account Balance
            </label>
            <input
              type="number"
              className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-1.5 md:py-3"
              placeholder="Enter Balance"
              id="balance"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="interest"
              className="md:text-lg font-medium block mb-4">
              Account Interest
            </label>
            <input
              type="number"
              className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-1.5 md:py-3"
              placeholder="Enter Interest"
              id="interest"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="status"
              className="md:text-lg font-medium block mb-4">
              Status
            </label>
            <Dropdown
              items={statuses}
              setSelected={setStatus}
              selected={status}
              btnClass="rounded-[32px] bg-primary/5 py-2 dark:bg-bg3 md:py-3 md:px-5 text-primary"
              contentClass="w-full"
            />
          </div>
          <div className="col-span-2 mt-4">
            <button className="btn flex w-full justify-center" type="submit">
              Add Deposit
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddDepositForm;
