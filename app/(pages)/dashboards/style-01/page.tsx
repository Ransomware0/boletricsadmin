"use client"

import React, { useState } from "react";
import AssetChart from "@/components/dashboards/style-01/AssetChart";
import LatestTransactions from "@/components/dashboards/style-01/LatestTransactions";
import Statistics from "@/components/dashboards/style-01/Statistics";
import TransactionAccount from "@/components/dashboards/style-01/TransactionAccount";
import Banner from "@/components/shared/Banner";
import DateFilter from "@/utils/DateTimePicker";

const Page: React.FC = () => {

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateFilter = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <Banner title="Dashboard" />
      <DateFilter handleDateFilter={handleDateFilter} startDate={startDate} endDate={endDate} />
      <div className="grid grid-cols-12 gap-2 xxl:gap-3">
        <Statistics startDate={startDate} endDate={endDate} />
        <AssetChart />
        <div className="col-span-12 lg:col-span-6 xl:col-span-8">
          <LatestTransactions />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          <TransactionAccount />
        </div>
      </div>
    </div>
  );
};

export default Page;
