import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  // Estado para armazenar o nome digitado pelo usuário
  const [nomeUsuario, setNomeUsuario] = useState("");

  // Hook para navegação programática entre rotas
  const navegar = useNavigate();

  // Função chamada ao enviar o formulário
  const realizarLogin = (evento) => {
    evento.preventDefault(); // Evita o recarregamento da página
    localStorage.setItem("usuario", nomeUsuario); // Salva o nome no armazenamento local
    navegar("/perfil"); // Redireciona para a página de perfil
  };

  // JSX retornado pelo componente
  return (
    <form onSubmit={realizarLogin}>
      {/* Título da página de login */}
      <h2>Login</h2>

      {/* Campo de entrada para o nome do usuário */}
      <input
        value={nomeUsuario} // Valor atual do input
        onChange={(e) => setNomeUsuario(e.target.value)} // Atualiza o estado ao digitar
        placeholder="Digite seu nome" // Texto de dica no campo
        required // Torna o campo obrigatório
      />

      <button type="submit">Entrar</button>
    </form>
  );
};
export default Login;
