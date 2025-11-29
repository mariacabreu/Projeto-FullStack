import Logo from "../../assets/LogoS.png"; 
import "./style.css";

export default function NossasLojas() {
  return (
    <div className="lojas-wrapper">

      <h1 className="titulo-geral">Nossas Lojas</h1>

      <div className="lojas-container">

        {/* Loja 1 */}
        <div className="card">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="titulo">Periperi</h2>
          <p className="endereco">
            R. Frederico Costa, 146 - Periperi<br />
            Salvador - BA, 40727-070
          </p>
        </div>

        {/* Loja 2 */}
        <div className="card">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="titulo">Paralela</h2>
          <p className="endereco">
            Av. Luís Viana Filho, 6282 - Patamares<br />
            Salvador - BA, 41195-445
          </p>
        </div>

        {/* Loja 3 */}
        <div className="card">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="titulo">Vasco da Gama</h2>
          <p className="endereco">
            Av. Vasco da Gama, 437 - Engenho Velho de Brotas<br />
            Salvador - BA, 40240-090
          </p>
        </div>

        {/* Loja 4 */}
        <div className="card">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="titulo">Barra Funda</h2>
          <p className="endereco">
            Av. Marquês de S. Vicente, 1354 - Barra Funda,<br />
            São Paulo - SP, 01139-002
          </p>
        </div>

        {/* Loja 5 */}
        <div className="card">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="titulo">Barra Funda</h2>
          <p className="endereco">
            Av. Marquês de S. Vicente, 1354 - Barra Funda,<br />
            São Paulo - SP, 01139-002
          </p>
        </div>

        {/* Loja 6 */}
        <div className="card">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="titulo">Aleixo</h2>
          <p className="endereco">
            Avenida Ephigênio Salles, 2045 - Aleixo<br />
            Manaus - AM, 69060-020
          </p>
        </div>

        {/* Loja 7 */}
        <div className="card">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="titulo">Célestin Hennion</h2>
          <p className="endereco">
            Place Louis Lépine, All. Célestin Hennion,<br />
            75004 Paris, França
          </p>
        </div>

        {/* Loja 8 */}
        <div className="card">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="titulo">International Dr</h2>
          <p className="endereco">
            5450 International Dr, Orlando,<br />
            FL 32819, Estados Unidos
          </p>
        </div>

      </div>
    </div>
  );
}
