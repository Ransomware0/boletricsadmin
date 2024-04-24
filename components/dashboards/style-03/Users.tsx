"use client";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import "jsvectormap/dist/maps/world.js";
import { useEffect, useRef } from "react";

const LiveUsers = () => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  useEffect(() => {
    let markers = [
      {
        name: "Egypt",
        coords: [26.8, 30.8],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
      {
        name: "Canada",
        coords: [56.1304, -106.3468],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
      {
        name: "Brazil",
        coords: [-14.235, -51.9253],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
      {
        name: "China",
        coords: [35.8617, 104.1954],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
      {
        name: "United States",
        coords: [37.0902, -95.7129],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
      {
        name: "Russia",
        coords: [61, 105],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
      {
        name: "Greenland",
        coords: [71.706936, -42.604303],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
      {
        name: "Norway",
        coords: [60.472024, 8.468946],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
      {
        name: "Ukraine",
        coords: [48.379433, 31.16558],
        style: {
          fill: "#20B757",
          stroke: "rgba(255, 255, 255, 0.50)",
        },
      },
    ];
    let lines = [
      { from: "Egypt", to: "Canada" },
      { from: "Egypt", to: "Russia" },
      { from: "Egypt", to: "China" },
      { from: "Egypt", to: "United States" },
      { from: "Egypt", to: "Greenland" },
      { from: "Egypt", to: "Norway" },
      { from: "Egypt", to: "Ukraine" },
      { from: "Egypt", to: "Brazil" },
    ];
    if (mapContainer.current && !mapInstance.current) {
      mapInstance.current = new jsVectorMap({
        map: "world",
        selector: mapContainer.current,
        // -------- Marker and label style --------
        markers: markers,
        lines: lines,
        zoomButtons: false,
        onLoaded(map: any) {
          window.addEventListener("resize", () => {
            map.updateSize();
          });
        },
        lineStyle: {
          stroke: "#20B757",
          strokeWidth: 1,
          fill: "#20B757",
          //     fillOpacity: 1,
          strokeDasharray: "6 3 6", // OR: [6, 2, 6]
          animation: true, // Enables animation
        },
        regionStyle: {
          initial: {
            fill: "rgba(32, 183, 87, 0.3)",
          },
          hover: { fill: "rgba(32, 183, 87, 1)" },
        },
      });
    }
  }, []);

  return (
    <div className="col-span-12 lg:col-span-6 box">
      <div className="flex items-center justify-between pb-6 bb-dashed">
        <h4 className="h4">Live Users By Country</h4>
        <OptionsHorizontal />
      </div>
      <div
        ref={mapContainer}
        className="max-lg:py-5 max-md:max-h-[400px] max-sm:max-h-[300px]"></div>
    </div>
  );
};

export default LiveUsers;
