"use client";
import Dropdown from "@/components/shared/Dropdown";
import { useState } from "react";
import AccountBalanceChart from "./AccountBalanceChart";
import Statistics from "./Statistics";
const options = ["Last year", "Last month", "Last 5 years"];
const AccountOverview = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="box xl:p-8">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-4 pb-4 xl:pb-6 xl:mb-6 bb-dashed font-medium">
        <h4 className="h4">Accounts Overview</h4>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm md:text-base">Sort By : </p>
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            items={options}
            contentClass="min-w-max"
          />
        </div>
      </div>
      <Statistics />
      <AccountBalanceChart />
    </div>
  );
};

export default AccountOverview;
