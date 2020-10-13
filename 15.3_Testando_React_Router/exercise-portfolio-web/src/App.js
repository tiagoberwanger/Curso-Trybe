import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>       
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} /> 
          <Route exact path="/" component={Home} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
