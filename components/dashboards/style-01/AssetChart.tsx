"use client";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import { ticketsPaymentsData } from "@/public/data/demoData";

const times = [
  { short: "1M", long: "one_month" },
  { short: "6M", long: "six_months" },
  { short: "1A", long: "one_year" },
  { short: "YTD", long: "ytd" },
  { short: "Todo", long: "all" },
];

// El axis x es el tiempo, mes o dia o año o lo que selecione el usuario.
// El axis y va de 0 un poco más de la cantidad más alta de ventas al día.

const AssetChart = () => {
  const [selection, setSelection] = useState("one_year");
  const { theme } = useTheme();

  // Function to find the minimum and maximum timestamps from ticket data
  const getMinMaxTimestamps = () => {
    const timestamps = ticketsPaymentsData
      .filter((ticket) => ticket.financialStatus === "paid") // Filter paid tickets
      .map((ticket) => ticket.paidDate.getTime());

    return {
      min: Math.min(...timestamps),
      max: Math.max(...timestamps), // Use Math.max for the latest timestamp
    };
  };

  const { min, max } = getMinMaxTimestamps();

  const series = [
    {
      name: "Ventas",
      data: ticketsPaymentsData
        .filter((ticket) => ticket.financialStatus === "paid") // Filtra datos con estado "pagado"
        .reduce((acc, ticket) => {
          const ticketDate = new Date(ticket.paidDate.getFullYear(), ticket.paidDate.getMonth(), ticket.paidDate.getDate());
          const existingEntry = acc.find((entry) => entry[0].getTime() === ticketDate.getTime());
          if (existingEntry) {
            existingEntry[1] += ticket.price as number; // Suma el precio del ticket a la entrada existente
          } else {
            acc.push([ticketDate, ticket.price as number]); // Crea una nueva entrada para la fecha
          }
          return acc;
        }, [] as [Date, number][]) // Inicializa el acumulador como un array vacío de pares [fecha, precio]
    },
  ];

  series[0].data.sort((a, b) => a[0].getTime() - b[0].getTime());

  const chartData: ApexOptions = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
      colors: ["#20B757"],
      curve: "straight",
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 5,
    },
    colors: ["#20B757"],
    xaxis: {
      type: "datetime",
      min: min, // Minimum timestamp from ticket data
      max: max, // Today's timestamp
      tickAmount: 6,
      labels: {
        style: {
          colors: theme === "light" ? "#404A60" : "#EBECEF",
        },
        formatter: (value) => {
          // Function to format the x-axis labels in Spanish
          const date = new Date(value);
          return date.toLocaleDateString("es-MX");
        },

      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: theme === "dark" ? "#404A60" : "#EBECEF",
      },
    },
    yaxis: {
      labels: {
        offsetX: -17,
        style: {
          colors: theme === "light" ? "#404A60" : "#EBECEF",
        },
        formatter: (value) => {
          const numberFormatter = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN', // Assuming Mexican peso
          });

          return numberFormatter.format(value);
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        formatter: (value) => {
          const numberFormatter = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN', // Assuming Mexican peso
          });

          return numberFormatter.format(value);
        },
      },
    },
    fill: {
      type: "gradient",
      colors: ["#20B757"],
      gradient: {
        shadeIntensity: 1,
        shade: theme === "dark" ? "dark" : "light",
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      strokeDashArray: 5,
      padding: {
        left: -6,
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };

  const updateData = (timeline: any) => {
    setSelection(timeline);
    switch (timeline) {
      case "one_month":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date(new Date().getTime() - 2678400000).getTime(), // Un mes atrás
          new Date().getTime()
        );
        break;
      case "six_months":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date(new Date().getTime() - 15778400000).getTime(), // Seis meses atrás
          new Date().getTime()
        );
        break;
      case "one_year":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date(new Date().getTime() - 31556926000).getTime(), // Un año atrás
          new Date().getTime()
        );
        break;
      case "ytd":
        const startOfYear = new Date(new Date().getFullYear(), 0, 0);
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          startOfYear.getTime(),
          new Date().getTime()
        );
        break;
      case "all":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          min,
          max
        );
        break;
      default:
    }
  };

  return (
    <div className="col-span-12 box overflow-x-hidden">
      <div className="flex justify-between flex-wrap gap-3 items-center bb-dashed mb-4 pb-4">
        <h4 className="h4">Ventas por dia</h4>
        <div className="bg-primary/5 rounded-lg border border-n30 dark:border-n500">
          {times.map(({ short, long }) => (
            <button
              key={long}
              onClick={() => updateData(long)}
              className={`text-xs px-4 py-2 font-medium first:rounded-s-lg last:rounded-e-lg ${selection == long && "bg-primary text-n0"
                }`}>
              {short}
            </button>
          ))}
        </div>
      </div>
      <ReactApexChart
        options={chartData}
        series={series}
        type="area"
        width={"100%"}
        height={450}
      />
    </div>
  );
};

export default AssetChart;
