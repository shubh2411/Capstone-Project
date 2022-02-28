import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoinsData from "./pages/CoinsData";
import Home from "./pages/Home";
import "./App.css";
import Alert from "./components/Auth/Alert";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/coins/:id" element={<CoinsData />} />
      </Routes>
      <Alert></Alert>
    </BrowserRouter>
  );
}

export default App;

// inline style
// style={{fontSize:"40px", marginTop: "40px"}}
