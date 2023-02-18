import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-black text-white ">
      <Nav />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
