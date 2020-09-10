import React from 'react';
import './data'

class Pokemons extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;

    return (
      <div className="Pokemons">
        <div>
          <p> Name: {name} </p>
          <p> Type: {type} </p>
          <p> Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemons;