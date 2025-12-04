import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import NossasLojas from "./Pages/NossasLojas";
import TrabalheConosco from "./Pages/TrabalheConosco";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossaslojas" element={<NossasLojas />} />
        <Route path="/trabalheconosco" element={<TrabalheConosco />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
