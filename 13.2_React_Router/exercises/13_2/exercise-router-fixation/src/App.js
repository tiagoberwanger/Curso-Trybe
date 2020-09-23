import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';
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
          <Link to="/strictaccess">Strict Access</Link>
        </header>
        <section className="main-content">
          <switch>
            <Route exact path="/about" component={About} /> 
            <Route exact path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
            <Route exact path="/strictaccess/" render={() => <StrictAccess  user={ {username: 'joao', password: '1234'} } />} />
            <Route exact path="/" component={Home} /> 
          </switch>
        </section>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;