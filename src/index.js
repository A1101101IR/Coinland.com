import "./index.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TransactionProvider from "./contexts/TransactionContext";

ReactDOM.render(
  <TransactionProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TransactionProvider>,
  document.getElementById("root")
);
