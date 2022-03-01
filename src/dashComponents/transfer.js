import { TransactionContext } from "../contexts/TransactionContext";
import React, { useContext, useState, useEffect, useRef } from "react";
const Transfer = () => {
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
  return (
    <>
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
          <textarea
            type="text"
            className="message-input"
            placeholder="message"
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>
        {/* show Transfer btn if user is connected to wallet, else show connect wallet btn */}
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
    </>
  );
};

export default Transfer;
