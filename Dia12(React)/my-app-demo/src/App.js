import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Cards';

class App extends Component {

  constructor(){
    super();
    this.state = {
        cards:[
          {nombre:"juan",bio:"nada"},
          {nombre:"pedro",bio:"nada"},
          {nombre:"luis",bio:"nada"},
          {nombre:"pepe",bio:"nada"}
        ],
        tarjetas :[
          {nombre:"Ana",bio:"nada", edad: 20},
          {nombre:"Laura",bio:"nada"},
          {nombre:"Lucia",bio:"nada"},
          {nombre:"Paola",bio:"nada"}
        ],
    }
  }
  // componentWillReceiveProps(next_props) {
  //   console.log(this.state);
  //   this.setState({ loading: true });
  // }
  
  render(){
    console.log(this.state.loading);
     let className = this.state.loading ? 'loading' : 'loaded';
    return(<div className={className}>Soy un component {this.state.loading}</div>)
  }

  componentDidMount(){
    this.setState({loading : false});
  }


  updateComponent(){
    var cards = this.state.cards.map((elem,index,array) => {
      return <Card nombre={elem.nombre} bio={elem.bio} edad={elem.edad}/>
    });

    return cards;
  }

  updateComponentTarjetas(){
    var tarjetas = this.state.tarjetas.map((elem,ix,arr) => {
      return <Card nombre={elem.nombre} bio= {elem.bio} edad={elem.edad}/>
    });

    return tarjetas;
  }

}

export default App;
