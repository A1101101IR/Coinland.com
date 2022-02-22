import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navigation from "./components/navbar";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Main from "./pages/main";
import Product from "./pages/product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
