import React from "react";
import "./styles.css";
import heroes from "../../data";
import Card from "../../components/card";
import { useState } from "react";

function Home() {
    // //armazenar os herois//
    // const [heroes, setHeroes] = useState(heroesData);
    // //armazenando novos herois//
    // const [newHero, setNewHero] = useState({});

    // //capturar formulario
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     setHeroes(prevState)
    // }






    //

    return (
        <div className="container">
            <div className="cards">
                <Card name={heroes[0].name} src={heroes[0].src} description={heroes[0].description} />
                <Card name={heroes[0].name} src={heroes[0].src} description={heroes[0].description} />
                <Card name={heroes[0].name} src={heroes[0].src} description={heroes[0].description} />
                <Card name={heroes[0].name} src={heroes[0].src} description={heroes[0].description} />
            </div>

            <div className="form">
                <form className="form-descript">

                    <label>
                        Nome: <input type="text" name="nome" required />
                    </label>

                    <label>
                        Altura: <input type="text" name="altura" />
                    </label>

                    <label>
                        Idade: <input type="text" name="idade" />
                    </label>

                    <label>
                        Origem: <input type="text" name="origem" required />
                    </label>

                    <label>
                        Raça: <input type="text" name="raça" />
                    </label>
                    <label>
                        Tipo:
                        <select name="type" required>
                            <option value="Heroi">Herói</option>
                            <option value="Vilao">Vilão</option>
                        </select>
                    </label>

                    <label>
                        Descrição: <textarea name="descricao" required />
                    </label>

                    <label>
                        Imagem do Personagem: <input type="url" name="imagemPerso" required />
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
};

export default Home;