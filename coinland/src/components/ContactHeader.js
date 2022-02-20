import React from "react"
import rocket from "../img/rocketman.png"

const ContactHeader = () => {
	return (
		<section className='contact'>
			<div className='contact__container'>
				<div className='contact__container__split'>
					<div className='contact__container__split__right'>
						<h1>Become part of our amazing team.</h1>
						<p>
							We are a blockchain company that is motivated to
							provide easy to use blockchain
						</p>
					</div>
					<div className='contact__container__split__left'>
						<img src={rocket} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactHeader
