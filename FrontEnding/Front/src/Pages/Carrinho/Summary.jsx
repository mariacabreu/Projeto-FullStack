import "./Summary.css";

export default function Summary({ subtotal }) {
  return (
    <div className="summary">
      <h2 className="summary-title">Resumo do Pedido</h2>

      <div className="summary-box">

        <div className="delivery-label">
          Entrega padrão
        </div>

        <div className="line">
          <span>Subtotal</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>

        <div className="line">
          <span>Frete</span>
          <span>Grátis</span>
        </div>

        <div className="total-line">
          <span className="total-label">Total</span>
          <span className="total-value">R$ {subtotal.toFixed(2)}</span>
        </div>

      </div>
    </div>
  );
}
