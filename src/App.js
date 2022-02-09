import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Main from "./pages/main";

function App() {
  return (
    <div className="body-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
