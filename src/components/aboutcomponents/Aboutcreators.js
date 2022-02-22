import "./Aboutcreators.scss"
import creator from "../../img/creators.png"
import {
	BsFacebook,
	BsGithub,
	BsTwitter,
	BsFillTelephoneFill,
	BsFillEnvelopeFill,
} from "react-icons/bs"
import amir from "../../img/amir.jpeg"
import oscar from "../../img/oscar.jpeg"

const Aboutcreators = () => {
	return (
		<section className='aboutcreators'>
			<div className='aboutcreators__container'>
				<div className='aboutcreators__container__split'>
					<div className='aboutcreators__container__split__left'>
						<h1>The creators</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quae delectus accusantium, debitis a
							reiciendis impedit deserunt dicta neque velit
							eligendi obcaecati iste veritatis nam error
							perferendis commodi non fugit fugiat ullam!
							Perspiciatis iste rem quod voluptas dignissimos
							fugiat expedita quia.
						</p>
					</div>
					<div className='aboutcreators__container__split__right'>
						<img src={creator} alt='' />
					</div>
				</div>

				<div className='aboutcreators__container__contacts'>
					<img src={amir} alt='' />
					<h2>Amir Nabizadeh</h2>
					<p>
						<span>
							Amir is a well known programmer based in Stockholm,
							Sweden. He loves to play Cricket and Tagliatelle and
							tagliatelle again
						</span>
						<br />
						<br />
						<BsFillTelephoneFill />
						+46 70 211 50 62 <br />
						<BsFillEnvelopeFill />
						Amir@Nabizadeh.se
					</p>
					<div className='aboutcreators__container__contacts__links'>
						<div className='aboutcreators__container__contacts__links__link'>
							<BsFacebook style={{ color: "#1778F2" }} />
						</div>
						<div className='aboutcreators__container__contacts__links__link'>
							<BsGithub style={{ color: "#171515" }} />
						</div>
						<div className='aboutcreators__container__contacts__links__link'>
							<BsTwitter style={{ color: "#1DA1F2" }} />
						</div>
					</div>
				</div>
				<div className='aboutcreators__container__contacts'>
					<img src={oscar} alt='' />
					<h2>Oscar Rainergren</h2>
					<p>
						<span>
							Oscar is a well known programmer based in Stockholm,
							Sweden. He loves to play Cricket and Tagliatelle and
							tagliatelle again
						</span>
						<br />
						<br />
						+46 70 211 50 62 <br />
						Oscar@rainergren.se
					</p>
					<div className='aboutcreators__container__contacts__links'>
						<div className='aboutcreators__container__contacts__links__link'>
							<BsFacebook style={{ color: "#1778F2" }} />
						</div>
						<div className='aboutcreators__container__contacts__links__link'>
							<BsGithub style={{ color: "#171515" }} />
						</div>
						<div className='aboutcreators__container__contacts__links__link'>
							<BsTwitter style={{ color: "#1DA1F2" }} />
						</div>
					</div>
				</div>
			</div>
			<svg
				className='blueblob'
				viewBox='0 0 200 200'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill='#00B6F0'
					d='M58.5,-28.5C70.9,-12.2,72.8,15.5,61.3,36.3C49.8,57.2,24.9,71.3,3.5,69.3C-18,67.3,-35.9,49.2,-49.3,27.3C-62.6,5.4,-71.3,-20.4,-62.3,-34.7C-53.3,-49,-26.6,-51.8,-1.8,-50.7C23,-49.7,46,-44.8,58.5,-28.5Z'
					transform='translate(100 100)'
				/>
			</svg>
			<svg
				className='yellowblob'
				viewBox='0 0 200 200'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill='#F3CD03'
					d='M49.6,-60.9C64,-47,75.1,-31.1,80,-12.7C84.9,5.7,83.6,26.6,73.4,40.7C63.2,54.8,44.2,62.1,26.9,64C9.6,66,-6,62.7,-20.7,57.1C-35.4,51.6,-49.1,44,-57.7,32C-66.2,19.9,-69.5,3.6,-67.8,-13C-66.1,-29.5,-59.3,-46.1,-47.2,-60.4C-35.1,-74.6,-17.5,-86.5,0,-86.5C17.6,-86.5,35.2,-74.7,49.6,-60.9Z'
					transform='translate(100 100)'
				/>
			</svg>
		</section>
	)
}

export default Aboutcreators
