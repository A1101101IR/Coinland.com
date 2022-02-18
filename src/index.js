import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TransactionProvider from "./context/TransactionContext";
ReactDOM.render(
  <TransactionProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TransactionProvider>,
  document.getElementById("root")
);
