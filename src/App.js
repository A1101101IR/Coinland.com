import Main from "./pages/main";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Pagenotfound from "./pages/Pagenotfound";
import ScrollToTop from "./components/ScrollTop";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ChartPage from "./dashComponents/chartPage";

import { useEffect, useState } from "react";
import gecko from "./dashComponents/axios";
function App() {
  const [coinsData, setCoinsData] = useState(null);
  const [chartsData, setChartsData] = useState([{}]);
  const [dataIsLoading, setDataIsLoading] = useState(false);
  /* format coin data to less number */
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setDataIsLoading(true);
      /* setMyId("bitcoin"); */
      const [coins, bitcoin, ethereum, solana] = await Promise.all([
        gecko.get(
          "coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ),
        gecko.get("/coins/bitcoin/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        gecko.get("/coins/ethereum/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        gecko.get("/coins/solana/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
      ]);

      setCoinsData(coins.data);
      setChartsData({
        bitcoin: formatData(bitcoin.data.prices),
        ethereum: formatData(ethereum.data.prices),
        solana: formatData(solana.data.prices),
      });
      /* setChartsData(formatData(chart.data.prices)); */
      setDataIsLoading(false);
      /* console.log(chartsData); */
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path=":id" element={<ChartPage />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
