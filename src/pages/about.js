import "../components/aboutcomponents/Aboutheader";
import Aboutcut from "../components/aboutcomponents/Aboutcut";
import Aboutheader from "../components/aboutcomponents/Aboutheader";
import Aboutcreators from "../components/aboutcomponents/Aboutcreators";

const About = () => {
  return (
    <section className="about__main">
      <Aboutheader />
      <Aboutcut
        text='"Make smooth transactions with MetaMask"'
        button="Dashboard"
        path={"/product"}
        background="#00b6f0"
      />
      <Aboutcreators />
      <Aboutcut
        text="Psst... Send us a message. We'd love to hear from you😉"
        button="Contact"
        path={"/contact"}
        background="#182333"
      />
    </section>
  );
};

export default About;
