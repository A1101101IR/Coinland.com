import "./main.scss";
import React, { useContext } from "react";
import cryptoscreen from "../img/screen.png";
import Header from "../components/header";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import Service from "../components/service";
import Progress from "../components/progress";
import News from "../components/news";
/* import TransactionContext from "../context/TransactionContext"; */
const Main = () => {
  /* const { value } = useContext(TransactionContext);
  console.log(value); */
  return (
    <div className="main__container">
      {/* what about use section for each part of page to simplify html structure?  */}
      <Header />

      <News />
      <Progress />
      <Pricing />
      {/* <h1>
        Vi måste på nåt sätt skapa lite kontrast mellan olika section. jag
        upplever att det blir lite konstigt när man scrollar mellan ner och
        byter section utan att märka det. kanske scroll function!?
      </h1> */}
      <Service />

      <Footer />
    </div>
  );
};

export default Main;
