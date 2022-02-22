import { Link } from "react-router-dom"
import "./Aboutcut.scss"

const Aboutcut = ({ text, button, path, background }) => {
	return (
		<section className='aboutcut' style={{ backgroundColor: background }}>
			<div className='aboutcut__container'>
				<h1>{text}</h1>
				<Link to={path}>
					<button>{button}</button>
				</Link>
			</div>
		</section>
	)
}

export default Aboutcut
