"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const statisticsData = [
  {
    title: "Total Income",
    amount: "$8500",
    growth: "50.8%",
  },
  {
    title: "Total Spending",
    amount: "$2745",
    growth: "50.8%",
  },
  {
    title: "Total Transactions",
    amount: "$5223",
    growth: "50.8%",
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
      width: 2,
      curve: "smooth",
    },
    series: [
      {
        name: "Series 1",
        data: [
          24, 26, 32, 36, 37, 44, 50, 49, 44, 40, 32, 28, 32, 34, 28, 23, 22,
          28, 34, 35,
        ],
      },
    ],
    tooltip: {
      enabled: false,
    },
    colors: ["#20B757"],
    fill: {
      colors: ["#20B757"],
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.3,
        gradientToColors: undefined,
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [],
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
      max: 50,
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
    <div className="xxl:box 4xl:p-8 p-0 xxl:p-4 grid grid-cols-6 xxl:divide-x-2 xxl:rtl:divide-x-reverse xxl:ltr:divide-n30 xxl:dark:divide-n500 xxl:divide-dashed max-xxl:gap-4">
      {statisticsData.map(({ title, amount, growth }) => (
        <div
          key={title}
          className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3 xxl:col-span-2 max-xxl:box flex justify-between items-center overflow-x-hidden xxl:px-4 xxl:ltr:first:pl-0 xxl:last:ltr:pr-0 gap-3">
          <div>
            <p className="font-medium mb-4">{title}</p>
            <div className="flex gap-2 items-center">
              <h4 className="h4">{amount}</h4>
              <span className="text-primary text-sm flex items-center gap-1">
                <i className="las la-arrow-up text-base"></i> {growth}
              </span>
            </div>
          </div>
          <div className="max-w-[200px]">
            <ReactApexChart
              options={chartData}
              series={chartData.series}
              type="area"
              height={60}
              width={"100%"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
