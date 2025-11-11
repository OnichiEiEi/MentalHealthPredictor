import { useState, useEffect } from "react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
    return (
        <nav
        className={`sticky top-0 z-50 transition-transform duration-300 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-white shadow-md flex justify-between items-center w-full p-4 m-auto`}
        >
            <div className="flex space-x-2">
                <img src="screentimeicon.svg" alt="Icons" />
            </div>
            <div className="flex space-x-2">
                <RouterLink to="/" state={{ scrollTo: "home" }} className="px-1 text-black transition hover:text-gray-500 ">Home</RouterLink>
                <RouterLink to="/" state={{ scrollTo: "about" }} className="px-1 text-black transition hover:text-gray-500 ">About</RouterLink>
                <RouterLink to="/" state={{ scrollTo: "contact" }} className="px-1 text-black transition hover:text-gray-500 ">Contact</RouterLink>
            </div>
            <div>
                <RouterLink to="/screentime" className="border rounded-2xl p-2 hover:bg-linear-to-r from-teal-500 to-blue-500 hover:text-white transform transition ease-in-out duration-300">ScreenTime</RouterLink>
            </div>
        </nav>
  );
}