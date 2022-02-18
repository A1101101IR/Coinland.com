import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionContext";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
