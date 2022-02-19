import React, { createContext, Component } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constans";
import { useEffect, useState } from "react";
export const TransactionContext = createContext();
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  /* const provider = new ethers.providers.Web3Provider(window.ethereum); */
  const signer = provider.getSigner();
  const TransactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return TransactionContract;
};

/* TransactionProvider */
const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionsCount")
  );
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  /* check if there is a ethereum object in browser */
  const checkWallet = async () => {
    try {
      if (!ethereum)
        return alert("Alert, you need to install Metamask in your browser!");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // getAllTransactions();
      } else {
        console.log("ethereum objects not found!");
      }
      /* console.log(accounts); */
    } catch (error) {
      console.log(error);
      throw new error("ethereum objects not found!");
    }
  };
  /* send transactions to blockchain, get res, etc.. */
  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("install Metamask in your browser!");
      const { addressTo, amount, keyword, message } = formData;
      const transactionsContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        param: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });
      const transactionHash = await transactionsContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      setIsLoading(true);
      /* console.log(`Loading - ${transactionHash.hash}`); */
      await transactionHash.wait();
      /* console.log(`Success - ${transactionHash.hash}`); */
      setIsLoading(false);

      const transactionsCount =
        await transactionsContract.getTransactionCount();
      setTransactionCount(transactionsCount.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("ethereum objects not found!");
    }
  };

  /* connect wallet if there is a ethereum object in browser */
  const connectWallet = async () => {
    try {
      if (!ethereum)
        return alert("Alert, you need to install Metamask in your browser!");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new error("ethereum objects not found!");
    }
  };
  useEffect(() => {
    checkWallet();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export default TransactionProvider;
