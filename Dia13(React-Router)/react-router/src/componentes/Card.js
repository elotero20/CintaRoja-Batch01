import React from 'react';
import Axios from 'axios';

class Card extends React.Component{
    constructor(props){
        super(props);
    }

    deleteAlumno = () =>{
        Axios.delete('https://app-alumnos-backend.herokuapp.com/api/v1/alumnos/'+this.props.item._id)
        .then((success) => {
            console.log("Alumno eliminado", success);
            alert("Alumno eliminado");
            this.props.getAlumnos();
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    }

    render(){
        return(
            <div className="card col-md-3">
            <img className="card-img-top" src="https://picsum.photos/420/320?random" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.item.nombre}</h5>
                <p className="card-text">{this.props.item.edad}</p>
                <a onClick={this.deleteAlumno} href="#" className="btn btn-danger">Eliminar</a>
                <a href={"/alumnos/editar/"+this.props.item._id} className="btn btn-info">Actualizar</a>
            </div>
            </div>
        );
    }
}

export default Card;