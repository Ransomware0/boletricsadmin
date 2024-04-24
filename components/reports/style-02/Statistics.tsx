"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const statisticsData = [
  {
    title: "Total Balance",
    amount: "$8500",
    growth: "50.8%",
  },
  {
    title: "Total Deposits",
    amount: "$2745",
    growth: "50.8%",
  },
  {
    title: "Yearly In",
    amount: "$5223",
    growth: "50.8%",
  },
  {
    title: "Yearly Out",
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
      width: 3,
      lineCap: "round",
      curve: "smooth",
    },
    series: [
      {
        name: "Series 1",
        data: [26, 36, 50, 28, 32, 23, 34],
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
    <div className="box xxxl:p-8 grid grid-cols-12 xxl:divide-x-2 xxl:rtl:divide-x-reverse bg-primary/5 dark:bg-bg3 rounded-xl border border-n30 dark:border-n500 divide-n30 dark:divide-n500 divide-dashed max-xxl:gap-5 mb-4 xxxl:mb-6">
      {statisticsData.map(({ title, amount, growth }) => (
        <div
          key={title}
          className="col-span-12 sm:col-span-6 xxl:col-span-3 flex items-center justify-between overflow-x-hidden xxl:px-6 first:ltr:pl-0 first:rtl:pr-0 last:ltr:pr-0 last:rtl:pl-0 gap-3">
          <div>
            <p className="font-medium mb-4">{title}</p>
            <div className="flex gap-2 items-center">
              <h4 className="h4">{amount}</h4>
              <span className="text-primary text-sm flex items-center gap-1">
                <i className="las la-arrow-up text-base"></i> {growth}
              </span>
            </div>
          </div>
          <ReactApexChart
            options={chartData}
            series={chartData.series}
            type="area"
            height={60}
            width={"100%"}
          />
        </div>
      ))}
    </div>
  );
};

export default Statistics;
