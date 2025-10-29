import { moletons, camisas } from "../assets/scripts/dados.js";
import { Card } from "./Card.jsx";

// O componente Cards deve receber 'camisas' via import, mas você a precisa
// para o filtro. No seu dados.js, você deve exportar 'camisas' também.

export function Cards({ busca }) {
  // CRÍTICO: Junta todos os produtos (Assumindo que 'camisas' foi importado corretamente)
  const todosProdutos = [...moletons, ...camisas];

  // Filtra ou retorna todos os produtos
  const produtosFiltrados =
    busca && busca.trim() !== ""
      ? todosProdutos.filter(
          (produto) =>
            produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(busca.toLowerCase())
        )
      : todosProdutos;

  return (
    <div>
      <div className="cards">
        {/* CORRIGIDO: Mapeando a lista FILTRADA */}
        {produtosFiltrados.map((item) => (
          <Card
            // CORRIGIDO: Adicionando a propriedade 'key'
            key={item.nome}
            nome={item.nome}
            descricao={item.descricao}
            imagem={item.imagem}
            preco={item.preco}
            quantidade={item.quantidade}
          />
        ))}
      </div>
    </div>
  );
}
