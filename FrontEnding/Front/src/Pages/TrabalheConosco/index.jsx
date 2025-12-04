import "./style.css";
import { useState } from "react";

export default function TrabalheConosco() {
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(e) {
    e.preventDefault();
    setEnviado(true);
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

          {/* ----------------- CARD ESQUERDA (DADOS) ----------------- */}
          <div className="form-box">
            <div className="form-group">
              <label>Nome completo</label>
              <input type="text" placeholder="Seu nome" />
            </div>

            <div className="form-group">
              <label>CPF</label>
              <input type="text" placeholder="000.000.000-00" />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input type="email" placeholder="seuemail@gmail.com" />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input type="text" placeholder="(00) 00000-0000" />
            </div>

            <div className="form-group">
              <label>Área de atuação</label>
              <select>
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
            </div>
          </div>

          {/* ----------------- CARD DIREITA (UPLOAD + BOTÃO) ----------------- */}
          <div className="form-box">
            <form onSubmit={enviarFormulario}>
              <div className="form-group">
                <label>Anexar Currículo</label>
                <input type="file" />
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
