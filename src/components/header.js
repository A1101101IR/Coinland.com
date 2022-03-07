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

export default Header
