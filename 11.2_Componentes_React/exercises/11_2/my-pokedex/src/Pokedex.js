import React from 'react';
import pokemons from './data'


class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                {pokemons.map(pokemon => 
                <div className = 'pokemon'>
                    <p> Name: {pokemon.name} </p>
                    <p> Type: {pokemon.type} </p>
                    <p> Weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
                )}
            </div>
   
  );
}
}

export default Pokedex;