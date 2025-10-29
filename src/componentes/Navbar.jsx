import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icones/devstore.png";
import search from "../assets/icones/search.png";
import imagemPerfil from "../assets/icones/foto-perfil.png";
import carrinho from "../assets/icones/carrinho.png";
import "./styles/navbar.css";

export function Navbar({ busca, setBusca }) {
  const navigate = useNavigate();

  // Função para redirecionar para a página de produtos
  const irParaProdutos = () => {
    navigate("/produto");
  };

  // Função que detecta o Enter no input e redireciona
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      irParaProdutos();
    }
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </Link>

        <div className="busca-produtos">
          <input
            className="barra-pesquisa"
            type="text"
            placeholder="Buscar produtos..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>

        <img
          className="pesquisar"
          src={search}
          alt="pesquisar"
          onClick={irParaProdutos}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="nav-bar-rigth">
        <div className="carrinho">
          <img src={carrinho} alt="carrinho" />
          <p>carrinho</p>
        </div>
        <div className="divisao">
          <p>|</p>
        </div>
        <div className="perfil">
          <p>Conta</p>
          <img src={imagemPerfil} alt="img-perfil" />
        </div>
      </div>
    </div>
  );
}
