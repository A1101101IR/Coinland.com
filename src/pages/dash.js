import Chartjs from "chart.js";
import axios, { Axios } from "axios";
import Coin from "../components/coin";
import HistoryChart from "../components/chart";
import { TransactionContext } from "../contexts/TransactionContext";
import React, { useContext, useState, useEffect, useRef } from "react";

const Dashboard = () => {
  const chartRef = useRef();
  const [coin, setCoin] = useState();
  const [coinData, setcoinData] = useState();
  const [loading, setLoading] = useState(false);

  /* declarering needed const from our transactionscontext */
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);

  /* handelsubmit for transfer form data */
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    /* if (!addressTo || !amount || !keyword || !message) return; */
    sendTransaction();
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

  /* options for our chart */
  const historyOptions = {
    aspectRatio: 2.4,
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

  /* useEffetct for fetching api and create chart */

  useEffect(() => {
    setLoading(true);
    /* fetch coin data */
    Promise.all([
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana%2C%20cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
          setCoin(res.data);
          setTimeout(() => {
            setLoading(false);
          }, 0);
        }),
      axios
        /* den behövs inte, men vill ha kvar tills jag ar klar med resten. */
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

    /* create chart */
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Bitcoin price",
              data: coinData,
              backgroundColor: "rgb(255, 255, 255)",
              borderColor: "rgba(3,0,0)",
              pointRadius: 0,
              /* ändra borderWidth till 2 och spara för att få den stora charten visa datan. */
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: historyOptions,
      });
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <section className="Dashbord">Loading...</section>}
      {!loading && (
        <section className="Dashboard">
          {/* loops small coin dash */}
          <div className="dash-navbar">
            {coin &&
              coin.slice(0, 3).map((coin) => {
                return (
                  <>
                    <Coin
                      key={coin.id}
                      coinId={coin.id}
                      name={coin.name}
                      image={coin.image}
                      price={coin.current_price}
                    />
                  </>
                );
              })}
          </div>
          <div className="dash-body">
            {/* display big chart */}
            <div className="dash-chart">
              {!coinData && <div>Loading...</div>}
              {coinData && (
                <canvas ref={chartRef} className="coin-chart"></canvas>
              )}
              {/* <HistoryChart /> */}
            </div>
            {/* transfer from and box */}
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
                <textarea
                  type="text"
                  className="message-input"
                  placeholder="message"
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>
              {/* show Transfer btn if user is connected to wallet, else show connect wallet btn */}
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
      )}
    </>
  );
};

export default Dashboard;
