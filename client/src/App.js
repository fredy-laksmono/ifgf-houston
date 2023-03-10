import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Ministry from "./pages/Ministry/Ministry";

function App() {
  return (
    <div className="App bg-black text-white ">
      <Nav />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Home />} />
          <Route path="/ministry/*" element={<Ministry />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
