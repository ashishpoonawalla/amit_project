import "./App.css";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
    </>
  )
}

export default App
