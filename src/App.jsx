// src/App.jsx
import React from "react";
import emailjs from "@emailjs/browser";       // 1) Importa EmailJS
import routes from "./routes/routes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

// 2) Inicializa EmailJS con tu Public Key (desde env o literal)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "62jDuN4BhEDr2cI3n");

function App() {
  return (
    <BrowserRouter basename="/">
      <div id="top" />
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
