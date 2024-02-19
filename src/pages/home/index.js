import React from "react";
import "../../index.css";

function Home() {
    return (
        <div className="container">
            <div className="card">
                <form className="form-descript">
                    <label>
                        Nome: <input type="text" name="nome" required />
                    </label>

                    <label>
                        Idade: <input type="text" name="idade" />
                    </label>

                    <label>
                        Raça: <input type="text" name="raça" />
                    </label>

                    Tipo:
                    <select name="type" required>
                        <option value="Heroi">Herói</option>
                        <option value="Vilao">Vilão</option>
                    </select>
                </form>
            </div>
        </div>
    )
};

export default Home;