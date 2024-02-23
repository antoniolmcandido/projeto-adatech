import React, { useState } from "react";
import FormularioPersonagem from "./components/FormularioPersonagem/";
import ListaPersonagens from "./components/ListaPersonagens/";

function App() {
  const [personagens, setPersonagens] = useState([]);

  const adicionarPersonagem = (personagem) => {
    setPersonagens([...personagens, personagem]);
  };

  const removerPersonagem = (index) => {
    const personagensAtualizados = [...personagens];
    personagensAtualizados.splice(index, 1);
    setPersonagens(personagensAtualizados);
  };

  return (
    <div>
      <FormularioPersonagem adicionarPersonagem={adicionarPersonagem} />
      <ListaPersonagens personagens={personagens} removerPersonagem={removerPersonagem} />
    </div>
  );
}

export default App;
