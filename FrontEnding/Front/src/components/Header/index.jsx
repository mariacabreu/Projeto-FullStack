import "./style.css";

export default function Header() {
  return (
    <header className="header-container">
      
      {/* --- TOPO DO HEADER (links) --- */}
      <div className="header-top">
        <a href="#">Nossas lojas</a>
        <a href="#">Trabalhe Conosco</a>
      </div>

      {/* --- MEIO DO HEADER (pesquisa + login + carrinho) --- */}
      <div className="header-main">

        {/* Logo — removido */}
        <div className="logo">
          <span className="logo-text">LOGO</span>
        </div>

        {/* Barra de pesquisa */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquise por produtos ou marcas"
          />
          <button>Buscar</button>
        </div>

        {/* Login */}
        <div className="login-area">
          <div className="login-text">
            <span>Bem-vindo</span>
            <a href="#">Entre ou cadastre-se</a>
          </div>
        </div>

        {/* Carrinho */}
        <div className="cart">
          <span>Carrinho (0)</span>
        </div>

      </div>
    </header>
  );
}
