import Logo from "../../assets/LogoS.png";
import Carrinho from "../../assets/carrinho-de-compras.png";
import { Link } from "react-router-dom";

import "./style.css";

export default function Header({ cartCount }) {
  return (
    <header className="header-container">

      <div className="header-top">
        <Link to="/">Home</Link>
        <Link to="/nossaslojas">Nossas lojas</Link>
        <Link to="/trabalheconosco">Trabalhe Conosco</Link>
      </div>

      <div className="header-main">

        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquise por produtos ou marcas"
          />
          <button>Buscar</button>
        </div>

        <div className="login-area">
          <div className="login-text">
            <span>Bem-vindo</span>
            <Link to="/login">Entre ou cadastre-se</Link>
          </div>
        </div>

        {/* Carrinho agora é um Link */}
        <Link to="/carrinho" className="cart">
          <img src={Carrinho} alt="Carrinho" className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </Link>

      </div>
    </header>
  );
}
