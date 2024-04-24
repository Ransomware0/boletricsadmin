"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import { useLayout } from "@/utils/LayoutContext";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DepositBalance = () => {
  const { theme } = useTheme();
  const { dir } = useLayout();

  const series = [76, 67, 61, 90];
  const chartData: ApexOptions = {
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        track: {
          background: theme == "dark" ? "#343E56" : "#EBECEF",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#4371E9", "#FFC861", "#20B757", "#FF6161"],
    labels: ["23,232 USD", "12,326 EUR", "9,235 GBP", "11,458 RUB"],
    legend: {
      show: true,
      floating: true,
      fontSize: "13px",
      position: "left",
      offsetX: dir == "rtl" ? 50 : 55,
      offsetY: -5,
      markers: {
        width: 6,
        height: 6,
        offsetY: -3,
        offsetX: dir == "rtl" ? 4 : -4,
      },
      width: 200,
      labels: {
        useSeriesColors: true,
      },
      formatter: function (seriesName, opts) {
        return seriesName;
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <div className="box col-span-12 md:col-span-5 xxl:col-span-4">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <h4 className="h4">Deposits Balance</h4>
        <OptionsHorizontal />
      </div>
      <div className="max-w-[450px] mx-auto deposit-balance">
        <ReactApexChart
          height={360}
          width={"100%"}
          series={series}
          options={chartData}
          type="radialBar"
        />
      </div>
    </div>
  );
};

export default DepositBalance;
