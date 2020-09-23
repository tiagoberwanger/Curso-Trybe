import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="main-div">
        <BrowserRouter>
        <header className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </header>
        <section className="main-content">
          <Route exact path="/"> 
            <Home /> 
          </Route>
          <Route exact path="/about"> 
            <About /> 
          </Route>
          <Route exact path="/users"> 
            <Users /> 
          </Route>
        </section>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;