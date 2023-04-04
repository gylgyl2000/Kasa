import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Property from "../components/Property/Property";

const routes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={ <Navigate to="/404" replace /> } />
      </Routes>
    );
  };
  
  export default routes;