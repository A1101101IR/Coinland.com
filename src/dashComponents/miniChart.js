import Chartjs from "chart.js";
import { useRef, useEffect } from "react";

const MiniChart = ({ data }) => {
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

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Bitcoin price",
              data: data,
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
    return <canvas ref={chartRef} className="coin-chart"></canvas>;
  };
  return renderChart();
};

export default MiniChart;
