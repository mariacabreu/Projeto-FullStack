import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Componentes globais
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./Pages/Home";
import NossasLojas from "./Pages/NossasLojas";
import TrabalheConosco from "./Pages/TrabalheConosco";
import Login from "./Pages/Login"; // Página de login
import Cadastro from "./Pages/Cadastro"; // Página de cadastro

// Componentes do carrinho
import Car from "./components/Car.jsx"; 
import Summary from "./components/Summary";

function App() {
  // Estado do carrinho
  const [items, setItems] = useState([
    {
      id: 1,
      image: "/img/liquido.png",
      title: "Lava Roupas Líquido Brilhante Limpeza Total 1,8L",
      price: 19.5,
      quantity: 42,
    },
    {
      id: 2,
      image: "/img/omo.png",
      title: "Lava Roupas em Pó Omo Expert Roupas Brancas 720g",
      price: 18.49,
      quantity: 1,
    },
    {
      id: 3,
      image: "/img/veja.png",
      title: "Limpador Multiuso Veja Original 500ml",
      price: 5.89,
      quantity: 1,
    },
    {
      id: 4,
      image: "/img/ype.png",
      title: "Limpador Multiuso Ypê Clássico 500ml",
      price: 5.18,
      quantity: 1,
    },
  ]);

  // Atualizar quantidade
  const updateQty = (id, type) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "add"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Página do carrinho
  const CarrinhoPage = () => (
    <div className="container">
      <h1 className="title">Meu Carrinho</h1>

      <div className="content">
        <div className="cart">
          {items.map(item => (
            <Car
              key={item.id}
              {...item}
              onAdd={() => updateQty(item.id, "add")}
              onRemove={() => updateQty(item.id, "sub")}
            />
          ))}
        </div>

        <Summary subtotal={subtotal} />
      </div>

      <button className="continue">CONTINUAR</button>
    </div>
  );

  return (
    <BrowserRouter>
      {/* Renderizamos Header/Footer apenas se NÃO estivermos em Login ou Cadastro */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nossaslojas" element={<NossasLojas />} />
                <Route path="/trabalheconosco" element={<TrabalheConosco />} />
                <Route path="/carrinho" element={<CarrinhoPage />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
