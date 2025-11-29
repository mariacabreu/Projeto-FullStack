import "./style.css";
// Componente
import ProdutoCard from "../../components/ProdutosCard";

// Imports das imagens
import Cafe from "../../assets/Cafe.png";
import Coquinha from "../../assets/coquinha.png";
import Biscoito from "../../assets/biscoito.png";
import Arroz from "../../assets/arroz.png";
import Macarrao from "../../assets/macarrao.png";
import Feijao from "../../assets/feijao.png";
import Linguica from "../../assets/linguica.png";
import Omo from "../../assets/omo.png";


// Lista de produtos
const produtos = [
  { id: 1, nome: "Arroz João 1kg", preco: 22.9, imagem: Arroz },
  { id: 2, nome: "Café Maratinho 500g", preco: 14.5, imagem: Cafe },
  { id: 3, nome: "Biscoito Maria", preco: 3.99, imagem: Biscoito },
  { id: 4, nome: "Coquinha 350ml", preco: 4.5, imagem: Coquinha },
  { id: 5, nome: "Linguiça Toscana Sadia", preco: 19.9, imagem: Linguica },
  { id: 6, nome: "Macarrão J. Macedo 500g", preco: 19.9, imagem: Macarrao },
  { id: 7, nome: "Feijão Carioca Kicaldo 1kg", preco: 19.9, imagem: Feijao },
  { id: 8, nome: "Omo líquido 1L", preco: 19.9, imagem: Omo },
];

export default function Home() {
  return (
    <div className="home-container">

      <h1 className="titulo-home">Produtos em oferta</h1>

      <div className="produtos-grid">
        {produtos.map((item) => (
          <ProdutoCard
            key={item.id}
            nome={item.nome}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </div>
  );
}
