import axios, { Axios } from "axios";
import Coin from "../components/coin";
import React, { useContext, useState, useEffect } from "react";
import { TransactionContext } from "../contexts/TransactionContext";

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

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20shiba-inu%2C%20binance-usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )

      .then((res) => {
        console.log(res.data);
        setCoin(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => console.log(error));
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
            {loading && <div className="loading">Loading...</div>}
            {!loading && (
              <p>
                Vi har ett fungerande login via Metamask, jag har jobbat med en
                smart contract under helgen och den är nästan klart, men än så
                länge det går inte att genomföra transactions på grund av bugs i
                coden.
              </p>
            )}
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
