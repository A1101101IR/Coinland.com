import Contactform from "../components/Contactform"
import ContactHeader from "../components/ContactHeader"
import Footer from "../components/footer"

import "./contact.scss"

const Contact = () => {
	return (
		<section className='contact__main'>
			<ContactHeader />
			<Contactform />
			<Footer />
		</section>
	)
}

export default Contact
