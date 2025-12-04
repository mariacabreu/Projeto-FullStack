import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    endereco: "",
    senha: "",
    confirmarSenha: ""
  });

  const [erros, setErros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function formatarCPF(value) {
    let cpf = value.replace(/\D/g, "").substring(0, 11);
    if (cpf.length > 9) cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
    else if (cpf.length > 6) cpf = cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
    else if (cpf.length > 3) cpf = cpf.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    return cpf;
  }

  function formatarTelefone(value) {
    let tel = value.replace(/\D/g, "").substring(0, 11);
    if (tel.length > 10) tel = tel.replace(/(\d{2})(\d)(\d{4})(\d{4})/, "($1) $2 $3-$4");
    else if (tel.length > 6) tel = tel.replace(/(\d{2})(\d)(\d{0,4})/, "($1) $2 $3");
    else if (tel.length > 2) tel = tel.replace(/(\d{2})(\d{0,4})/, "($1) $2");
    return tel;
  }

  const handleCadastro = (e) => {
    e.preventDefault();

    let errosTemp = {};

    if (!form.nome) errosTemp.nome = "O campo Nome é obrigatório.";
    
    if (!form.email) errosTemp.email = "O campo E-mail é obrigatório.";
    else if (!validarEmail(form.email)) errosTemp.email = "Insira um E-mail válido.";
    
    if (!form.telefone) errosTemp.telefone = "O campo Telefone é obrigatório.";
    
    if (!form.cpf) errosTemp.cpf = "O campo CPF é obrigatório.";
    
    if (!form.endereco) errosTemp.endereco = "O campo Endereço é obrigatório.";
    
    if (!form.senha) errosTemp.senha = "O campo Senha é obrigatório.";
    else if (form.senha.length < 6) errosTemp.senha = "A senha deve ter no mínimo 6 caracteres.";

    if (!form.confirmarSenha) errosTemp.confirmarSenha = "Confirme sua senha.";
    else if (form.senha !== form.confirmarSenha) errosTemp.confirmarSenha = "As senhas não coincidem.";

    setErros(errosTemp);

    if (Object.keys(errosTemp).length === 0) {
      // Aqui você chamaria a API de cadastro
      navigate("/"); // Redireciona para home
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h2>Cadastro</h2>

        <label>Nome Completo</label>
        <input
          type="text"
          name="nome"
          placeholder="Insira seu nome completo"
          value={form.nome}
          onChange={handleChange}
        />
        {erros.nome && <span className="erro">{erros.nome}</span>}

        <label>E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Insira seu e-mail"
          value={form.email}
          onChange={handleChange}
        />
        {erros.email && <span className="erro">{erros.email}</span>}

        <label>Telefone</label>
        <input
          type="text"
          name="telefone"
          placeholder="Insira seu telefone"
          value={formatarTelefone(form.telefone)}
          onChange={handleChange}
        />
        {erros.telefone && <span className="erro">{erros.telefone}</span>}

        <label>CPF</label>
        <input
          type="text"
          name="cpf"
          placeholder="Insira seu CPF"
          value={formatarCPF(form.cpf)}
          onChange={handleChange}
        />
        {erros.cpf && <span className="erro">{erros.cpf}</span>}

        <label>Endereço</label>
        <input
          type="text"
          name="endereco"
          placeholder="Insira seu endereço"
          value={form.endereco}
          onChange={handleChange}
        />
        {erros.endereco && <span className="erro">{erros.endereco}</span>}

        <label>Senha</label>
        <input
          type="password"
          name="senha"
          placeholder="Insira sua senha"
          value={form.senha}
          onChange={handleChange}
        />
        {erros.senha && <span className="erro">{erros.senha}</span>}

        <label>Confirmar Senha</label>
        <input
          type="password"
          name="confirmarSenha"
          placeholder="Confirme sua senha"
          value={form.confirmarSenha}
          onChange={handleChange}
        />
        {erros.confirmarSenha && <span className="erro">{erros.confirmarSenha}</span>}

        <button className="btn-login" onClick={handleCadastro}>Cadastrar</button>

      </div>
    </div>
  );
}
