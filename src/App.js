import Main from "./pages/main";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";
import Solana from "./dashComponents/solana";
import Bitcoin from "./dashComponents/bitcoin";
import Ethereum from "./dashComponents/ethereum";
import Pagenotfound from "./pages/Pagenotfound";
import ScrollToTop from "./components/ScrollTop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Bitcoin />} />
        </Route>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="" element={<Bitcoin />} />
          <Route path="bitcoin" element={<Bitcoin />} />
          <Route path="ethereum" element={<Ethereum />} />
          <Route path="solana" element={<Solana />} />
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
