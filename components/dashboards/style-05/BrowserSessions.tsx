"use client";
import Dropdown from "@/components/shared/Dropdown";
import { options } from "@/public/data/timesDropdown";
import useWindowSize from "@/utils/useWindowSize";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const browers = [
  {
    icon: "/images/chrome.png",
    percent: "36.87%",
  },
  {
    icon: "/images/firefox.png",
    percent: "9.68%",
  },
  {
    icon: "/images/edge.png",
    percent: "3.25%",
  },
  {
    icon: "/images/opera.png",
    percent: "45.87%",
  },
];
const BrowserSessions = () => {
  const [selected, setSelected] = useState(options[0]);
  const { windowSize } = useWindowSize();
  const { theme } = useTheme();
  const series = [
    {
      name: "Browser Sessions",
      data: [80, 50, 30, 40, 60, 20],
    },
  ];
  const chartData: ApexOptions = {
    xaxis: {
      categories: ["Chrome", "Firefox", "Safari", "Opera", "Edge", "Explorer"],
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#20B757"],
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: theme == "light" ? "#DFE0E4" : "#404A60",
          connectorColors: theme == "light" ? "#DFE0E4" : "#404A60",
          strokeWidth: "2px",
          fill: {
            colors:
              theme == "light"
                ? ["#F4FBF7", "#ffffff"]
                : ["#23262B", "#1D1E24"],
          },
        },
      },
    },
  };
  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <h4 className="h4">Sessions by Browser</h4>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm md:text-base">Sort By : </p>
          <Dropdown
            items={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <div className="overflow-x-hidden flex justify-center flex-col sm:flex-row items-center gap-3 ">
        <div className="grow">
          <ApexChart
            height={windowSize! > 600 ? 400 : 250}
            type="radar"
            width={"100%"}
            options={chartData}
            series={series}
          />
        </div>
        <div className="flex w-[25%] shrink-0 sm:flex-col max-sm:w-full flex-wrap justify-center gap-5">
          {browers.map(({ icon, percent }) => (
            <div key={percent} className="flex items-center gap-2">
              <Image width={24} height={24} src={icon} alt="browser icon" />
              <p>{percent}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowserSessions;
