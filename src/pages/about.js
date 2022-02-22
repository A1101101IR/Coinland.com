import Aboutheader from "../components/aboutcomponents/Aboutheader"
import "../components/aboutcomponents/Aboutheader"
import Aboutcut from "../components/aboutcomponents/Aboutcut"
import Aboutcreators from "../components/aboutcomponents/Aboutcreators"
import Footer from "../components/footer"

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
				text='Contact us for info or something idk'
				button='Contact'
				path={"/contact"}
				background='#182333'
			/>
			<Footer />
		</section>
	)
}

export default About
