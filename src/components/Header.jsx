import { NavLink } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <header>
      <h1>Biblioteca de Mangás Digital</h1>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/lista">Buscar Mangá</NavLink>
        <NavLink to="/perfil">Perfil</NavLink>
        <NavLink to="/login">Entrar</NavLink>
      </nav>
    </header>
  );
};

export default Header;
