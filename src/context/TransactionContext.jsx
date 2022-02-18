/* import React from "react";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constans";

export const TransactionContext = React.createContext;

const { ethereum } = window; */
/* window.ethereum; */

/* const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSinger();
  const TransactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log(provider, signer, TransactionContract);
}; */
/* 
export const TransactionProvider = ({ children }) => {
  return (
    <TransactionContext.Provider value={{ value: "test" }}>
      {children}
    </TransactionContext.Provider>
  );
};
 */
/* export default (TransactionContext, TransactionProvider); */
