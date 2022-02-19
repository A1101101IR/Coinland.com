import { TransactionContext } from "../contexts/TransactionContext";
import React, { useContext } from "react";
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
  return (
    <section className="Dashboard">
      <div className="dash-navbar">
        <div className="chart-box-sm"></div>
        <div className="chart-box-sm"></div>
        <div className="chart-box-sm"></div>
        <div className="chart-box-sm"></div>
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
