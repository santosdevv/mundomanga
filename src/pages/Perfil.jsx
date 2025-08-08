import { useEffect, useState } from "react";
import "../index.css";

const Perfil = () => {
  // Estado para armazenar os dados do usuário
  const [dadosUsuario, setDadosUsuario] = useState(null);

  // useEffect executado ao montar o componente
  useEffect(() => {
    // Simula um carregamento com delay de 1 segundo
    setTimeout(() => {
      // Recupera o nome do usuário salvo no localStorage
      const nomeSalvo = localStorage.getItem("usuario");

      // Cria um objeto com os dados do usuário
      const usuario = {
        nome: nomeSalvo || "Usuário Anônimo", // Usa valor salvo ou padrão
        cargo: "Desenvolvedor", // Valor fixo
        especialidade: "Front-end" // Valor fixo
      };

      // Atualiza o estado com os dados do usuário
      setDadosUsuario(usuario);
    }, 1000); // Delay de 1 segundo
  }, []); // Executa apenas uma vez ao montar

  // JSX retornado pelo componente
  return (
    <div className="perfil-container">
      {/* Título da seção */}
      <h2 className="perfil-titulo">👤 Perfil do Usuário</h2>

      {/* Se os dados estiverem carregados, exibe o perfil */}
      {dadosUsuario ? (
        <div className="perfil-card">
          <ul>
            <li><strong>Nome:</strong> {dadosUsuario.nome}</li>
            <li><strong>Cargo:</strong> {dadosUsuario.cargo}</li>
            <li><strong>Especialidade:</strong> {dadosUsuario.especialidade}</li>
          </ul>
        </div>
      ) : (
        // Se ainda estiver carregando, exibe mensagem de espera
        <p className="perfil-loading">Carregando perfil...</p>
      )}
    </div>
  );
};

export default Perfil;
