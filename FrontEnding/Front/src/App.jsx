import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

import Home from "./Pages/Home";
import NossasLojas from "./Pages/NossasLojas";
import TrabalheConosco from "./Pages/TrabalheConosco";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";

import Car from "./Pages/Carrinho/Car.jsx"; 
import Summary from "./Pages/Carrinho/Summary.jsx";

function CarrinhoPage({ items, updateQty }) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1 className="title">Meu Carrinho</h1>

      <div className="content">
        <div className="cart">
          {items.map((item) => (
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
}

export default function App() {
  const [items, setItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

 const addToCart = (item) => {
  console.log("[App] addToCart recebido:", item);

  setItems((prevItems) => {
    const existing = prevItems.find((i) => i.id === item.id);
    if (existing) {
      console.log("[App] item existe — incrementar quantidade");
      return prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      console.log("[App] item novo — adicionando ao array");
      return [...prevItems, { ...item, quantity: 1 }];
    }
  });

  setCartCount((prev) => {
    console.log("[App] cartCount antes:", prev, "depois:", prev + 1);
    return prev + 1;
  });
};

  const updateQty = (id, type) => {
    setItems((prev) =>
      prev.map((item) =>
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

    if (type === "add") setCartCount((prev) => prev + 1);
    else setCartCount((prev) => Math.max(prev - 1, 0));
  };

  console.log("[App] render — cartCount:", cartCount, "items:", items);

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/nossaslojas" element={<NossasLojas />} />
        <Route path="/trabalheconosco" element={<TrabalheConosco />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/carrinho"
          element={<CarrinhoPage items={items} updateQty={updateQty} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
