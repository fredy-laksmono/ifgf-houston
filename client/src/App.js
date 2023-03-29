import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Ministry from "./pages/Ministry/Ministry";
import AboutUs from "./pages/AboutUs/AboutUs";
import Vision from "./pages/Vision/Vision";

function App() {
  return (
    <div className="App bg-black text-white ">
      <Nav />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ministry/*" element={<Ministry />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
