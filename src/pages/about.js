import Aboutheader from "../components/aboutcomponents/Aboutheader"
import "../components/aboutcomponents/Aboutheader"
import Aboutcut from "../components/aboutcomponents/Aboutcut"
import Aboutcreators from "../components/aboutcomponents/Aboutcreators"

const About = () => {
	return (
		<section className='about__main'>
			<Aboutheader />
			<Aboutcut />
			<Aboutcreators />
		</section>
	)
}

export default About
