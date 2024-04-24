import Modal from "@/components/shared/Modal";
import Image from "next/image";

type ModalProps = {
  toggleOpen: () => void;
  open: boolean;
};
const AddCard = ({ toggleOpen, open }: ModalProps) => {
  return (
    <Modal open={open} toggleOpen={toggleOpen} width="max-w-[496px] lg:top-24">
      <div className="mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
        <h4 className="h4">Add Card</h4>
      </div>
      <form>
        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div className="col-span-2">
            <label
              htmlFor="card-number"
              className="md:text-lg font-medium block mb-4">
              Card Number
            </label>
            <div className="bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl relative">
              <input
                type="number"
                className="text-sm w-full px-6 py-2.5 md:py-3 bg-transparent rounded-3xl"
                placeholder="5890 - 6858 - 6332 - 9843"
                id="card-number"
                required
              />
              <Image
                src="/images/mastercard.png"
                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4"
                width={20}
                height={20}
                alt="mastercard"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="holder"
              className="md:text-lg font-medium block mb-4">
              Card Holder
            </label>
            <input
              type="text"
              className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Enter Name"
              id="holder"
              required
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="month"
              className="md:text-lg font-medium block mb-4">
              Month
            </label>
            <input
              type="number"
              className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="12"
              id="month"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="year" className="md:text-lg font-medium block mb-4">
              Year
            </label>
            <input
              type="number"
              className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="2027"
              id="year"
              required
            />
          </div>

          <div className="col-span-2 mt-4">
            <button className="btn flex w-full justify-center" type="submit">
              Add Card
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddCard;
