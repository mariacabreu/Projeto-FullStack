import Logo from "../../assets/LogoS.png";
import Carrinho from "../../assets/carrinho-de-compras.png";
import { Link } from "react-router-dom";

import "./style.css";

export default function Header() {
  return (
    <header className="header-container">

      <div className="header-top">
        <Link to="/nossaslojas">Nossas lojas</Link>
        <Link to="/trabalheconosco">Trabalhe Conosco</Link>
      </div>

      <div className="header-main">

        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-img" />
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
            <a href="#">Entre ou cadastre-se</a>
          </div>
        </div>

        {/* Carrinho apenas com ícone + contador */}
        <div className="cart">
          <img src={Carrinho} alt="Carrinho" className="cart-icon" />
          <span className="cart-count">0</span>
        </div>

      </div>
    </header>
  );
}
