import React from 'react';
import { connect } from 'react-redux'
import { thunkCharacter } from '../actions/index';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
    // this.validate = this.validate.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  //desestruture a ação do thunk como propriedade aqui
  const { thunkCharacter } = this.props;
  this.setState({
    inputText: '',
    characterSearched: inputText,
  })
  // insira a action a ser despachada para o thunk
  thunkCharacter(inputText)


}

// validate() {
//   let filled = document.getElementsByClassName('input').value;
//   if (filled == "") {
//     alert('please enter your character name')
//     return false;
//   }
// }

render() {
  const { inputText } = this.state;
  return (
    <div className="search">
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input
        className="input"
        data-testid="input" 
        onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        required
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

// mapeie as ações despachadas como propriedade do componente
const mapDispatchToProps = dispatch => ({
  thunkCharacter: (name) => dispatch(thunkCharacter(name))
})

// conecte as ações despachadas ao redux
export default connect(null, mapDispatchToProps)(SearchForm);