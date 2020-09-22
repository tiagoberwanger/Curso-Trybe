import React from 'react';

class Doguineo extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <h1>Doguineos</h1>
        <button onClick={this.fetchDog}>Novo doguineo :)</button>
        <div>
          <img src={this.state.data.message} />
        </div>
      </div>
    );
  }
}

export default Doguineo;