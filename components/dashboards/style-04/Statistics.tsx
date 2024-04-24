"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import cn from "@/utils/cn";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const statesData = [
  {
    title: "Total Income",
    amount: "971.28 USD",
    percent: 35.7,
  },
  {
    title: "Total Spending",
    amount: "771.28 USD",
    percent: 45.2,
  },
  {
    title: "Spending Goal",
    amount: "1271.28 USD",
    percent: 25.7,
  },
  {
    title: "Total Transactions",
    amount: "1871.28 USD",
    percent: 50.7,
  },
];
const Statistics = () => {
  const chartData: ApexOptions = {
    chart: {
      height: "100%",
      type: "area",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    series: [
      {
        name: "Series 1",
        data: [8, 16, 12, 34, 22, 18],
      },
    ],
    tooltip: {
      enabled: false,
    },
    fill: {
      // colors: [
      //   function ({ value }: { value: number }) {
      //     return value > 31
      //       ? "rgba(32, 183, 87, 1)"
      //       : "rgba(32, 183, 87, 0.21)";
      //   },
      // ],
      colors: ["rgba(32, 183, 87, 0.30)"],
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 34,
      tooltip: {
        enabled: false,
        // followCursor: true
      },
      labels: {
        show: false,
      },
    },
  };
  return (
    <div className="grid grid-cols-2 gap-4 xxl:gap-6 mb-4 xxl:mb-6">
      {statesData.map(({ amount, percent, title }) => (
        <div
          key={title}
          className="col-span-2 sm:col-span-1 box bg-n0 dark:bg-bg4">
          <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
            <span className="font-medium">{title}</span>
            <OptionsHorizontal />
          </div>
          <div className="flex items-center justify-between gap-4 xl:gap-6">
            <div>
              <h4 className="h4 mb-4">{amount}</h4>
              <span className={cn("flex items-center gap-1 whitespace-nowrap")}>
                <i className="las la-arrow-up text-lg"></i> {percent}%
              </span>
            </div>
            <ReactApexChart
              options={chartData}
              series={chartData.series}
              type="bar"
              height={60}
              width={126}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
