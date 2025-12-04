import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/LogoGoogle.png"; // Corrija o caminho conforme sua estrutura de pastas

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você poderia adicionar a lógica de autenticação real (API, validação, etc.)

    // Redireciona para a Home após o login
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h2>Entrar</h2>

        <label>E-mail</label>
        <input type="email" placeholder="Insira seu e-mail" />

        <label>Senha</label>
        <input type="password" placeholder="Insira sua senha" />

        <button className="btn-login" onClick={handleLogin}>Entrar</button>

        <div className="login-links">
          <a href="#">Esqueceu a senha?</a>
          <span>•</span>
          <Link to="/cadastro">Cadastre-se</Link>  {/* Link para a tela de cadastro */}
        </div>

        <div className="divider">Ou entre com:</div>

        <button className="btn-google">
          <img
            src={Logo}
            alt="Google"
          />
          Entrar com Google
        </button>

      </div>
    </div>
  );
}
