import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
type limitType = {
  title: string;
  desc: string;
  total: number;
  limit: number;
};
const SingleLimit = ({ desc, limit, title, total }: limitType) => {
  const [value, setValue] = useState([limit, total]);
  const handleChange = (event: any) => {
    setValue(event);
  };
  return (
    <div
      key={title}
      className="bg-primary/5 grow dark:bg-bg3 border rounded-xl gap-4 flex-wrap border-n30 dark:border-n500 p-4 md:p-6 xl:px-8 flex items-center justify-between">
      <div>
        <p className="text-sm mb-2">{title}</p>
        <p className="font-medium text-xl">{desc}</p>
      </div>
      <div className="flex items-center max-sm:flex-wrap gap-4 grow sm:justify-end">
        <h5 className="text-xl font-medium whitespace-nowrap">
          <span>
            {" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(value[1])}
          </span>{" "}
          /{" "}
          <span className="text-primary">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(total)}
          </span>
        </h5>
        <div id="range" className="grow max-w-[203px] w-full">
          <RangeSlider
            className="single-thumb"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            defaultValue={[6]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            min={6}
            max={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleLimit;
