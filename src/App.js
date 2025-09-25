import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Carol from "./pages/Carol";
import Celine from "./pages/Celine";
import Elizabeth from "./pages/Elizabeth";
import Emma from "./pages/Emma";
import Jenny from "./pages/Jenny";
import Katherine from "./pages/Katherine";
import Srishti from "./pages/Srishti";
import Luyao from "./pages/Luyao";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artist />} />
          <Route path="/artists/carol" element={<Carol />} />
          <Route path="/artists/celine" element={<Celine />} />
          <Route path="/artists/elizabeth" element={<Elizabeth />} />
          <Route path="/artists/emma" element={<Emma />} />
          <Route path="/artists/jenny" element={<Jenny />} />
          <Route path="/artists/katherine" element={<Katherine />} />
          <Route path="/artists/srishti" element={<Srishti />} />
          <Route path="/artists/luyao" element={<Luyao />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;