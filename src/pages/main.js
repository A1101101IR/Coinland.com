import "./main.scss";
import cryptoscreen from "../img/screen.png";
import Header from "../components/header";
import Footer from "../components/footer";

const Main = () => {
  return (
    <div className="main__container">
      {/* what about use section for each part of page to simplify html structure?  */}
      <Header />
      <Footer />
    </div>
  );
};

export default Main;
