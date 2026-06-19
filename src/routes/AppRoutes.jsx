import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cars from "../pages/Cars";
import Profile from "../pages/Profile";
import CarDetails from "../pages/CarDetails";

import Navbar from "../components/Navbar";



function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/cars" element={<Cars />}>
          
        </Route>

        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </>
  );
}

export default AppRoutes;