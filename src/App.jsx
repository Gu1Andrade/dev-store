import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar";
import { Conteudo } from "./componentes/Conteudo";
import { Cards } from "./componentes/Cards";

export function App() {
  const [busca, setBusca] = useState("");

  return (
    <BrowserRouter>
      <Navbar busca={busca} setBusca={setBusca} />
      <Routes>
        <Route path="/" element={<Conteudo />} />
        <Route path="/produto" element={<Cards busca={busca} />} />
      </Routes>
    </BrowserRouter>
  );
}
