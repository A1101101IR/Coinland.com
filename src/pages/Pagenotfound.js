import "./Pagenotfound.scss"
import sad from "../img/sad.png"
import { Link } from "react-router-dom"

const Pagenotfound = () => {
	return (
		<section className='pagenotfound'>
			<div className='pagenotfound__container'>
				<div classname='pagenotfound__container__img'>
					<img src={sad} alt='' />
				</div>
				<div className='pagenotfound__container__text'>
					<h1>404</h1>
					<h2>Page Not Found</h2>
					<p>The requested url was not found</p>
					<Link to='/'>
						<button>Take me home</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Pagenotfound
