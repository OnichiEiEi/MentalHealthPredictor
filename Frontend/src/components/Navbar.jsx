import { Routes, Route, Link } from "react-router-dom";

export default function Navbar(){
    return(
    <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/screentime">Screen Time</Link>
    </nav>
    );
}