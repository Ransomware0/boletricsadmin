"use client";
import Dropdown from "@/components/shared/Dropdown";
import { options } from "@/public/data/timesDropdown";
import useWindowSize from "@/utils/useWindowSize";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TransactionOverview = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const { windowSize } = useWindowSize();

  const series = [
    {
      name: "Website Blog",
      type: "column",
      data: [40, 50, 44, 31, 22, 43, 20, 35, 22, 32, 30, 16],
    },
    {
      name: "chart 2",
      type: "area",
      data: [15, 28, 20, 25, 18, 30, 22, 36, 32, 46, 30, 27],
    },
    {
      name: "Social Media",
      type: "line",
      data: [5, 8, 6, 5, 7, 8, 7, 6, 8, 4, 6, 3],
    },
  ];
  const chartData: ApexOptions = {
    chart: {
      width: "100%",
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    plotOptions: {
      bar: {
        columnWidth:
          windowSize! < 768 ? "10" : windowSize! < 1400 ? "13" : "20",
        dataLabels: {
          position: "center",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 3, 3],
      colors: ["#20B757", "#FFC861", "#4371E9"],
      dashArray: [0, 0, 10],
      curve: ["straight", "straight", "smooth"],
    },

    legend: {
      show: false,
    },
    xaxis: {
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
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: theme == "dark" ? "#404A60" : "#EBECEF",
      },
    },
    yaxis: [
      {
        seriesName: "Website Blog",
        labels: {
          offsetX: -40,
          show: windowSize! > 768 ? true : false,
          style: {
            colors: theme == "light" ? "#404A60" : "#EBECEF",
          },
        },
      },
      {
        seriesName: "chart 2",
        max: 70,
        labels: {
          show: false,
        },
      },
      {
        seriesName: "Social Media",
        max: 30,
        labels: {
          show: false,
        },
      },
    ],
    colors: ["#20B757", "#FFC861"],
    fill: {
      colors: ["#20B757", "#FFC861", "#4371E9"],
      opacity: [1, 0.1, 1],
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 350,
          },
        },
      },
      {
        breakpoint: 570,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
    grid: {
      borderColor: theme == "dark" ? "#404A60" : "#EBECEF",
      padding: {
        left: -20,
      },
    },
  };
  return (
    <div className="col-span-12 lg:col-span-6 box overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Transaction Overview</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm md:text-base">Sort By : </p>
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            items={options}
          />
        </div>
      </div>
      <ReactApexChart
        height={330}
        width={"100%"}
        options={chartData}
        series={series}
        type="line"
      />
    </div>
  );
};

export default TransactionOverview;
