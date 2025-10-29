import { useState } from "react";
import saibaMais from "../assets/icones/mais-info.png";
import Modal from "./Modal";

export function Card({ nome, imagem, descricao, preco, quantidade }) {
  const [open, setOpen] = useState(false);

  // Função que abre o modal
  const abrirModal = () => setOpen(true);
  const fecharModal = () => setOpen(false);

  return (
    <div className="container">
      <div className="cta">
        <img className="img-card" src={imagem} alt={nome} />
        <img
          onClick={abrirModal}
          className="saiba-mais"
          src={saibaMais}
          alt="mais informações"
        />

        {/* Passando dados dinâmicos via props */}
        <Modal
          isOpen={open}
          onClose={fecharModal}
          nome={nome}
          descricao={descricao}
          imagem={imagem}
          preco={preco}
          quantidade={quantidade}
        />

        <div className="text-card">
          <h2 className="titulo-card">{nome}</h2>
          <p className="paragrafo-card">{descricao}</p>
          <p className="paragrafo-preco">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(preco)}
          </p>
          <p className="paragrafo-quantidade">
            Em Estoque: {quantidade} unidades
          </p>
        </div>
      </div>
    </div>
  );
}
