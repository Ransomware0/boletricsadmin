"use client";
import { useLayout } from "@/utils/LayoutContext";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AccountBalanceChart = () => {
  const { theme } = useTheme();
  const { dir } = useLayout();

  const chartData: ApexOptions = {
    series: [
      {
        name: "Recent Year",
        type: "line",
        data: [20, 38, 38, 73, 55, 63, 44, 75, 53, 80, 40, 80],
      },
      {
        name: "Last 5 Years",
        type: "line",
        data: [85, 66, 76, 38, 86, 35, 62, 40, 40, 64, 50, 87],
      },
    ],
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
            text: "Account Balance",
          },
        },
      ],
    },
    chart: {
      height: 300,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      labels: {
        colors: theme == "light" ? "#404A60" : "#EBECEF",
      },
      itemMargin: {
        horizontal: 15,
      },
      markers: {
        width: 6,
        height: 6,
        offsetX: dir == "rtl" ? 6 : -6,
      },
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
        offsetX: 15,
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
        left: dir == "rtl" ? 40 : 30,
        bottom: 20,
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
        breakpoint: 1500,
        options: {
          chart: {
            height: 350,
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
            height: 280,
          },
        },
      },
    ],
  };
  return (
    <ReactApexChart
      height={500}
      width={"100%"}
      series={chartData.series}
      options={chartData}
      type="line"
    />
  );
};

export default AccountBalanceChart;
