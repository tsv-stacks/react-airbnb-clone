import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card />
    <App />
  </React.StrictMode>
);
