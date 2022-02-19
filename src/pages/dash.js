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
      <h1>Coming soon!</h1>
      {!currentAccount && (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      <div>
        <div>
          <input type="text" name="addressTo" onChange={handleChange} />
          <input
            type="number"
            name="amount"
            value={0.0005}
            onChange={handleChange}
          />

          <input type="text" name="keyword" onChange={handleChange} />
          <input type="text" name="message" onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>
          Transfer
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
