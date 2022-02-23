import React from "react";
import HistoryChart from "./chart";
const Coin = ({ image, name, symbol, price, loading }) => {
  return (
    <div className="chart-box-sm">
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
          {/* {!loading && <HistoryChart />} */}
        </div>
      )}
    </div>
  );
};

export default Coin;
