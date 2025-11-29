import "./ProdutosCard.css";

export default function ProdutoCard({ imagem, nome, preco, badge }) {
  return (
    <div className="produto-card">

      {badge && <div className="produto-badge">{badge}</div>}

      <img src={imagem} alt={nome} className="produto-imagem" />

      <h3 className="produto-nome">{nome}</h3>

      <p className="produto-preco">R$ {preco.toFixed(2)}</p>

      <p className="produto-preco-info">
        ou R$ {(preco * 0.99).toFixed(2)} / cada
      </p>

      <button className="produto-btn">ADICIONAR</button>
    </div> 
  );
}
