import Chartjs from "chart.js";
import { useRef, useEffect, useState } from "react";
import gecko from "./axios";
import MiniChart from "./miniChart";
import { TransactionContext } from "../contexts/TransactionContext";
import Transfer from "./transfer";
import { Routes, Route, Link } from "react-router-dom";
import ChartPage from "./chartPage";

const BigChart = ({ chartsData }) => {
  /* const { chartsData, dataIsLoading } = useData(); */
  const chartRef = useRef();
  /* options for our chart */
  const historyOptions = {
    aspectRatio: 2.3,
    lineHeigtAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },
    animation: {
      duration: 1000,
    },
    maintainAspectRatio: false,
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
            padding: 1,
          },
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
        options: {
          ...historyOptions,
        },
      });
    }
  }, []);
  const renderData = () => {
    return <canvas ref={chartRef} className="coin-chart"></canvas>;
  };
  return renderData();
};

export default BigChart;
