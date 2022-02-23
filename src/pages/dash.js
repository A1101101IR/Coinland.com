import axios, { Axios } from "axios";
import Coin from "../components/coin";
import React, { useContext, useState, useEffect, useRef } from "react";
import { TransactionContext } from "../contexts/TransactionContext";
import Chartjs from "chart.js";
import HistoryChart from "../components/chart";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    /* if (!addressTo || !amount || !keyword || !message) return; */
    sendTransaction();
  };
  const [coin, setCoin] = useState();
  const [coinData, setcoinData] = useState();
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
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
    Promise.all([
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20shiba-inu%2C%20binance-usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
          /* console.log(res.data); */
          setCoin(res.data);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        })
        .catch((error) => console.log(error)),
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
          setcoinData(formatData(res.data.prices));
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
    <>
      <section className="Dashboard">
        <div className="dash-navbar">
          {coin &&
            coin.slice(0, 4).map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  loading={loading}
                />
              );
            })}
        </div>
        <div className="dash-body">
          <div className="dash-chart">
            {/* {loading && <div className="loading">Loading...</div>}
            {!loading && } */}
            {/* <HistoryChart /> */}
            <canvas ref={chartRef} className="coin-chart"></canvas>
          </div>
          <div className="dash-form-box">
            <div className="dash-form">
              <select>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Bitcoin">eth</option>
                <option value="Bitcoin">usd</option>
              </select>
              <input
                type="text"
                placeholder="Receiver address"
                name="addressTo"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Value"
                name="amount"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Keyword"
                name="keyword"
                onChange={handleChange}
              />
              {/* <input
              type="text"
              className="message-input"
              placeholder="message"
              name="message"
              onChange={handleChange}
            /> */}
              <textarea
                type="text"
                className="message-input"
                placeholder="message"
                name="message"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="dash-form-btn-box">
              {currentAccount && (
                <button type="button" onClick={handleSubmit}>
                  Transfer
                </button>
              )}
              {!currentAccount && (
                <button onClick={connectWallet}>Connect Wallet</button>
              )}
            </div>
          </div>
          <div className="make-transactions">
            <button onClick={connectWallet}>Make a transaction</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
