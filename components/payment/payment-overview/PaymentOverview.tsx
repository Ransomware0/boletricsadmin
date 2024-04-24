"use client";
import Dropdown from "@/components/shared/Dropdown";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = ["Last 15 Days", "Last 1 Month", "Last 6 Month"];
const PaymentOverview = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const chartData: ApexOptions = {
    series: [
      {
        name: "This Year",
        type: "line",
        data: [38, 120, 80, 42, 30, 75, 36, 35, 78, 80, 40, 80],
      },
      {
        name: "Previous Years",
        type: "line",
        data: [94, 32, 20, 135, 68, 22, 40, 43, 30, 64, 50, 87],
      },
      {
        name: "Last 5 Years",
        type: "line",
        data: [10, 40, 34, 50, 48, 61, 68, 90, 148, 48, 90, 30],
      },
    ],
    chart: {
      height: 300,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      itemMargin: {
        horizontal: 15,
      },
      labels: {
        colors: theme == "light" ? "#404A60" : "#EBECEF",
      },
      markers: {
        width: 6,
        height: 6,
        offsetX: -6,
      },
    },
    colors: ["#63CC8A", "#FFC861", "#4371E9"],
    stroke: {
      width: [3, 3, 3],
      curve: "smooth",
      lineCap: "round",
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      tickAmount: 12,
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 150,
      tickAmount: 5,
      labels: {
        offsetX: -17,
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: theme == "dark" ? "#404A60" : "#EBECEF",
      padding: {
        left: -10,
        bottom: 15,
      },
      show: true,
    },
  };
  return (
    <div className="box overflow-x-hidden">
      <div className="flex items-center flex-wrap justify-between gap-3 bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Payment Overview</h4>
        <div className="flex items-center gap-3">
          <span>Sort By : </span>
          <Dropdown
            setSelected={setSelected}
            selected={selected}
            items={options}
          />
        </div>
      </div>
      <ReactApexChart
        height={310}
        width={"100%"}
        series={chartData.series}
        options={chartData}
        type="line"
      />
    </div>
  );
};

export default PaymentOverview;
