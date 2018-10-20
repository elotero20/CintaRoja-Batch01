import React, {Component} from 'react';
import axios from 'axios';

class FormRegistro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            apellido:'',
            edad:0
        }
        this.getAlumnosList = props.getAlumnosList;
    }

    onInputChange = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({});
        let target = e.target.name;
        if(target == 'nombre'){
            this.setState({nombre : e.target.value});
        } else if(target == 'apellido'){
            this.setState({apellido : e.target.value});
        }else{
            this.setState({edad : e.target.value});
        }
        console.log(this.state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        let jsonAlumnoSubmit = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            edad: this.state.edad
        }

        axios.post('https://api-alumnos.herokuapp.com/api/v1',jsonAlumnoSubmit)
        .then(alumnoNuevo => {
            console.log(alumnoNuevo, "Usuario guardado!");
            alert('Usuario Guardado!');
            this.getAlumnosList();
        })
        .catch(error => { 
            console.log(error);
            alert('Error no se pudo guardar'); 
        });
    }

    render(){
        return(
            <div className="row">
            <form className="col-md-4 offset-md-4" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1">Nombre del Alumno</label>
                <input type="text" name="nombre" class="form-control" ia-describedby="emailHelp" placeholder="Enter name" onChange={this.onInputChange}>
                </input>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Apellidos</label>
                <input type="text" name="apellido" class="form-control"  placeholder="Apellidos" onChange={this.onInputChange}>
                </input>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Edad</label>
                <input type="number" name="edad" class="form-control" placeholder="Edad" onChange={this.onInputChange} >
                </input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
        )
    }

}
export default FormRegistro;
