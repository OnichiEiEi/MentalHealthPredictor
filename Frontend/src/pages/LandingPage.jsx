import Home from "./Home";
import About from "./About";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, Element as ScrollElement,scroller } from "react-scroll";
import { useEffect } from "react";

export default function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    requestAnimationFrame(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 600,
        offset: -64,
      });
    });

    navigate(location.pathname, { replace: true });
  }, [location, navigate]);
    return(
        <div className="">
          <div className="w-full max-w-full mx-auto">
            <ScrollElement name="home">
              <Home />
            </ScrollElement>
            <ScrollElement name="about">
              <About />
            </ScrollElement>
            <ScrollElement name="contact">
              <Footer/>
            </ScrollElement>
          </div>
        </div>
    );
}