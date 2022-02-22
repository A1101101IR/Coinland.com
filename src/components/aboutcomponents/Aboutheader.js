import React from "react"
import "./Aboutheader.scss"
import computer from "../../img/computer.png"

const Aboutheader = () => {
	return (
		<section className='about'>
			<div className='about__container'>
				<div className='about__container__split'>
					<div className='about__container__split__right'>
						<h1>We are Coinland.</h1>
						<p>
							We are a blockchain company that is motivated to
							provide easy to use blockchain
						</p>
					</div>
					<div className='about__container__split__left'>
						<img src={computer} alt='' width={380} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Aboutheader
