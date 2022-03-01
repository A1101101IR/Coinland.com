import logoimage from "../img/logo.png"
import { Link } from "react-router-dom"
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs"

const Footer = () => {
	return (
		<section className='Footer'>
			<div className='coinland-footer'>
				<Link className='logo' to='/'>
					<img src={logoimage} width={40} alt='' />
					<h2>Coinland.</h2>
				</Link>
			</div>
			<div>
				<nav className='footer-nav'>
					<Link className='link' to='/'>
						Home
					</Link>
					<Link className='link' to='/product'>
						Product
					</Link>
					<Link className='link' to='/about'>
						About
					</Link>
					<Link className='link' to='/contact'>
						Contact
					</Link>
				</nav>
			</div>
			<div className='social-icons'>
				<a
					href='https://www.facebook.com'
					target='_blank'
					className='linkssocial'
				>
					<BsGithub />
				</a>
				<a
					href='https://www.instagram.com'
					target='_blank'
					className='linkssocial'
				>
					<BsTwitter />
				</a>
				<a
					href='https://twitter.com'
					target='_blank'
					className='linkssocial'
				>
					<BsFacebook />
				</a>
			</div>
		</section>
	)
}

export default Footer
