import React, { useState, useEffect } from 'react';
import '../index.css';

const MangaSearch = () => {
  // Estado para armazenar o texto da busca
  const [consulta, setConsulta] = useState('');

  // Estado para armazenar os resultados da API
  const [resultados, setResultados] = useState([]);

  // Estado para indicar se está carregando dados
  const [carregando, setCarregando] = useState(false);

  // Estado para saber se o usuário já fez uma busca
  const [pesquisado, setPesquisado] = useState(false);

  // useEffect executado ao montar o componente
  // Busca os mangás mais populares da API Jikan
  useEffect(() => {
    const buscarPopulares = async () => {
      setCarregando(true); // Ativa o estado de carregamento
      try {
        const resposta = await fetch('https://api.jikan.moe/v4/top/manga'); // Requisição à API
        const dados = await resposta.json(); // Converte a resposta em JSON
        setResultados(dados.data.slice(0, 12)); // Salva os 12 primeiros mangás
      } catch (erro) {
        console.error('Erro ao buscar mangás populares:', erro); // Log de erro
      } finally {
        setCarregando(false); // Finaliza o carregamento
      }
    };

    buscarPopulares(); // Chama a função ao iniciar
  }, []);

  // Função para buscar mangás com base na consulta do usuário
  const buscarMangá = async () => {
    if (consulta.trim() === '') return; // Evita busca vazia

    setCarregando(true); // Ativa carregamento
    setPesquisado(true); // Marca que o usuário fez uma busca
    try {
      const resposta = await fetch(`https://api.jikan.moe/v4/manga?q=${consulta}&sfw=true`);
      const dados = await resposta.json();
      setResultados(dados.data); // Salva os resultados da busca
    } catch (erro) {
      console.error('Erro ao buscar mangás:', erro); // Log de erro
    } finally {
      setCarregando(false); // Finaliza carregamento
    }
  };

  // JSX retornado pelo componente
  return (
    <div className="manga-search-container">
      {/* Título da página */}
      <h1>📚 Descubra Mangás</h1>

      {/* Barra de busca */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite o nome do mangá..."
          value={consulta} // Valor atual do input
          onChange={(e) => setConsulta(e.target.value)} // Atualiza estado ao digitar
        />
        <button onClick={buscarMangá}>Buscar</button> {/* Botão que dispara a busca */}
      </div>

      {/* Mensagem de carregamento */}
      {carregando && <p>🔄 Carregando...</p>}

      {/* Mensagem de nenhum resultado encontrado */}
      {!carregando && pesquisado && resultados.length === 0 && (
        <p className="no-results">😕 Nenhum mangá encontrado com esse nome.</p>
      )}

      {/* Título para mangás populares (antes da busca) */}
      {!pesquisado && !carregando && (
        <h2 className="section-title">✨ Mangás Populares</h2>
      )}

      {/* Título para resultados da busca */}
      {pesquisado && !carregando && resultados.length > 0 && (
        <h2 className="section-title">🔍 Resultados da Busca</h2>
      )}

      {/* Lista de mangás exibidos */}
      <div className="manga-results">
        {resultados.map((manga) => (
          <div key={manga.mal_id} className="manga-card">
            {/* Imagem do mangá */}
            <img src={manga.images.jpg.image_url} alt={manga.title} />

            {/* Título do mangá */}
            <h3>{manga.title}</h3>

            {/* Sinopse resumida (até 100 caracteres) */}
            <p>{manga.synopsis?.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MangaSearch;
