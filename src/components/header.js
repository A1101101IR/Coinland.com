import Dashboard from "./dashboard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";
const Header = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <>
      {!currentAccount && (
        <section className="header">
          <div className="blueblob"></div>
          <div className="greenblob"></div>
          <div className="dashboard-box">
            <div className="d-box-one">
              <Dashboard />
            </div>
            <div className="d-box-two">
              <h1>What happens in blockchain, stays in blockchain.</h1>
              <p>
                You can’t ignore the blockchain anymore. You’d better start
                learning it. The time is now.
              </p>
              <div className="split">
                <div className="active">
                  <button className="active">Get started</button>
                </div>
                <Link to="/dashboard">
                  <div className="outline">
                    <button className="outline">Dashboard preview</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      {currentAccount && (
        <section className="header">
          <div className="blueblob"></div>
          <h1>What happens in blockchain, stays in blockchain.</h1>
          <p>
            You can’t ignore the blockchain anymore. You’d better start learning
            it. The time is now.
          </p>
          <div className="greenblob"></div>
          <div className="split">
            <div className="active">
              <button className="active">Get started</button>
            </div>
            <Link to="/dashboard">
              <div className="outline">
                <button className="outline">Try for free</button>
              </div>
            </Link>
          </div>
          <div className="dashboard-box">
            <Dashboard />
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
