import "./Aboutcreators.scss"
import creator from "../../img/creators.png"
import fb from "../../img/facebook.png"
import insta from "../../img/instagram.png"
import twitter from "../../img/twitter.png"
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
						+46 70 211 50 62 <br />
						Amir@Nabizadeh.se
					</p>
					<div className='aboutcreators__container__contacts__links'>
						<div className='aboutcreators__container__contacts__links__link'>
							<img src={fb} alt='' />
						</div>
						<div className='aboutcreators__container__contacts__links__link'>
							<img src={twitter} alt='' />
						</div>
						<div className='aboutcreators__container__contacts__links__link'>
							<img src={insta} alt='' />
						</div>
					</div>
				</div>
				<div className='aboutcreators__container__contacts'>
					<img src={oscar} alt='' />
					<h2>Amir Nabizadeh</h2>
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
							<img src={fb} alt='' />
						</div>
						<div className='aboutcreators__container__contacts__links__link'>
							<img src={twitter} alt='' />
						</div>
						<div className='aboutcreators__container__contacts__links__link'>
							<img src={insta} alt='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Aboutcreators
