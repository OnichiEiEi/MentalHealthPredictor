import { Routes, Route, Link } from "react-router-dom";

export default function Navbar(){
    return(
    <nav className="flex justify-between items-center w-full p-4">
        <div className="flex space-x-2">
            <img src="screentimeicon.svg" alt="Icons"/>
            <p>ScreenTime</p>
        </div>
        <div className="flex space-x-2">
            <Link to="/" className="border rounded-lg p-2">Home</Link>
            <Link to="/screentime" className="border rounded-lg p-2">Screen Time</Link>
        </div>
    </nav>
    );
}