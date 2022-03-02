import { useRef, useState, useEffect, useContext } from "react";
import gecko from "../dashComponents/axios";

import BigChart from "../dashComponents/bigChart";
import MiniChart from "../dashComponents/miniChart";
import { TransactionContext } from "../contexts/TransactionContext";
import Transfer from "../dashComponents/transfer";
import { Routes, Route, Link } from "react-router-dom";
import ChartPage from "../dashComponents/chartPage";

const Dashboard = () => {
  const [coinsData, setCoinsData] = useState(null);
  const [chartsData, setChartsData] = useState(null);
  const [dataIsLoading, setDataIsLoading] = useState(false);
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);
  /* format coin data to less number */
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
  const [myId, setMyId] = useState("bitcoin");
  const getCoinId = (id) => {
    setMyId(id);
    console.log(id);
  };
  /* onClick={() => getCoinId(coinsData.id)} */
  useEffect(() => {
    const fetchData = async () => {
      setDataIsLoading(true);
      setMyId("bitcoin");
      const [coins, chart] = await Promise.all([
        gecko.get(
          "coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana%2C%20cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ),
        gecko.get(`/coins/${myId}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
      ]);
      setCoinsData(coins.data);
      setChartsData(formatData(chart.data.prices));
      /* console.log(coinsData, chartsData); */
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
        {/* loops small coin dash */}
        <div className="dash-navbar">
          {coinsData &&
            coinsData.slice(0, 3).map((coinsData) => {
              return (
                <Link to={`/Dashboard/${coinsData.id}`}>
                  <div className="chart-box-sm" key={coinsData.id}>
                    <div className="coin-box">
                      <div className="coin-img-name">
                        <img src={coinsData.image} alt="coin" />
                        <h1>{coinsData.name}</h1>
                        {/* <p>{coinsData.id}</p> */}
                      </div>
                      <p>${coinsData.current_price}</p>
                    </div>
                    <MiniChart id={coinsData.id} />
                  </div>
                </Link>
              );
            })}
        </div>
        <div className="dash-body">
          <div className="dash-chart">
            <ChartPage />
          </div>
          <Transfer />
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
