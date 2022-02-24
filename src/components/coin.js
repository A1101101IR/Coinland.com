import { Chart } from "chart.js";
import React, { useRef, useState, useEffect } from "react";
import HistoryChart from "./chart";
const Coin = ({ image, name, price, loading, coinId }) => {
  const chartRef = useRef();
  const [myChart, setMyChart] = useState();
  const displayChart = () => {
    setMyChart({ coinId });
    /* console.log(myChart); */
  };

  return (
    <div className="chart-box-sm" onClick={() => displayChart({ coinId })}>
      {loading && <div className="loading">Loading...</div>}
      {!loading && (
        <div>
          <div className="coin-box">
            <div className="coin-img-name">
              <img src={image} alt="coin" />
              <h1>{name}</h1>
            </div>
            {/* <p>{symbol}</p> */}
            <p>${price}</p>
          </div>
          <div className="hidde">
            <HistoryChart coinId={coinId} />
            {/* {console.log(coinId)} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Coin;
