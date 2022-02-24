import { Chart } from "chart.js";
import React, { useRef, useState, useEffect } from "react";
import HistoryChart from "./chart";
const Coin = ({ image, name, price, loading, coinId, id }) => {
  const chartRef = useRef();
  const [myChart, setMyChart] = useState();
  const displayChart = () => {
    setMyChart({ id });
    console.log(myChart.id);
  };

  return (
    <div className="chart-box-sm" onClick={() => displayChart({ id })}>
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
          <div className="hidden">
            <HistoryChart coinId={myChart} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Coin;
