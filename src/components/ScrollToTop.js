import React, { use } from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); //scrolls to the top of the page when the pathname changes
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop