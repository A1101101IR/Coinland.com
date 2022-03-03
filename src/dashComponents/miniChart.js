import { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
const MiniChart = ({ chartsData }) => {
  const chartRef = useRef();
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
  /* format coin data to less number */
  /*  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  }; */

  useEffect(() => {
    /* const fetchData = async () => {
      setDataIsLoading(true);
      const chart = await gecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "usd",
          days: "1",
        },
      });
      setChartsData(formatData(chart.data.prices));
      console.log(chart.data.prices);
      setDataIsLoading(false);
    };
    fetchData(); */
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Bitcoin price",
              data: chartsData.bitcoin,
              backgroundColor: "rgb(255, 255, 255)",
              borderColor: "rgba(0,0,0)",
              pointRadius: 0,
              borderWidth: 1.3,
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
  const renderChart = () => {
    /* if (dataIsLoading) {
      return <div>Loading...</div>;
    } */
    return <canvas ref={chartRef} className="coin-chart"></canvas>;
  };
  return renderChart();
};

export default MiniChart;
