import React from "react";
import "./Summary.css";

export default function Summary({ subtotal }) {
  const taxa = 50.91;
  const total = subtotal + taxa;

  return (
    <div className="summary">
      <h2 className="summary-title">Resumo da sua compra</h2>

      <div className="summary-box">
        <p className="delivery-label">Entregue por Loja - Salvador Iguatemi</p>

        <div className="line">
          <span>Subtotal</span>
          <strong>R$ {subtotal.toFixed(2)}</strong>
        </div>

        <div className="line">
          <span>Entrega</span>
          <strong>Grátis</strong>
        </div>

        <div className="line">
          <span>Taxas de Serviço</span>
          <strong>R$ {taxa.toFixed(2)}</strong>
        </div>

        <div className="total-line">
          <strong>Total</strong>
          <strong className="total-value">R$ {total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}
