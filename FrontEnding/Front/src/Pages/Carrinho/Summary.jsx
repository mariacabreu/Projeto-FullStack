import "./Summary.css";

export default function Summary({ subtotal }) {
  return (
    <div className="summary">
      <h2>Resumo do Pedido</h2>
      <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
    </div>
  );
}
