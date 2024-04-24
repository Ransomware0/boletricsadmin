"use client";
// import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import ProgressChart from "./ProgressChart";
import { eventsData } from "@/public/data/demoData";
import { Event } from "@/public/data/types";
import { EventStatus } from "@/public/data/types";
import { useState, useEffect } from "react";

interface StatisticsProps {
  startDate: Date | null;
  endDate: Date | null;
}

const calculateStatistics = (events: Event[], startDateStr: string | Date | null, endDateStr: string | Date | null) => {
  let startDate: Date | null = null;
  let endDate: Date | null = null;

  // Verificar si se proporcionaron fechas de inicio y fin
  if (startDateStr && endDateStr) {
    startDate = new Date(startDateStr);
    endDate = new Date(endDateStr);
  }

  let totalEvents = 0;
  let totalTicketsCreated = 0;
  let totalTicketsSold = 0;
  let totalRevenue = 0;

  events.forEach(event => {
    const eventDate = event.CreateDate ? new Date(event.CreateDate) : null;

    // Verificar si se aplican filtros de fecha y si el evento cumple con esos filtros
    const withinDateRange = (!startDate || !endDate || (eventDate && eventDate >= startDate && eventDate <= endDate));

    if (withinDateRange) {
      if (event.Status === EventStatus.Active || event.Status === EventStatus.Finished) {
        totalEvents++;
        if (event.TicketQuantity !== null && event.TicketQuantity !== undefined) {
          totalTicketsCreated += event.TicketQuantity; // Suma la cantidad de boletos disponibles en cada evento.
        }

        if (event.TicketSales !== null && event.TicketSales !== undefined) {
          totalTicketsSold += event.TicketSales.valueOf(); // Suma solo si event.TicketSales tiene un valor definido
        }
      }

      if (event.Sales !== null && event.Sales !== undefined) {
        totalRevenue += event.Sales.valueOf(); // Suma solo si event.Sales tiene un valor definido
      }
    }
  });

  return {
    totalEvents,
    totalTicketsCreated,
    totalTicketsSold,
    totalRevenue,
  };
};

const Statistics: React.FC<StatisticsProps> = ({ startDate, endDate }) => {

  const { totalEvents, totalTicketsCreated, totalTicketsSold, totalRevenue } = calculateStatistics(eventsData, startDate, endDate);
  const [previousPeriod, setPreviousPeriod] = useState<Event[]>([]);

  useEffect(() => {
    if (startDate && endDate) {

      console.log(startDate, endDate)
      // Convertir las fechas seleccionadas a objetos de fecha
      const startDateString = startDate.toString();
      const startDateParts = startDateString.split('-').map(Number);

      const endDateString = endDate.toString();
      const endDateParts = endDateString.split('-').map(Number);
      // Restar 1 al mes ya que en JavaScript los meses van de 0 a 11
      const startDateObject = new Date(startDateParts[0], startDateParts[1] - 1, startDateParts[2]);
      const endDateObject = new Date(endDateParts[0], endDateParts[1] - 1, endDateParts[2]);

      // Calcular la fecha de inicio y fin del período anterior
      const startPreviousDate = new Date(startDateObject);
      let endPreviousDate = new Date(endDateObject);

      // Obtener el último día del mes del período seleccionado
      const lastDayOfMonth = new Date(endDateObject.getFullYear(), endDateObject.getMonth() + 1, 0).getDate();

      // Obtener el primer día del mes del período seleccionado
      const firstDayOfMonth = 1;

      const monthsDifference = endDateObject.getMonth() - startDateObject.getMonth() + 1;

      if (endDateObject.getDate() === lastDayOfMonth && startDateObject.getDate() === firstDayOfMonth) {
        // Mes completo
        console.log("Mes completo");
        startPreviousDate.setMonth(startPreviousDate.getMonth() - monthsDifference);
        if (monthsDifference === 1) {
          endPreviousDate = new Date(startPreviousDate.getFullYear(), startPreviousDate.getMonth() + 1, 0);
        } else {
          endPreviousDate = new Date(startPreviousDate.getFullYear(), startPreviousDate.getMonth() + monthsDifference, 0);
        }
      } else {
        // Mes incompleto
        console.log("Mes incompleto");
        // Obtener el día de la fecha de inicio
        const startDay = startDateObject.getDate();
        const finalDay = endPreviousDate.getDate();

        // Configurar la fecha de inicio como el mismo día del mes anterior
        startPreviousDate.setMonth(startPreviousDate.getMonth() - monthsDifference);
        startPreviousDate.setDate(startDay);

        // Configurar la fecha de fin como un día antes de la fecha de inicio
        endPreviousDate.setMonth(endPreviousDate.getMonth() - monthsDifference); // Configurar la fecha de fin como el último día del mes anterior
        endPreviousDate.setDate(finalDay);
      }

      console.log("startDate:", startDateObject.toLocaleString("es-MX"));
      console.log("endDate:", endDateObject.toLocaleString("es-MX"));
      console.log("startPreviousDate:", startPreviousDate.toLocaleString("es-MX"));
      console.log("endPreviousDate:", endPreviousDate.toLocaleString("es-MX"));

      // Filtrar los eventos que pertenecen al período anterior
      const eventsInPreviousPeriod = eventsData.filter((event) => {
        const eventDate = event.CreateDate ?? new Date();
        return eventDate >= startPreviousDate && eventDate <= endPreviousDate;
      });

      console.log("Eventos del período anterior:", eventsInPreviousPeriod);

      setPreviousPeriod(eventsInPreviousPeriod);
    }
  }, [startDate, endDate]);


  let percentChangeTotalEvents = 0;
  let percentChangeTotalTicketsSold = 0;
  let percentChangeTotalRevenue = 0;
  let percentChangeTotalTicketsCreated = 0;

  if (startDate && endDate) {
    if (previousPeriod.length > 0) {
      const totalTicketsCreatedPreviousPeriod = previousPeriod.reduce((total, event) => total + (event.TicketQuantity ?? 0), 0);

      percentChangeTotalEvents = ((totalEvents - previousPeriod.length) / previousPeriod.length) * 100;
      percentChangeTotalTicketsSold = ((totalTicketsSold - previousPeriod.reduce((total, event) => total + (event.TicketSales ?? 0), 0)) / previousPeriod.reduce((total, event) => total + (event.TicketSales ?? 0), 0)) * 100;
      percentChangeTotalRevenue = ((totalRevenue - previousPeriod.reduce((total, event) => total + (event.Sales !== null ? event.Sales.valueOf() : 0), 0)) / previousPeriod.reduce((total, event) => total + (event.Sales !== null ? event.Sales.valueOf() : 0), 0)) * 100;
      percentChangeTotalTicketsCreated = ((totalTicketsCreated - totalTicketsCreatedPreviousPeriod) / totalTicketsCreatedPreviousPeriod) * 100;
    } else {
      if (previousPeriod.length === 0 && totalEvents === 0 && totalTicketsSold === 0 && totalRevenue === 0 && totalTicketsCreated === 0) {
        percentChangeTotalEvents = 0;
        percentChangeTotalTicketsSold = 0;
        percentChangeTotalRevenue = 0;
        percentChangeTotalTicketsCreated = 0;
      }
      else {
        // Caso 1: No hay eventos en el periodo anterior
        percentChangeTotalEvents = 100;
        percentChangeTotalTicketsSold = 100;
        percentChangeTotalRevenue = 100;
        percentChangeTotalTicketsCreated = 100;
      }
    }
  } else {
    // Caso 2: No hay fechas y no hay eventos en el periodo anterior ni en el actual
    if (previousPeriod.length === 0 && totalEvents === 0 && totalTicketsSold === 0 && totalRevenue === 0 && totalTicketsCreated === 0) {
      percentChangeTotalEvents = 0;
      percentChangeTotalTicketsSold = 0;
      percentChangeTotalRevenue = 0;
      percentChangeTotalTicketsCreated = 0;
    } else {
      percentChangeTotalEvents = 100;
      percentChangeTotalTicketsSold = 100;
      percentChangeTotalRevenue = 100;
      percentChangeTotalTicketsCreated = 100;
    }
  }


  const statesData = [
    {
      title: "Eventos realizados o por realizar",
      amount: totalEvents.toString(),
      percent: percentChangeTotalEvents.toFixed(2),
      series: percentChangeTotalEvents.toFixed(0),
    },
    {
      title: "Cantidad de boletos creados",
      amount: totalTicketsCreated.toLocaleString(),
      percent: percentChangeTotalTicketsCreated.toFixed(2),
      series: percentChangeTotalTicketsCreated.toFixed(0),
    },
    {
      title: "Cantidad de boletos vendidos",
      amount: totalTicketsSold.toString(),
      percent: percentChangeTotalTicketsSold.toFixed(2),
      series: percentChangeTotalTicketsSold.toFixed(0),
    },
    {
      title: "Ingresos generados",
      amount: totalRevenue.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
      percent: percentChangeTotalRevenue.toFixed(2),
      series: percentChangeTotalRevenue.toFixed(0),
    }
  ];

  return (
    <>
      {statesData.map(({ amount, percent, series, title }) => (
        <div
          key={title}
          className="col-span-12 min-[650px]:col-span-6 xxxl:col-span-3 box bg-n0 dark:bg-bg4 mt-10">
          <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
            <span className="font-medium">{title}</span>
            {/* <OptionsHorizontal /> */}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="h4 mb-4">{amount}</h4>
              <span className={`flex items-center gap-1 whitespace-nowrap ${parseFloat(percent.toString()) < 0 ? 'text-red' : 'text-primary'}`}>
                <i className={`las ${parseFloat(percent.toString()) === 0 ? 'la-arrow-right' : (parseFloat(percent.toString()) < 0 ? 'la-arrow-down' : 'la-arrow-up')} text-lg`}></i> {Math.abs(parseFloat(percent.toString()))}% PROM
              </span>
              <span className="text-xs">Respecto al periodo/mes anterior</span>
            </div>
            <div className="-my-3 shrink-0 ltr:translate-x-3 xl:ltr:translate-x-7 xxxl:ltr:translate-x-2 4xl:ltr:translate-x-9 rtl:-translate-x-3 xl:rtl:-translate-x-7 xxxl:rtl:-translate-x-2 4xl:rtl:-translate-x-9">
              <ProgressChart labels={`${parseFloat(series.toString())}%`} series={parseFloat(series.toString())} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Statistics;
