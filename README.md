# 💻 DevStore | E-commerce Temático para Desenvolvedores

## 💡 Sobre o Projeto

Este é um projeto de **Front-End construído em React** que simula um e-commerce moderno, com foco na exibição interativa de produtos e navegação fluida. O catálogo é voltado para roupas e acessórios com temática de programação.

O desenvolvimento destaca a gestão de estado (`useState`), roteamento e a manipulação eficiente de listas de componentes.

## 🛠️ Tecnologias e Ferramentas

| Categoria       | Tecnologia           | Arquivos de Referência |
| :-------------- | :------------------- | :--------------------- |
| **Framework**   | **React** (JSX)      | `src/App.jsx`          |
| **Build Tool**  | **Vite**             | `vite.config.js`       |
| **Roteamento**  | **React Router DOM** | Rotas em `src/App.jsx` |
| **Linter**      | **ESLint**           | `eslint.config.js`     |
| **Estilização** | **CSS Global**       | `src/App.css`          |

## 📂 Estrutura de Componentes

O projeto segue uma estrutura modular com foco na separação de responsabilidades:

| Componente     | Localização                    | Função Principal                                                                            |
| :------------- | :----------------------------- | :------------------------------------------------------------------------------------------ |
| **`App`**      | `src/App.jsx`                  | Ponto central: Define as **Rotas** e gerencia o **Estado de Busca**.                        |
| **`Navbar`**   | `src/componentes/Navbar.jsx`   | Barra superior. Contém o input de busca (lógica embutida) e navegação para `/produto`.      |
| **`Conteudo`** | `src/componentes/Conteudo.jsx` | Página inicial. Exibe destaques e botões de ação.                                           |
| **`Cards`**    | `src/componentes/Cards.jsx`    | Container que recebe o termo de `busca` via props e renderiza a lista de produtos filtrada. |
| **`Card`**     | `src/componentes/Card.jsx`     | Cartão individual de produto. Exibe detalhes e possui funcionalidade de abrir o modal.      |
| **`Modal`**    | `src/componentes/Modal.jsx`    | Componente genérico responsável por exibir detalhes do produto em uma sobreposição.         |
| **`Carrinho`** | `src/componentes/Carrinho.jsx` | Componente de rota placeholder para a página do carrinho.                                   |

---

### 📦 Dados e Assets

- **Dados:** `src/assets/scripts/dados.js` (Contém os arrays `moletons` e `camisas`).
- **Ponto de Entrada:** `src/main.jsx` (Inicializa a aplicação).

## ⚙️ Instalação e Execução (Local)

Para colocar o projeto em funcionamento em sua máquina, siga os comandos abaixo no terminal, a partir do diretório raiz do projeto:

| Comando       | Descrição                                                                                     |
| :------------ | :-------------------------------------------------------------------------------------------- |
| `npm install` | Instala todas as dependências do projeto listadas no `package.json`.                          |
| `npm run dev` | Inicia o servidor de desenvolvimento local (via Vite), geralmente em `http://localhost:5173`. |
