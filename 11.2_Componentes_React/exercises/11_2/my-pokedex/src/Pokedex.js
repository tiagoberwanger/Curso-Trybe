import React from 'react';
import Pokemons from './Pokemons'


class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map(pokemon => <Pokemons key={pokemon.id} pokemon={pokemon} />)}
            </div>
  );
}
}

export default Pokedex;