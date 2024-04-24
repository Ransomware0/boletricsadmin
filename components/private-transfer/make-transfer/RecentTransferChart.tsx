"use client";
import Dropdown from "@/components/shared/Dropdown";
import { useLayout } from "@/utils/LayoutContext";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const sortOptions = ["Recent", "Name", "Amount"];
const RecentTransferChart = () => {
  const [selected, setSelected] = useState(sortOptions[0]);
  const { theme } = useTheme();
  const { dir } = useLayout();
  const series = [
    {
      name: "Peter",
      data: [
        null,
        44,
        31,
        38,
        null,
        34,
        55,
        51,
        67,
        21,
        35,
        null,
        null,
        12,
        4,
        16,
        null,
        8,
        36,
        null,
        null,
        16,
        null,
      ],
    },
  ];
  const chartData: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeout",
      },
    },
    annotations: {
      xaxis: [
        {
          strokeDashArray: 0,
          borderWidth: 0,
          label: {
            borderColor: "#775DD0",
            borderWidth: 0,
            offsetX: -40,
            offsetY: 120,
            style: {
              color: "#fff",
              background: "none",
              fontSize: "12px",
            },
            text: "Average Transfer",
          },
        },
      ],
    },
    markers: {
      width: 8,
      height: 8,
      radius: 50,
      shape: "circle",
      size: 8,
      strokeColors: theme == "light" ? "#EBECEF" : "#404A60",
    },
    stroke: {
      width: [4],
      curve: "straight",
    },
    legend: {
      show: false,
    },
    labels: [
      "23 Dec",
      "25 Dec",
      "29 Dec",
      "31 Dec",
      "02 Jan",
      "04 Jan",
      "06 Jan",
      "08 Jan",
      "10 Jan",
      "12 Jan",
      "15 Dec",
      "19 Dec",
      "21 Dec",
      "22 Jan",
      "24 Jan",
      "26 Jan",
      "28 Jan",
      "31 Jan",
      "02 Feb",
      "04 Feb",
      "06 Feb",
      "04 Feb",
      "08 Feb",
    ],
    colors: ["#20B757"],
    xaxis: {
      tickAmount: 11,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: theme == "light" ? "#EBECEF" : "#404A60",
      },
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 340,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 360,
          },
        },
      },
      {
        breakpoint: 570,
        options: {
          chart: {
            height: 280,
          },
        },
      },
    ],
    yaxis: {
      tickAmount: 4,
      min: 0,
      max: 80,
      labels: {
        offsetX: 20,
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
    },
    grid: {
      borderColor: theme == "light" ? "#EBECEF" : "#404A60",
      padding: {
        left: dir == "rtl" ? 40 : 30,
      },
    },
  };

  return (
    <div className="col-span-12 box overflow-x-hidden">
      <div className="flex justify-between flex-wrap gap-5 items-center bb-dashed mb-4 pb-4">
        <h4 className="h4">Recent transfer</h4>
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span>Sort By : </span>
          <Dropdown
            setSelected={setSelected}
            selected={selected}
            items={sortOptions}
            btnClass="rounded-[32px] bg-primary/5 md:py-3"
            contentClass="w-full"
          />
        </div>
      </div>
      <ReactApexChart
        options={chartData}
        series={series}
        type="line"
        width={"100%"}
        height={470}
      />
    </div>
  );
};

export default RecentTransferChart;
