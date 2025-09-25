import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white">
      <nav className="font-body text-primary border-b-2">
        <div className="flex items-center justify-between p-4 medd:mr-10 ml-8">
          <Link to="/" className="flex items-center">
            <img
              src="/img/cadi-logo.jpg"
              alt="CADI-logo"
              className="rounded-full w-20 mr-4"
            />
            <h1 className="text-3xl font-bold">CADI</h1>
          </Link>
          <ul className="hidden medd:flex items-center space-x-7 text-xl">
            <li className="list-none hover:-translate-y-2 transition-transform duration-200">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="list-none hover:-translate-y-2">
              <Link to="/about">About</Link>
            </li> */}
            <li className="list-none hover:-translate-y-2 transition-transform duration-200">
              <Link to ="/artists">Artists</Link>
            </li>
            {/* <li className="list-none hover:-translate-y-2">
              <Link to="/feedback">Feedback</Link>
            </li> */}
            <li className="list-none font-semibold border-[10px] border-r-[20px] border-l-[20px] border-secondary bg-secondary rounded-full text-primary hover:-translate-y-2 transition-transform duration-200 hover:bg-accented hover:border-accented">
              <Link to="/commission">Commission Today!</Link>
            </li>
          </ul>
          <div className="medd:hidden">
            <BurgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;