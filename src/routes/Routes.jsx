import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Property from "../components/Property/Property";

const routes = () => {
    return (
      <Routes>
        <Route path="/Kasa/" element={<Home />} />
        <Route path="/Kasa/about" element={<About />} />
        <Route path="/Kasa/property/:id" element={<Property />} />
        <Route path="/Kasa/404" element={<Error404 />} />
        <Route path="*" element={ <Navigate to="/Kasa/404" replace /> } />
      </Routes>
    );
  };
  
  export default routes;