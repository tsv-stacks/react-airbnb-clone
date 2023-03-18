import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import katie from './assets/katie-zaferes.png'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card
      img={katie}
      rating='5.0'
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
    />
    <App />
  </React.StrictMode>
);
