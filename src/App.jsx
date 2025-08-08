import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listagem from "./pages/MangaSearch";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Header from "./components/Header";
import "../src/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<Listagem />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App