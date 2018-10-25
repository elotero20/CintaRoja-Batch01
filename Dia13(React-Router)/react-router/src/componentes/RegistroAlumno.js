import React from 'react';
import Axios from 'axios';

class RegistroAlumnos extends React.Component{
    constructor(){
        super();
        this.state ={
            nombre:'',
            apellidos:'',
            edad:0
        }
    }

    onInputChange = (e) =>{
        console.log(e.target.id);//id perteneciente al target <input>
        console.log(e.target.value);//valor del target <input>

        let id = e.target.id,
        value = e.target.value;

        if(id == "nombreRegistro"){
            this.setState({nombre:value});
        } else if (id == "apellidosRegistro"){
            this.setState({apellidos:value});
        } else{
            this.setState({edad:value});
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();

        if(this.state.nombre == ''){
            alert('Nombre Requerido');
        }else if(this.state.apellidos == ''){
            alert('Apellidos Requeridos');
        }else if(this.state.edad < 18){
            alert('Edad debe ser mayor de 18')
        }
        else{
            let jsonAlumnoNuevo ={
                nombre: this.state.nombre,
                apellidos: this.state.apellidos,
                edad: this.state.edad
            }
    
            Axios.post('https://app-alumnos-backend.herokuapp.com/api/v1/alumnos/',jsonAlumnoNuevo)
            .then((success) => { //success = Alumno guardado
                console.log('Alumno registrado', success);
                alert('Alumno registrado');
                this.setState({nombre:'',apellidos:'',edad:0});
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        }


    }

    render(){
        console.log(this.state);
        return(
            <div className="row">
                <form className="col-md-4 offset-md-4" onSubmit={this.onSubmit} >
                <div className="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" value={this.state.nombre} className="form-control" id="nombreRegistro" aria-describedby="emailHelp" placeholder="Introduce nombre" onChange={this.onInputChange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Apellidos</label>
                    <input type="text" value={this.state.apellidos}  className="form-control" id="apellidosRegistro" placeholder="introduce apellidos" onChange={this.onInputChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Edad</label>
                    <input type="number" value={this.state.edad} className="form-control" id="edadRegistro" placeholder="0" onChange={this.onInputChange} />
                </div>                
                <button type="submit" className="btn btn-primary">Registrar</button>
                </form>
            </div>
        );
    }
}
export default RegistroAlumnos;