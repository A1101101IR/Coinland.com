import { useRef, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Chartjs from "chart.js";
import useData from "./fetchData";

const HistoryChart = () => {
  const { chartsData, dataIsLoading } = useData();
  const chartRef = useRef();
  /* options for our chart */
  const historyOptions = {
    aspectRatio: 2.4,
    lineHeigtAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },
    animation: {
      duration: 100,
    },
    maintainAspectRation: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: "linear",
          gridLines: {
            display: false,
          },
          ticks: {
            beginZero: false,
            /* ändra padding till 2 och spara för att se små charts i dash navbar */
            padding: 1,
          },
        },
      ],
      yAxes: [
        {
          display: true,
        },
      ],
    },
    legend: {
      display: false,
    },
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Bitcoin price",
              data: chartsData,
              backgroundColor: "rgb(255, 255, 255)",
              borderColor: "rgba(0,0,0)",
              pointRadius: 0,
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: historyOptions,
      });
    }
  }, []);
  return (
    <>
      <canvas ref={chartRef} className="coin-chart"></canvas>
    </>
  );
};

export default HistoryChart;
