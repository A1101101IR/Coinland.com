import React, { useRef, useState, useEffect } from "react";
import Chartjs from "chart.js";
import useData from "./fetchData";
import MiniChart from "./miniChart";

const Coin = (/* { coinsData, chartsData } */) => {
  const { coinsData, chartsData, dataIsLoading } = useData();
  return (
    <>
      <div className="dash-navbar">
        {coinsData &&
          coinsData.slice(0, 3).map((coinsData) => {
            return (
              <div className="chart-box-sm" key={coinsData.id}>
                <div className="coin-box">
                  <div className="coin-img-name">
                    <img src={coinsData.image} alt="coin" />
                    <h1>{coinsData.name}</h1>
                    {/* <p>{coinsData.id}</p> */}
                  </div>
                  <p>${coinsData.current_price}</p>
                </div>
                <MiniChart chartId={coinsData.id} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Coin;
