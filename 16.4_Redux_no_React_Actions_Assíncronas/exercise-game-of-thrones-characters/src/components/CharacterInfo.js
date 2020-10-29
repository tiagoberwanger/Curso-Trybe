import React from 'react';
import { connect } from 'react-redux'

class CharacterInfo extends React.Component {
  render() {
    //faça a desestruturação das props aqui
    const { loading, character, error } = this.props;
    if (!loading && character) {
      return (
        <div className="result">
          <ul>
            Name: <li>{character.name}</li>
            Gender: <li>{character.gender}</li>
            Culture: <li>{character.culture}</li>
            Born: <li>{character.born}</li>
            Died: <li>{((character.died === "") ? "STILL ALIVE" : character.died)}</li>
            {/* <li>Aliases: {(character.aliases === []) ? "NO ALIASES AVAILABLE" : character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
            <li>Books: {(character.books === []) ? "NO BOOKS AVAILABLE" : character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li> */}
          </ul>
        </div>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};


//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = state => ({
  character: state.reducer.character, 
  error: state.reducer.error,
  loading: state.reducer.loading,
})

// conecte este componente ao redux aqui
export default connect(mapStateToProps)(CharacterInfo);