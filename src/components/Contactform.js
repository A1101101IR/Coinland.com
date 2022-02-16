import React from "react"

const Contactform = () => {
	return (
		<section className='contactform'>
			<div className='contactform__container'>
				<div className='contactform__container__split'>
					<div className='contactform__container__split__left'>
						<h1>Contact us.</h1>
						<p>
							Please send us a message and we will reach out as
							soon as we can
						</p>
					</div>
					<div className='contactform__container__split__right'>
						<form>
							<div className='form--container'>
								<input type='text' placeholder='Name' />
							</div>
							<div className='form--container'>
								<input type='text' placeholder='Email' />
							</div>
							<div className='form--container'>
								<textarea placeholder='Message' />
							</div>
							<div className='form--container'>
								<button>Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contactform
