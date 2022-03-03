import { useRef, useState, useEffect, useContext } from "react";
import gecko from "../dashComponents/axios";
import BigChart from "../dashComponents/bigChart";
import MiniChart from "../dashComponents/miniChart";
import { TransactionContext } from "../contexts/TransactionContext";
import Transfer from "../dashComponents/transfer";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ChartPage from "../dashComponents/chartPage";
import Bitcoin from "../dashComponents/bitcoin";

const Dashboard = () => {
  const [coinsData, setCoinsData] = useState(null);
  const [chartsData, setChartsData] = useState([{}]);
  const [data, setData] = useState();
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

  useEffect(() => {
    const fetchData = async () => {
      setDataIsLoading(true);
      /* setMyId("bitcoin"); */
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

      setCoinsData(coins.data);
      setChartsData({
        bitcoin: formatData(bitcoin.data.prices),
        ethereum: formatData(ethereum.data.prices),
        solana: formatData(solana.data.prices),
      });

      /* setChartsData(formatData(chart.data.prices)); */
      setDataIsLoading(false);
      /* console.log(chartsData); */
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
            coinsData.slice(0, 3).map((item) => {
              return (
                <Link to={`/Dashboard/${item.id}`} key={item.id}>
                  <div className="chart-box-sm" key={item.id}>
                    <div className="coin-box">
                      <div className="coin-img-name">
                        <img src={item.image} alt="coin" />
                        <h1>{item.name}</h1>
                        {/* <p>{coinsData.id}</p> */}
                      </div>
                      <p>${item.current_price}</p>
                    </div>
                    <>
                      <MiniChart chartsData={chartsData} />
                      {/* {chartsData.map((data) => (
                        <MiniChart chartsData={data.chartsData} />
                      ))} */}
                    </>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className="dash-body">
          <div className="dash-chart">
            {!currentAccount && <Bitcoin />}
            <Outlet />
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
