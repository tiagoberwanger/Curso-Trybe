import React from 'react';
import PropTypes from 'prop-types';

const Digimon = ({ digimon }) => (
  <div>
    <h2 data-testid="digimonName" value="name">{digimon.name}</h2>
    <p data-testid="digimonLevel" value="level">level: {digimon.level}</p>
    <img src={digimon.img} alt={digimon.name} />
  </div>
);

export default Digimon;

Digimon.prototype = PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.number,
  img: PropTypes.string,
}).isRequired;