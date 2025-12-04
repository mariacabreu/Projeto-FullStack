import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import Logo from "../../assets/LogoGoogle.png";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  const [erros, setErros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validarEmail(email) {
    // Validação simples de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    let errosTemp = {};

    if (!form.email) {
      errosTemp.email = "O campo E-mail é obrigatório.";
    } else if (!validarEmail(form.email)) {
      errosTemp.email = "Insira um E-mail válido.";
    }

    if (!form.senha) {
      errosTemp.senha = "O campo Senha é obrigatório.";
    } else if (form.senha.length < 6) {
      errosTemp.senha = "A senha deve ter no mínimo 6 caracteres.";
    }

    setErros(errosTemp);

    // Se não houver erros, pode "logar"
    if (Object.keys(errosTemp).length === 0) {
      // Aqui você chamaria a API de login
      navigate("/"); // redireciona para home
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h2>Entrar</h2>

        <label>E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Insira seu e-mail"
          value={form.email}
          onChange={handleChange}
        />
        {erros.email && <span className="erro">{erros.email}</span>}

        <label>Senha</label>
        <input
          type="password"
          name="senha"
          placeholder="Insira sua senha"
          value={form.senha}
          onChange={handleChange}
        />
        {erros.senha && <span className="erro">{erros.senha}</span>}

        <button className="btn-login" onClick={handleLogin}>Entrar</button>

        <div className="login-links">
          <a href="#">Esqueceu a senha?</a>
          <span>•</span>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>

        <div className="divider">Ou entre com:</div>

        <button className="btn-google">
          <img src={Logo} alt="Google" />
          Entrar com Google
        </button>

      </div>
    </div>
  );
}
