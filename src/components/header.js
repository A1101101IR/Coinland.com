<<<<<<< HEAD
import Dashboard from "../pages/dashboard"
import macbook from "../img/MacBook.png"
import { Link } from "react-router-dom"
const Header = () => {
	return (
		<section className='header'>
			<div className='blueblob'></div>
			<h1>What happens in blockchain, stays in blockchain.</h1>
			<p>
				We have the worlds best Crypto Dashboard and its free to use
				today! <br />
				Check it out below!
			</p>
			<div className='greenblob'></div>
			<div className='split'>
				<div className='active'>
					<Link to='/dashboard'>
						<button className='active'>Get started</button>
					</Link>
				</div>
				<div className='outline'>
					<button className='outline'>Try for free</button>
				</div>
			</div>
			<div className='image-header'>
				<img src={macbook} alt='' />
			</div>
		</section>
	)
}
=======
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
>>>>>>> fix

export default Header
