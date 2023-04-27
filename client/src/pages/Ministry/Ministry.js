import SideBar from "./components/SideBar";
import Users from "./pages/Users/Users";
import Schedule from "./pages/Schedule/Schedule";
import { Route, Routes } from "react-router-dom";

const Ministry = () => {
  return (
    <div className=" grid grid-cols-7 bg-white text-black ">
      <div className=" col-start-1 col-span-1 row-snptart-1 row-span-full ">
        <SideBar />
      </div>
      <div className=" col-start-2 col-span-6 row-start-1 row-span-full ">
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default Ministry;
