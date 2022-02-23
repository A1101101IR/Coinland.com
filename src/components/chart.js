import { useRef, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Chartjs from "chart.js";

const HistoryChart = () => {
  const chartRef = useRef();
  /* options for our chart */
  const historyOptions = {
    aspectRatio: 2.5,
    lineHeigtAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },
    animation: {
      duration: 1000,
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
    },
    legend: {
      display: false,
    },
  };
  /* const for fetch history func */
  const [historyData, sethistoryData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1",
          {
            params: {
              vs_currency: "usd",
              days: "1",
            },
          }
        )
        .then((res) => {
          sethistoryData(formatData(res.data.prices));
          /* console.log(historyData); */
        })
        .catch((error) => console.log(error)),
    ]);
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Bitcoin price",
              data: sethistoryData,
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

  return <canvas ref={chartRef} className="coin-chart"></canvas>;
};

export default HistoryChart;
