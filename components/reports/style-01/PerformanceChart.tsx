"use client";
import Dropdown from "@/components/shared/Dropdown";
import { useLayout } from "@/utils/LayoutContext";
import useWindowSize from "@/utils/useWindowSize";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const options = ["Last year", "Last month", "Last 5 years"];
const PerformanceChart = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const { windowSize } = useWindowSize();
  const { dir } = useLayout();

  const chartData: ApexOptions = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      height: 355,
      type: "polarArea",
    },
    colors: [
      "#5D69F4",
      "#00998B",
      "#FFC861",
      "#FF6161",
      "#8169D3",
      "#5D69F4",
      "#00998B",
      "#FFC861",
      "#FF6161",
    ],
    labels: [
      "US Dollar (USD)",
      "Euro (EUR)",
      "British Pound (GBP)",
      "Japanese Yen (JPY)",
      "Chinese Yuan (CNY)",
      "Canadian Dollar (CAD)",
      "Russian Ruble (RUB)",
      "Swedish Krona (SEK)",
      "Spanish Pesatas (ESP)",
    ],
    stroke: {
      colors: theme == "dark" ? ["#404A60"] : ["#EBECEF"],
      width: 2,
    },
    fill: {
      opacity: 1,
    },
    responsive: [
      {
        breakpoint: 1820,
        options: {
          chart: {
            height: 450,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 500,
          },
        },
      },
    ],
    dataLabels: {
      enabled: true,
      style: {
        colors: theme != "dark" ? ["#343E56"] : ["#EBECEF"],
        fontSize: "12px",
      },
      textAnchor: "end",
      background: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: theme == "dark" ? "#343E56" : "#EBECEF",
        },
        spokes: {
          strokeWidth: 1,
          connectorColors: theme == "dark" ? "#343E56" : "#EBECEF",
        },
      },
    },
    legend: {
      offsetX: windowSize! > 1500 ? 10 : 0,
      offsetY: windowSize! > 767 ? 6 : windowSize! > 1500 ? 14 : 0,
      itemMargin: {
        vertical: windowSize! > 767 ? 2 : windowSize! > 1500 ? 4 : 0,
      },
      horizontalAlign: "center",
      position: windowSize! > 1500 ? "right" : "bottom",
      labels: {
        colors: theme == "light" ? "#404A60" : "#EBECEF",
      },
      markers: {
        width: 5,
        height: 5,
        offsetX: dir == "rtl" ? 6 : -6,
      },
    },
  };
  return (
    <div className="col-span-12 lg:col-span-6 box overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <h4 className="h4">Performance</h4>
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
        height={370}
        width={"100%"}
        series={chartData.series}
        options={chartData}
        type="polarArea"
      />
    </div>
  );
};

export default PerformanceChart;
