import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import openbtn from "../img/open-btn.png"
import closebtn from "../img/close-btn.png"
import metamask from "../img/metamask.png"
import logoimage from "../img/logo.png"
import { TransactionContext } from "../contexts/TransactionContext"

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const { connectWallet, currentAccount } = useContext(TransactionContext)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	/* handleOpen = handleOpen.bind();
  handleClose = handleClose.bind(); */

	return (
		<section className='navbar'>
			<div className='nav-left'>
				<Link className='logo' to='/'>
					<div className='logo__image'>
						<img src={logoimage} width={40} alt='' />
					</div>
					<div>
						<h2>Coinland.</h2>
					</div>
				</Link>
			</div>
			{!open && (
				<nav className='nav-center'>
					<Link className='link' to='/'>
						Home
					</Link>
					<Link className='link' to='/product'>
						Dashboard
					</Link>
					<Link className='link' to='/about'>
						About
					</Link>
					<Link className='link' to='/contact'>
						Contact
					</Link>
				</nav>
			)}
			<div className='nav-right'>
				<Link className='login-btn' to='/'>
					{currentAccount && (
						<div className='login'>
							<h3>Connected</h3>
							<div className='metamask-img'>
								<img src={metamask} alt='' width={30} />{" "}
							</div>
						</div>
					)}
					{!currentAccount && (
						<div className='login' onClick={connectWallet}>
							<h3>Connect Wallet</h3>
							<div className='metamask-img'>
								<img src={metamask} alt='' width={30} />{" "}
							</div>
						</div>
					)}
				</Link>
				{!open && (
					<img
						className='open-btn'
						src={openbtn}
						width={36}
						onClick={handleOpen}
					/>
				)}
			</div>
			{open && (
				<div className='toggle-nav'>
					<img
						className='close-btn'
						src={closebtn}
						width={36}
						onClick={handleClose}
					/>
					<ul>
						<li>
							<Link className='link' onClick={handleClose} to='/'>
								Home
							</Link>
						</li>
						<li>
							<Link
								className='link'
								onClick={handleClose}
								to='/about'
							>
								Product
							</Link>
						</li>
						<li>
							<Link
								className='link'
								onClick={handleClose}
								to='/about'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className='link'
								onClick={handleClose}
								to='/contact'
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
		</section>
	)
}

export default Navbar
