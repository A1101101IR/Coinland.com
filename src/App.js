import Main from "./pages/main";
import About from "./pages/about";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Pagenotfound from "./pages/Pagenotfound";
import ScrollToTop from "./components/ScrollTop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
