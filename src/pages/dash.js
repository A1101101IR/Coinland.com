import {
  TransactionContext,
  TrendingCoins,
} from "../contexts/TransactionContext";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import Coin from "../components/coin";

const Dashboard = () => {
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

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20shiba-inu%2C%20binance-usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setCoin(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
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
              />
            );
          })}
      </div>
      <div className="dash-body">
        <div className="dash-chart"></div>
        <div className="dash-form-box">
          <div className="dash-form">
            <input type="text" name="addressTo" onChange={handleChange} />
            <input type="number" name="amount" onChange={handleChange} />
            <input type="text" name="keyword" onChange={handleChange} />
            <input type="text" name="message" onChange={handleChange} />
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
      </div>
    </section>
  );
};

export default Dashboard;
