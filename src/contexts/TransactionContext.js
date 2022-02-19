import React, { createContext, Component } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constans";
import { useEffect, useState } from "react";
export const TransactionContext = createContext();
const { ethereum } = window;
/* window.ethereum; */

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSinger();
  const TransactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log(provider, signer, TransactionContract);
};

const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState();
  const [currentAccount, setCurrentAccount] = useState("");
  const checkWallet = async () => {
    if (!ethereum) return alert("obs, install metamask!");
    const accounts = await ethereum.reguest({ method: "eth_accounts" });
    console.log(accounts);
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("obs, install metamask!");
      const accounts = await ethereum.reguest({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new error("no eth obj");
    }
  };
  useEffect(() => {
    checkWallet();
  }, []);
  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
export default TransactionProvider;
