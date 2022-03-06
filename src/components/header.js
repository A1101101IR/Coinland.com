import Dashboard from "../pages/dashboard";
import { Link } from "react-router-dom";
const Header = () => {
  return (
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
            You can’t ignore the blockchain anymore. You’d better start learning
            it. The time is now.
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
  );
};

export default Header;
