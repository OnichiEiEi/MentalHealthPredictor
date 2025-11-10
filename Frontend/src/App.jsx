import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ScreenTime from "./pages/Screentime";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/screentime" element={<ScreenTime />} />
      </Routes>
    </div>
  );
}