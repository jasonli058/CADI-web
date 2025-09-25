import React, { use, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const handleBurgerClick = () => {
    setMenuHidden(!isMenuHidden);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuHidden(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };   
  }, []); 

  return (
    <div className="relative">
      <button
        className="medd:hidden w-28 flex justify-end px-4"
        id="burger"
        onClick={handleBurgerClick}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 flex justify-end"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        id="menu"
        className={`${
          isMenuHidden ? "hidden" : "block"
        } absolute top-full left-0 w-full bg-gray-100 shadow-lg z-10`}
      >
        <ul className="flex flex-col items-center cursor-pointer bg-white">
          <li className="w-full text-center py-4 border-b hover:bg-gray-200">
            <Link to="/" onClick={() => setMenuHidden(true)}>
              Home
            </Link>
          </li>
          {/*
          <li className="w-full text-center py-4 border-b hover:bg-gray-200">
            <Link to="/about" onClick={() => setMenuHidden(true)}>
              About
            </Link>
          </li>
          */}
          <li className="w-full text-center py-4 border-b hover:bg-gray-200">
            <Link to="/artists" onClick={() => setMenuHidden(true)}>
              Our Work
            </Link>
          </li>
          {/*
          <li className="w-full text-center py-4 hover:bg-gray-200">
            <Link to="/feedback" onClick={() => setMenuHidden(true)}>
              Feedback
            </Link>
          </li>
          */}
          <li className="w-full text-center py-4 bg-secondary hover:bg-accented">
            <Link to="/commission" onClick={() => setMenuHidden(true)}>
              Commission Today!
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;