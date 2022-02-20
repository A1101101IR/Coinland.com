import React from "react";
const Coin = ({ image, name, symbol, price }) => {
  return (
    <div className="chart-box-sm">
      <div className="coin-box">
        <img src={image} alt="coin" />
        <h1>{name}</h1>
        {/* <p>{symbol}</p> */}
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Coin;
