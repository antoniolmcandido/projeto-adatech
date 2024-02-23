import React, { useState } from "react";
import "./CardPersonagem.css";

function CardPersonagem({ personagem, onRemover }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const toggleDetalhes = () => {
    setMostrarDetalhes(!mostrarDetalhes);
  };

  return (
    <div className="card-personagem">
      <h2>{personagem.nome}</h2>
      <img src={personagem.urlImagem} alt={personagem.nome} />
      {!mostrarDetalhes && (
        <button onClick={toggleDetalhes}>Detalhes</button>
      )}
      {mostrarDetalhes && (
        <div className="detalhes">
          <p><strong>Nome:</strong> {personagem.nome}</p>
          <p><strong>Tipo:</strong> {personagem.tipo}</p>
          <p><strong>Descrição:</strong> {personagem.descricao}</p>
          <button onClick={toggleDetalhes}>Minimizar</button>
          <button onClick={onRemover}>Remover</button>
        </div>
      )}
    </div>
  );
}

export default CardPersonagem;

