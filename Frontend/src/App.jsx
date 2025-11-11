import { Routes, Route, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
import LandingPage from "./pages/LandingPage";
import ScreenTime from "./pages/Screentime";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/screentime" element={<ScreenTime />} />
      </Routes>
    </div>
  );
}