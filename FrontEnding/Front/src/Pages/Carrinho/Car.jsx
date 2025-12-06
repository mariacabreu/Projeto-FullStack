import "./Car.css";

export default function Car({
  image,
  title,
  price,
  quantity,
  onAdd,
  onRemove,
  onDelete
}) {
  return (
    <div className="cart-item">
      <img src={image} alt={title} className="item-img" />

      <div className="item-info">
        <p className="item-title">{title}</p>
        <p className="item-sub">Produto fornecido e entregue por Salvador Iguatemi</p>
      </div>

      <p className="item-price">R$ {price.toFixed(2)}</p>

      <div className="qty-box">
        <button onClick={onRemove}>-</button>
        <span>{quantity}</span>
        <button onClick={onAdd}>+</button>
      </div>

      <p className="item-total">R$ {(price * quantity).toFixed(2)}</p>

      <span className="remove-btn" onClick={onDelete}>🗑</span>
    </div>
  );
}
