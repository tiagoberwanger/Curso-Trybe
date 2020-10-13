import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../css/Header.css'
import '../css/Home.css'

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/about">Sobre</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </header>
        <div className="home">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tiago Berwanger</h1>
          <h3>Full Stack Dev</h3>
        </div>
      </div>
    );
  };
}

export default Home;
