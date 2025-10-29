import React from "react";

function Modal({
  isOpen,
  onClose,
  nome,
  imagem,
  descricao,
  preco,
  quantidade,
}) {
  if (!isOpen) return null; // se estiver fechado, não renderiza nada

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <img className="imagem-modal" src={imagem} alt="imagem-produto" />
        <h2 className="titulo-modal">{nome}</h2>
        <p className="paragrafo-modal">{descricao}</p>
        <p className="paragrafo-modal">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </p>
        <p className="paragrafo-modal">Em Estoque: {quantidade} unidades</p>
        <button className="button-modal" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default Modal;
