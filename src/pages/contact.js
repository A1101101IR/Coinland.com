import Contactform from "../components/Contactform";
import ContactHeader from "../components/ContactHeader";

import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact__main">
      <ContactHeader />
      <Contactform />
    </section>
  );
};

export default Contact;
