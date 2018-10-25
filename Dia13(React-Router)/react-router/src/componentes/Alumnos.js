import React from 'react';

//import axios to request to Api (promise)
import Axios from 'axios';

import Card from '../componentes/Card';

class Alumnos extends React.Component{
    constructor(){
        super();
        this.state = {
            lista_alumnos : []
        }
    }

    componentWillMount(){
        console.log("antes de cargar componente alumnos");
    }

    componentDidMount(){
        console.log("despues de cargar componente alumnos");
        this.getAlumnos();
    }

    getAlumnos = () => {
        //peticion a la api (GET)
        Axios.get('https://app-alumnos-backend.herokuapp.com/api/v1/alumnos/')
        .then((success) =>{
            console.log(success.data);
            this.setState({lista_alumnos: success.data});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    updateAlumnosList = () =>{
        if(this.state.lista_alumnos.length == 0){
            return <h1> Cargando... </h1>
        }
        else{
            let cardsAlumnos = this.state.lista_alumnos.map((elem) =>{
                //retornamos cards estudiante
                return <Card item={elem} getAlumnos={this.getAlumnos} />
            });

            return cardsAlumnos;
        }
        
    }

    render(){
        return(
            <div>
                <h1> Alumnos page </h1>
                <div className="row">
                  {this.updateAlumnosList()}
                </div>
            </div>
        )
    }
}

export default Alumnos;