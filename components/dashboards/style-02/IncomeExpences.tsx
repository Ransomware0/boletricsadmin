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
const IncomeExpences = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const chartData: ApexOptions = {
    series: [
      {
        name: "Total Sales",
        type: "line",
        data: [20, 38, 38, 73, 55, 63, 44, 75, 53, 80, 40, 80],
      },
      {
        name: "Total Expense",
        type: "line",
        data: [85, 66, 76, 38, 86, 35, 62, 40, 40, 64, 50, 87],
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
      show: false,
    },
    colors: ["#63CC8A", "#FFC861"],
    stroke: {
      width: [3, 3],
      curve: "smooth",
      lineCap: "round",
      dashArray: [0, 5],
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
      max: 100,
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
        bottom: -10,
      },
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 570,
        options: {
          chart: {
            height: 240,
          },
        },
      },
    ],
  };
  return (
    <div className="box overflow-x-hidden">
      <div className="flex items-center justify-between flex-wrap gap-3 bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Income and Expenses</h4>
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
        height={300}
        width={"100%"}
        series={chartData.series}
        options={chartData}
        type="line"
      />
    </div>
  );
};

export default IncomeExpences;
