import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Features/>
    <Footer/>
    </>
  );
}

export default App;
