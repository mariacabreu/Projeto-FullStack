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
    senha: "",
    confirmarSenha: "",
  });

  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    numero: "",
    complemento: "",
  });

  const [erros, setErros] = useState({});

  // 🔥 MÁSCARA CPF — 000.000.000-00 (exato)
  function maskCPF(value) {
    let v = value.replace(/\D/g, ""); // apenas números

    v = v.slice(0, 11); // limita a 11 dígitos

    // aplica a máscara
    if (v.length >= 4) v = v.replace(/(\d{3})(\d)/, "$1.$2");
    if (v.length >= 7) v = v.replace(/(\d{3})(\d)/, "$1.$2");
    if (v.length >= 10) v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return v;
  }

  // 🔥 MÁSCARA TELEFONE — (00) 0 0000-0000 (exato)
  function maskTelefone(value) {
    let v = value.replace(/\D/g, "");

    v = v.slice(0, 11); // telefone sempre 11 dígitos

    if (v.length >= 3) v = v.replace(/(\d{2})(\d)/, "($1) $2");
    if (v.length >= 8) v = v.replace(/(\d{1})(\d{4})(\d{4})$/, "$1 $2-$3");

    return v;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "cpf") {
      setForm((prev) => ({ ...prev, cpf: maskCPF(value) }));
      return;
    }

    if (name === "telefone") {
      setForm((prev) => ({ ...prev, telefone: maskTelefone(value) }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleEndereco(e) {
    const { name, value } = e.target;
    setEndereco((prev) => ({ ...prev, [name]: value }));
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleCadastro = (e) => {
    e.preventDefault();

    let errosTemp = {};

    // 🔥 VALIDAÇÃO — DADOS PESSOAIS
    if (!form.nome) errosTemp.nome = "O campo Nome é obrigatório.";
    if (!form.email) errosTemp.email = "O campo E-mail é obrigatório.";
    else if (!validarEmail(form.email))
      errosTemp.email = "Insira um E-mail válido.";

    if (!form.telefone) errosTemp.telefone = "O campo Telefone é obrigatório.";
    if (!form.cpf) errosTemp.cpf = "O campo CPF é obrigatório.";

    if (!form.senha) errosTemp.senha = "O campo Senha é obrigatório.";
    if (!form.confirmarSenha)
      errosTemp.confirmarSenha = "Confirme sua senha.";

    if (form.senha !== form.confirmarSenha)
      errosTemp.confirmarSenha = "As senhas não coincidem.";

    // 🔥 VALIDAÇÃO — ENDEREÇO (complemento é opcional)
    if (!endereco.cep) errosTemp.cep = "O campo CEP é obrigatório.";
    if (!endereco.logradouro)
      errosTemp.logradouro = "O campo Logradouro é obrigatório.";
    if (!endereco.bairro) errosTemp.bairro = "O campo Bairro é obrigatório.";
    if (!endereco.cidade) errosTemp.cidade = "O campo Cidade é obrigatório.";
    if (!endereco.estado) errosTemp.estado = "O campo Estado é obrigatório.";
    if (!endereco.numero) errosTemp.numero = "O campo Número é obrigatório.";

    setErros(errosTemp);

    // se estiver tudo certo → cadastrar
    if (Object.keys(errosTemp).length === 0) navigate("/");
  };

  return (
    <div className="cadastro-container">
      <h1 className="cadastro-title">Cadastro</h1>

      <div className="cadastro-content">

        {/* CARD ENDEREÇO */}
        <div className="info-card">

          <label>CEP</label>
          <input
            type="text"
            name="cep"
            placeholder="Insira seu CEP"
            value={endereco.cep}
            onChange={handleEndereco}
          />
          {erros.cep && <span className="erro">{erros.cep}</span>}

          <label>Logradouro</label>
          <input
            type="text"
            name="logradouro"
            placeholder="Insira o logradouro"
            value={endereco.logradouro}
            onChange={handleEndereco}
          />
          {erros.logradouro && <span className="erro">{erros.logradouro}</span>}

          <label>Bairro</label>
          <input
            type="text"
            name="bairro"
            placeholder="Insira o bairro"
            value={endereco.bairro}
            onChange={handleEndereco}
          />
          {erros.bairro && <span className="erro">{erros.bairro}</span>}

          <label>Cidade</label>
          <input
            type="text"
            name="cidade"
            placeholder="Insira a cidade"
            value={endereco.cidade}
            onChange={handleEndereco}
          />
          {erros.cidade && <span className="erro">{erros.cidade}</span>}

          <label>Estado</label>
          <input
            type="text"
            name="estado"
            placeholder="UF (ex: SP)"
            value={endereco.estado}
            onChange={handleEndereco}
          />
          {erros.estado && <span className="erro">{erros.estado}</span>}

          <label>Número</label>
          <input
            type="text"
            name="numero"
            placeholder="Número da residência"
            value={endereco.numero}
            onChange={handleEndereco}
          />
          {erros.numero && <span className="erro">{erros.numero}</span>}

          <label>Complemento</label>
          <input
            type="text"
            name="complemento"
            placeholder="Opcional"
            value={endereco.complemento}
            onChange={handleEndereco}
          />
        </div>

        {/* CARD DADOS PESSOAIS */}
        <div className="form-card">

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
            placeholder="exemplo@gmail.com"
            value={form.email}
            onChange={handleChange}
          />
          {erros.email && <span className="erro">{erros.email}</span>}

          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            placeholder="(00) 0 0000-0000"
            value={form.telefone}
            onChange={handleChange}
          />
          {erros.telefone && <span className="erro">{erros.telefone}</span>}

          <label>CPF</label>
          <input
            type="text"
            name="cpf"
            placeholder="000.000.000-00"
            value={form.cpf}
            onChange={handleChange}
          />
          {erros.cpf && <span className="erro">{erros.cpf}</span>}

          <label>Senha</label>
          <input
            type="password"
            name="senha"
            placeholder="Crie uma senha"
            value={form.senha}
            onChange={handleChange}
          />
          {erros.senha && <span className="erro">{erros.senha}</span>}

          <label>Confirmar Senha</label>
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Repita a senha"
            value={form.confirmarSenha}
            onChange={handleChange}
          />
          {erros.confirmarSenha && (
            <span className="erro">{erros.confirmarSenha}</span>
          )}
        </div>
      </div>

      <button className="btn-save-outside" onClick={handleCadastro}>
        Cadastrar
      </button>
    </div>
  );
}
