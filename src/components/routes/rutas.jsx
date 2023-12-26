import Home from "../Home";
import Contact from "../Contact";
import Aboutme from "../Aboutme";
import Projects from "../Projects";

import { Routes, Route } from "react-router-dom";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/sobre-mi" element={<Aboutme />} />
      <Route path="/proyectos" element={<Projects />} />
    </Routes>
  );
}
