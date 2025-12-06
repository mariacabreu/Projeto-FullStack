// src/components/ProdutosCard.jsx
import { useState } from "react";
import "./ProdutosCard.css";

export default function ProdutosCard({ imagem, nome, preco, badge, onAdd, onRemove }) {
  const [quantidade, setQuantidade] = useState(0);

  const aumentar = () => {
    setQuantidade(quantidade + 1);
    onAdd();
  };

  const diminuir = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
      onRemove();
    }
  };

  return (
    <div className="produto-card">
      {badge && <div className="produto-badge">{badge}</div>}

      <img src={imagem} alt={nome} className="produto-imagem" />

      <h3 className="produto-nome">{nome}</h3>

      <p className="produto-preco">R$ {preco.toFixed(2)}</p>
      <p className="produto-preco-info">ou R$ {(preco * 0.99).toFixed(2)} / cada</p>

      {/* ---- BOTÃO IGUAL AO DA PRIMEIRA IMAGEM ---- */}
      {quantidade === 0 ? (
        <button className="btn-adicionar" onClick={aumentar}>
          ADICIONAR
        </button>
      ) : (
        <div className="produto-controle">
          <button className="btn-menos" onClick={diminuir}>-</button>

          <span className="produto-quantidade">{quantidade}</span>

          <button className="btn-mais" onClick={aumentar}>+</button>
        </div>
      )}
    </div>
  );
}
