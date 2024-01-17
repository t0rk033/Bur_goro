import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NavBar from "./components/NavBar";
import Products from "./pages/products/Products.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Footer from "./components/Footer.jsx";

function routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default routes;
