import gecko from "../dashComponents/axios";
import MiniChart from "../dashComponents/miniChart";
import { useState, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TransactionContext } from "../contexts/TransactionContext";

const Dashboard = () => {
  const [coinsData, setCoinsData] = useState(null);
  const [chartsData, setChartsData] = useState([{}]);
  const [dataIsLoading, setDataIsLoading] = useState(false);
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
  /* function to change big chart when user select coin in transfer section */
  const select = useNavigate();
  const handleTo = (value) => {
    select(`${value}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      setDataIsLoading(true);
      const [coins, bitcoin, ethereum, solana] = await Promise.all([
        gecko.get(
          "coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ),
        gecko.get("/coins/bitcoin/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        gecko.get("/coins/ethereum/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        gecko.get("/coins/solana/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
      ]);
      /* setCoinsData(coins.data); */
      setCoinsData(coins.data);
      setChartsData({
        bitcoin: formatData(bitcoin.data.prices),
        ethereum: formatData(ethereum.data.prices),
        solana: formatData(solana.data.prices),
      });
      setDataIsLoading(false);
    };
    fetchData();
  }, []);

  const renderData = () => {
    if (dataIsLoading) {
      return <div>Loading...</div>;
    }
    return (
      <section className="Dashboard">
        <div className="dash-navbar">
          {coinsData &&
            coinsData.slice(0, 3).map((item) => {
              return (
                <Link to={`/Dashboard/${item.id}`} key={item.id}>
                  <div className="chart-box-sm" key={item.id}>
                    <div className="coin-box">
                      <div className="coin-img-name">
                        <img src={item.image} alt="coin" />
                        <h1>{item.name}</h1>
                      </div>
                      <p>${item.current_price}</p>
                    </div>
                    <>
                      {item.id == "bitcoin" && (
                        <MiniChart data={chartsData.bitcoin} />
                      )}
                      {item.id == "ethereum" && (
                        <MiniChart data={chartsData.ethereum} />
                      )}
                      {item.id == "solana" && (
                        <MiniChart data={chartsData.solana} />
                      )}
                    </>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className="dash-body">
          <div className="dash-chart">
            <Outlet />
          </div>
          <div className="dash-form-box">
        <div className="dash-form">
          <select onChange={event => handleTo(event.target.value)}>
            <option defaultValue >Select currency</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
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
    );
  };
  return renderData();
};

export default Dashboard;
