import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import react-router-dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//componentes (pages)
import Home from './componentes/Home';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Error from './componentes/Error'
import NavBar from './componentes/NavBar';
import Alumnos from './componentes/Alumnos';
import RegistroAlumnos from './componentes/RegistroAlumno';
import EditarAlumnos from './componentes/EditarAlumno';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/alumnos" component={Alumnos} exact />
            <Route path="/alumnos/registro" component={RegistroAlumnos} exact/>
            <Route path="/alumnos/editar/:aid" component={EditarAlumnos} exact/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
