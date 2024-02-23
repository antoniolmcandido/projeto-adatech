import React from 'react';
import {useParams} from 'react-router-dom';
import Heroes from '../../data';
import './styles.css';

function Details() {
  const {heroButton} = useParams();
  const hero = Heroes.find((hero) => hero.name === heroButton);

  return (
    <div className="container">
      <div className="card-details">
        <h1>{hero.name}</h1>
        <img src={hero.src} alt={hero.name}/>
        <p>{hero.description}</p>
        <h2>Detalhes:</h2>
        <p>Altura: {hero.height}</p>
        <p>Idade: {hero.age}</p>
        <p>Origem: {hero.origin}</p>
        <p>Raça: {hero.race}</p>
        <p>Tipo: {hero.type}</p>
      </div>
    </div>
  );
}

export default Details;