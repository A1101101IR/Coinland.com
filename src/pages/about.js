import Aboutheader from "../components/aboutcomponents/Aboutheader"
import "../components/aboutcomponents/Aboutheader"
import Aboutcut from "../components/aboutcomponents/Aboutcut"
import Aboutcreators from "../components/aboutcomponents/Aboutcreators"
import Footer from "../components/footer"
import Contactform from "../components/Contactform"

const About = () => {
	return (
		<section className='about__main'>
			<Aboutheader />
			<Aboutcut
				text='"Make smooth transactions with MetaMask"'
				button='Dashboard'
				path={"/product"}
				background='#00b6f0'
			/>
			<Aboutcreators />
			<Aboutcut
				text="We'd love to hear from you😉"
				button='Contact'
				path={"/contact"}
				background='#182333'
			/>
		</section>
	)
}

export default About
