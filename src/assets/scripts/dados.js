// imagens.png

import Blue_Syntax from "../roupas/Blue_Syntax.png";
import Clean_Code from "../roupas/Clean_Code.png";
import Code_Classic from "../roupas/Code_Classic.png";
import Debug_Mode from "../roupas/Debug_Mode.png";
import Black_Terminal from "../roupas/Black_terminal.png";

// products.js

const blueSyntax = {
  nome: "Blue Syntax",
  descricao:
    "Moletom azul inspirado nas cores dos editores de código. Confortável, moderno e ideal para programar com estilo.",
  preco: 179.9,
  quantidade: 10,
  imagem: Blue_Syntax,
};

const cleanCode = {
  nome: "Clean Code",
  descricao:
    "Moletom branco com design minimalista, perfeito para quem gosta de manter o código — e o visual — sempre limpo.",
  preco: 169.9,
  quantidade: 8,
  imagem: Clean_Code,
};

const codeClassic = {
  nome: "Code Classic",
  descricao:
    "Moletom preto clássico, confortável e versátil, ideal para o dia a dia do desenvolvedor. Simples, moderno e cheio de atitude.",
  preco: 159.9,
  quantidade: 12,
  imagem: Code_Classic,
};

const debugMode = {
  nome: "Debug Mode",
  descricao:
    "Moletom preto com estilo moderno. Perfeito para enfrentar longas sessões de debugging com muito conforto.",
  preco: 169.9,
  quantidade: 9,
  imagem: Debug_Mode,
};

const blackTerminal = {
  nome: "Black Terminal",
  descricao:
    "Camisa preta com escrita centralizada, inspirada no terminal do desenvolvedor. Leve, estilosa e perfeita para o dia a dia.",
  preco: 119.9,
  quantidade: 15,
  imagem: Black_Terminal,
};

// --- EXPORTAÇÕES FINAIS (REPLICANDO O PADRÃO DE AGRUPAMENTO) ---
// Os arrays devem referenciar os OBJETOS de dados que acabamos de criar.

export const moletons = [blueSyntax, cleanCode, codeClassic, debugMode];

export const camisas = [blackTerminal];
