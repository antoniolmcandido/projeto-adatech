import React, { useState } from "react";
import "./FormularioPersonagem.css";

function FormularioPersonagem({ adicionarPersonagem }) {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: "",
    altura: "",
    idade: "",
    origem: "",
    raca: "",
    tipo: "",
    descricao: "",
    urlImagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({
      ...dadosFormulario,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dadosFormulario.nome && dadosFormulario.origem && dadosFormulario.tipo && dadosFormulario.descricao && dadosFormulario.urlImagem) {
      adicionarPersonagem(dadosFormulario);
      setDadosFormulario({
        nome: "",
        altura: "",
        idade: "",
        origem: "",
        raca: "",
        tipo: "",
        descricao: "",
        urlImagem: ""
      });
    } else {
      alert("Prenncha os campos.");
    }
  };

  return (
    <div className="formulario-personagem">
      <h1>Cadastro Personagens</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" value={dadosFormulario.nome} onChange={handleChange} required />
        <input type="text" name="altura" placeholder="Altura" value={dadosFormulario.altura} onChange={handleChange} />
        <input type="number" name="idade" placeholder="Idade" value={dadosFormulario.idade} onChange={handleChange} />
        <input type="text" name="origem" placeholder="Origem" value={dadosFormulario.origem} onChange={handleChange} required />
        <input type="text" name="raca" placeholder="Raça" value={dadosFormulario.raca} onChange={handleChange} />
        <select name="tipo" value={dadosFormulario.tipo} onChange={handleChange} required>
          <option value="">Selecione o tipo</option>
          <option value="Herói">Herói</option>
          <option value="Vilão">Vilão</option>
        </select>
        <textarea name="descricao" placeholder="Descrição" value={dadosFormulario.descricao} onChange={handleChange} required />
        <input type="url" name="urlImagem" placeholder="URL da imagem" value={dadosFormulario.urlImagem} onChange={handleChange} required />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default FormularioPersonagem;
