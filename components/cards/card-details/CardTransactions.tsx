"use client";
import Dropdown from "@/components/shared/Dropdown";
import { useLayout } from "@/utils/LayoutContext";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
const options = ["Last Weeks", "Last Month", "Last Year"];
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CardTransactionsChart = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const { dir } = useLayout();

  const series = [
    {
      name: "Payment Transaction",
      data: [44, 55, 41, 64, 22, 43, 21],
    },
    {
      name: "Cashout Transaction",
      data: [53, 32, 33, 52, 13, 44, 32],
    },
  ];
  const chartData: ApexOptions = {
    chart: {
      type: "bar",
      height: 352,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        barHeight: 14,
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    fill: {
      colors: ["#20B757", "#FFC861"],
    },
    colors: ["#20B757", "#FFC861"],
    stroke: {
      show: true,
      width: 1,
      colors: theme == "dark" ? ["#404A60"] : ["#EBECEF"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
      axisTicks: {
        color: theme == "dark" ? "#404A60" : "#EBECEF",
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
        offsetX: dir == "rtl" ? -30 : 0,
      },
    },
    legend: {
      itemMargin: {
        horizontal: 20,
      },
      labels: {
        colors: theme == "light" ? "#404A60" : "#EBECEF",
      },
      markers: {
        offsetX: dir == "rtl" ? 8 : -8,
        width: 6,
        height: 6,
        radius: 20,
      },
    },
    grid: {
      borderColor: theme == "dark" ? "#404A60" : "#EBECEF",
      padding: {
        bottom: 20,
      },
    },
  };

  return (
    <div className="box overflow-x-hidden mb-4 xxl:mb-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <h4 className="h4">Card Transactions</h4>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm md:text-base">Sort By : </p>
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            items={options}
            contentClass="w-full"
          />
        </div>
      </div>
      <ReactApexChart
        height={370}
        width={"100%"}
        series={series}
        options={chartData}
        type="bar"
      />
    </div>
  );
};

export default CardTransactionsChart;
