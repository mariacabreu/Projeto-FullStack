import "./style.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-text">
          <p>
            <strong>Atacadão S.A.</strong> Avenida Morvan Dias de Figueiredo, 6169, Vila Maria, São Paulo - SP | CEP 02170-901 | CNPJ: 75.315.333/0001-09
          </p>
          <p>
            <strong>Envio de documentos administrativos e jurídicos:</strong> Avenida Morvan Dias de Figueiredo, 6169, Vila Maria, São Paulo - SP | CEP 02170-901
          </p>
          <p>faleconosco@atacadao.com.br</p>
        </div>
        <div className="footer-security">
          <div className="lock-icon">🔒</div>
          <div className="security-text">
            <p>AMBIENTE</p>
            <p>SEGURO</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
