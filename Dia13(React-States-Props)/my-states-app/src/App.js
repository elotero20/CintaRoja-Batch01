import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './componentes/Saludo';
import NavBar from './componentes/NavBar';
import Card from './componentes/Cards';
import axios from 'axios';


class App extends Component {

  constructor(){
    super();
    this.state = {
      message : "Hola Mundo",
      numero: 0,
      pokemons:[]
    }
  }

  updateText = () =>{
      this.setState({
        message:"Hola Mundito! :)"
      });
  }

  contadorMas = () =>{
    this.setState({numero:this.state.numero+1});
  }

  contadorMenos = () =>{
    if(this.state.numero > 0){
    this.setState({numero:this.state.numero-1});
    }
  }

  componentWillMount(){
    console.log("Will mount!");
  }

  componentDidMount(){
    console.log("Did mount!");
    axios.get('https://pokeapi.co/api/v1/pokedex/1/')
    .then(response => {
        console.log(response.data.pokemon);
        this.setState({pokemons : response.data.pokemon});
    })  
    .catch(error => {
      console.log(error);
    });
  }

  updatePokemonList = () =>{
    if(this.state.pokemons.length == 0){
      return <h1>Cargando---</h1>
    }
    else{
      let pokemonCards = this.state.pokemons.map((elem) =>{
          return <Card nombre ={elem.name} bio={elem.resource_uri} />
      });
      return pokemonCards;
    }
  }


  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.updatePokemonList()}  
        <Saludo texto={this.state.numero}/>
        <button onClick={this.contadorMas}>+</button>
        <button onClick={this.contadorMenos}>-</button>
      </div>
    );
  }
}

export default App;
