import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Listagem from "../pages/Listagem";
import Perfil from "../pages/Perfil";
import Login from "../pages/Login";
import Header from "../components/Header";
import "../index.css";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Listagem />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
