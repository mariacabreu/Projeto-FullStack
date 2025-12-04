import "./style.css";
import { useState } from "react";

export default function TrabalheConosco() {
  const [enviado, setEnviado] = useState(false);
  const [arquivoNome, setArquivoNome] = useState("Nenhum arquivo selecionado");
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    area: "",
    arquivo: null
  });
  const [erros, setErros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "cpf") {
      setForm((prev) => ({ ...prev, cpf: formatarCPF(value) }));
    } else if (name === "telefone") {
      setForm((prev) => ({ ...prev, telefone: formatarTelefone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
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
    if (tel.length > 10) {
      tel = tel.replace(/(\d{2})(\d)(\d{4})(\d{4})/, "($1) $2 $3-$4");
    } else if (tel.length > 6) {
      tel = tel.replace(/(\d{2})(\d)(\d{0,4})/, "($1) $2 $3");
    } else if (tel.length > 2) {
      tel = tel.replace(/(\d{2})(\d{0,4})/, "($1) $2");
    }
    return tel;
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, arquivo: file }));
    setArquivoNome(file ? file.name : "Nenhum arquivo selecionado");
  }

  function enviarFormulario(e) {
    e.preventDefault();

    let errosTemp = {};
    if (!form.nome) errosTemp.nome = "O campo Nome completo é obrigatório.";
    if (!form.cpf) errosTemp.cpf = "O campo CPF é obrigatório.";
    if (!form.email) {
      errosTemp.email = "O campo E-mail é obrigatório.";
    } else if (!validarEmail(form.email)) {
      errosTemp.email = "Digite um E-mail válido.";
    }
    if (!form.telefone) errosTemp.telefone = "O campo Telefone é obrigatório.";
    if (!form.area || form.area === "Selecione...") errosTemp.area = "Selecione uma Área de atuação.";
    if (!form.arquivo) errosTemp.arquivo = "Anexe seu currículo.";

    setErros(errosTemp);

    if (Object.keys(errosTemp).length === 0) {
      setEnviado(true);
    }
  }

  function validarEmail(email) {
    // Regex para verificar formato válido de e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className="trabalhe-container">
      <h1 className="titulo-trabalhe">Trabalhe Conosco</h1>

      {enviado ? (
        <div className="msg-sucesso">
          <h2>Candidatura enviada com sucesso!</h2>
          <p>Você receberá um retorno em até 7 dias úteis no seu e-mail.</p>
        </div>
      ) : (
        <div className="trabalhe-grid">

          <div className="form-box">
            <div className="form-group">
              <label>Nome completo</label>
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
              />
              {erros.nome && <span className="erro">{erros.nome}</span>}
            </div>

            <div className="form-group">
              <label>CPF</label>
              <input
                type="text"
                name="cpf"
                placeholder="000.000.000-00"
                value={form.cpf}
                onChange={handleChange}
              />
              {erros.cpf && <span className="erro">{erros.cpf}</span>}
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="seuemail@gmail.com"
                value={form.email}
                onChange={handleChange}
              />
              {erros.email && <span className="erro">{erros.email}</span>}
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input
                type="text"
                name="telefone"
                placeholder="(00) 0 0000-0000"
                value={form.telefone}
                onChange={handleChange}
              />
              {erros.telefone && <span className="erro">{erros.telefone}</span>}
            </div>

            <div className="form-group">
              <label>Área de atuação</label>
              <select name="area" value={form.area} onChange={handleChange}>
                <option>Selecione...</option>
                <option>TI</option>
                <option>RH</option>
                <option>Logística</option>
                <option>Entregador</option>
                <option>Vendas</option>
                <option>Limpeza</option>
                <option>Financeiro</option>
                <option>Marketing</option>
                <option>Atendimento ao Cliente</option>
                <option>Segurança</option>
              </select>
              {erros.area && <span className="erro">{erros.area}</span>}
            </div>
          </div>

          <div className="form-box upload-box">
            <form onSubmit={enviarFormulario}>
              <div className="form-group">
                <label>Anexar Currículo</label>
                <div className="file-input-wrapper">
                  <div className="file-input-button">
                    <span>Escolher arquivo</span>
                    <span className="file-name">{arquivoNome}</span>
                  </div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                {erros.arquivo && <span className="erro">{erros.arquivo}</span>}
              </div>

              <button className="btn-enviar" type="submit">
                Enviar Candidatura
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}
