import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ScreenTime from "./pages/Screentime";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/screentime" element={<ScreenTime />} />
      </Routes>
    </div>
  );
}
