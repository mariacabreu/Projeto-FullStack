import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    // Aqui você poderia adicionar a lógica de cadastro real (API, validação, etc.)
    
    // Redireciona para a Home após o cadastro
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h2>Cadastro</h2>

        <label>Nome Completo</label>
        <input type="text" placeholder="Insira seu nome completo" />

        <label>E-mail</label>
        <input type="email" placeholder="Insira seu e-mail" />

        <label>Telefone</label>
        <input type="tel" placeholder="Insira seu telefone" />

        <label>CPF</label>
        <input type="text" placeholder="Insira seu CPF" />

        <label>Endereço</label>
        <input type="text" placeholder="Insira seu endereço" />

        <label>Senha</label>
        <input type="password" placeholder="Insira sua senha" />

        <label>Confirmar Senha</label>
        <input type="password" placeholder="Confirme sua senha" />

        <button className="btn-login" onClick={handleCadastro}>Cadastrar</button>

      </div>
    </div>
  );
}
