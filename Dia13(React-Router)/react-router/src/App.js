import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//npm install react-router-dom --save 
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//importamos componentes (pages)
import Home from "./componentes/Home";
import About from "./componentes/About";
import Contact from "./componentes/Contact";
import Error from "./componentes/Error";
import NavBar from './componentes/NavBar';

//componente con router id
import Detail from './componentes/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>          
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/detail/:id" component={Detail} exact/>
            <Route component={Error} exact/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
