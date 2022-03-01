import { useRef, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Chartjs from "chart.js";

const MiniChart = (chartId) => {
  /* const for fetch history func */
  /* console.log(chartId.chartId); */
  const [coinData, setcoinData] = useState();
  const [loading, setLoading] = useState(false);
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
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
  useEffect(() => {
    /* const fetchApi = async () => {};
    fetchApi(); */
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${chartId.chartId}/market_chart?vs_currency=usd&days=1`,
        {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }
      )
      .then((res) => {
        setcoinData(formatData(res.data.prices));
        console.log(coinData);
        setLoading(false);
      });

    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Bitcoin price",
              data: coinData,
              backgroundColor: "rgb(255, 255, 255)",
              borderColor: "rgba(0,0,0)",
              pointRadius: 0,
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: historyOptions,
      });
    }
  }, []);

  return (
    <>{coinData && <canvas ref={chartRef} className="coin-chart"></canvas>}</>
  );
};

export default MiniChart;
