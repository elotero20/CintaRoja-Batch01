import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import Card from './componentes/Cards';
import axios from 'axios';
import  FormRegistro from './componentes/FormRegistro';

class App extends Component {
  constructor(){
    super();
    this.state = {
      alumnos : []
    }
  }

  componentWillMount(){
    console.log("component will mount");
  }

  componentDidMount(){
    console.log("component did mount");
    this.getAlumnosList();
  }

  getAlumnosList = () =>{
    axios.get('https://api-alumnos.herokuapp.com/api/v1')
    .then(response => {
        console.log(response.data);
        this.setState({alumnos: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  updateAlumnosList = () => {
    if(this.state.alumnos.length == 0)
    {
      return <h1> Cargando...</h1>
    }
    else{
        let cardsAlumnos = this.state.alumnos.map((elem,ix,ar) => {
            return <Card nombre={elem.nombre + ' ' + elem.apellido}/>
        });

        return cardsAlumnos;
    }
  }


  render() {
    return (
      <div className="App">
          <NavBar />
          <FormRegistro getAlumnosList={this.getAlumnosList}/>
          <div className="row">
          {this.updateAlumnosList()}
          </div>

      </div>
    );
  }
}

export default App;
