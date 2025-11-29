import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import NossasLojas from "./Pages/NossasLojas"; // ✔ importa automaticamente o index.jsx

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Sempre no topo */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lojas" element={<NossasLojas />} /> {/* Página Nossas Lojas */}
      </Routes>

      <Footer /> {/* Sempre no final */}
    </BrowserRouter>
  );
}

export default App;
