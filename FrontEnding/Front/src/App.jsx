import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function AppContent() {
  const [items, setItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const location = useLocation();

  const ocultarHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/cadastro";

  const addToCart = (item) => {
    setItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    setCartCount((prev) => prev + 1);
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

    if (type === "add") {
      setCartCount((prev) => prev + 1);
    } else {
      setCartCount((prev) => Math.max(prev - 1, 0));
    }
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));

    setCartCount((prev) => {
      const removedItem = items.find((item) => item.id === id);
      return removedItem ? Math.max(prev - removedItem.quantity, 0) : prev;
    });
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {!ocultarHeaderFooter && <Header cartCount={cartCount} />}

      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/nossaslojas" element={<NossasLojas />} />
        <Route path="/trabalheconosco" element={<TrabalheConosco />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* PÁGINA DO CARRINHO */}
        <Route
          path="/carrinho"
          element={
            <div className="container carrinho-page">
              <h1 className="title">Meu Carrinho</h1>

              <div className="content">
                <div className="cart">
                  {items.map((item) => (
                    <Car
                      key={item.id}
                      {...item}
                      onAdd={() => updateQty(item.id, "add")}
                      onRemove={() => updateQty(item.id, "sub")}
                      onDelete={() => removeItem(item.id)}
                    />
                  ))}
                </div>

                <Summary subtotal={subtotal} />
              </div>

              <button className="continue">CONTINUAR</button>
            </div>
          }
        />
      </Routes>

      {!ocultarHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
