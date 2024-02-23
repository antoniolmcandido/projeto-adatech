import React from "react";
import CardPersonagem from "../CardPersonagem/CardPersonagem";
import "./ListaPersonagens.css";

function ListaPersonagens({ personagens, removerPersonagem }) {
  return (
    <div className="lista-personagens">
      {personagens.map((personagem, index) => (
        <CardPersonagem key={index} personagem={personagem} onRemover={() => removerPersonagem(index)} />
      ))}
    </div>
  );
}

export default ListaPersonagens;
