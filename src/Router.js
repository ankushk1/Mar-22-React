import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./RouteComp/About";
import Cartt from "./RouteComp/Cartt";
import Home from "./RouteComp/Home";
import Nav from "./RouteComp/Nav";
const Router = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="fs-2 text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cartt />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </>
  );
};

export default Router;
