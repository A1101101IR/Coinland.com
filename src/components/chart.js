import { useRef, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Chartjs from "chart.js";

const HistoryChart = (coinId) => {
  const id = coinId;
  const chartRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
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
  /* const for fetch history func */
  const [coinData, setcoinData] = useState();
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
    console.log(id.coinId);
    const fetchApi = async () => {
      setIsLoading(true);
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id.coinId}/market_chart?vs_currency=usd&days=1`,
          {
            params: {
              vs_currency: "usd",
              days: "1",
            },
          }
        )
        .then((res) => {
          setcoinData(formatData(res.data.prices));
          setIsLoading(false);
        });
    };
    fetchApi();
    /* const interval = setInterval(() => {
      
    }, 1000); */
    console.log(coinData);
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
    <div>
      {coinData && <canvas ref={chartRef} className="coin-chart"></canvas>}
    </div>
  );
};

export default HistoryChart;
