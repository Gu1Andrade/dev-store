import { useState } from "react";
import blackTerminal from "../assets/roupas/Black_terminal.png";
import cleanCode from "../assets/roupas/Clean_Code.png";
import codeClassic from "../assets/roupas/Code_Classic.png";
import Modal from "./Modal";
import { Cards } from "./Cards";

export function Conteudo() {
  const [open, setOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Função que abre o modal com os dados do produto clicado
  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setOpen(true);
  };

  const fecharModal = () => {
    setOpen(false);
    setProdutoSelecionado(null);
  };

  // Dados dos produtos (você pode substituir pelos reais)
  const produtos = [
    {
      nome: "Code Classic",
      descricao: "Moletom clássico com design minimalista e toque moderno.",
      preco: 159.9,
      quantidade: 12,
      imagem: codeClassic,
    },
    {
      nome: "Clean Code",
      descricao:
        "Moletom inspirado no conceito de código limpo. Confortável e estiloso.",
      preco: 169.9,
      quantidade: 8,
      imagem: cleanCode,
    },
    {
      nome: "Black Terminal",
      descricao:
        "Camisa preta clássica, ideal para o dia a dia do desenvolvedor.",
      preco: 119.9,
      quantidade: 15,
      imagem: blackTerminal,
    },
  ];

  return (
    <div>
      <section className="secao-produtos">
        <div className="conteudo-home">
          {/* Destaque principal */}
          <div className="destaque">
            <button
              className="cssbuttons-io-button"
              onClick={() => abrirModal(produtos[0])}
            >
              Saiba Mais
              <div className="icon">
                <svg
                  className="seta"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>

            <img
              className="img-destaque"
              src={codeClassic}
              alt="moletom-code-classic"
            />
          </div>

          {/* Produtos laterais */}
          <div className="produtos-lateral">
            <div className="imagem-superior">
              <button
                className="cssbuttons-io-button-lateral"
                onClick={() => abrirModal(produtos[1])}
              >
                Saiba Mais
                <div className="icon">
                  <svg
                    className="seta"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
              <img
                className="img-lateral-superior"
                src={cleanCode}
                alt="moletom-clean-code"
              />
            </div>

            <div className="imagem-inferior">
              <button
                className="cssbuttons-io-button-lateral"
                onClick={() => abrirModal(produtos[2])}
              >
                Saiba Mais
                <div className="icon">
                  <svg
                    className="seta"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
              <img
                className="img-lateral-inferior"
                src={blackTerminal}
                alt="camisa-black-terminal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal dinâmico */}
      {produtoSelecionado && (
        <Modal
          isOpen={open}
          onClose={fecharModal}
          nome={produtoSelecionado.nome}
          descricao={produtoSelecionado.descricao}
          imagem={produtoSelecionado.imagem}
          preco={produtoSelecionado.preco}
          quantidade={produtoSelecionado.quantidade}
        />
      )}
      <Cards />
    </div>
  );
}
