import React from 'react';
import Axios from 'axios';

class EditarAlumnos extends React.Component{
    constructor(props){
        super(props);
        console.log(props.match.params);
        this.state = {
            id: props.match.params.aid,
            nombre:'',
            apellidos:'',
            edad:0
        }
        this.getAlumnoById(props.match.params.aid);
    }

    getAlumnoById = (id) => {
        Axios.get('https://app-alumnos-backend.herokuapp.com/api/v1/alumnos/'+id)
        .then((success) => { //success = alumno encontrado por id
            console.log(success.data);
            let alumno = success.data;
            this.setState({
                nombre:alumno.nombre,
                apellidos: alumno.apellidos,
                edad: alumno.edad
            });
            
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
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
            let jsonAlumnoEditado ={
                nombre: this.state.nombre,
                apellidos: this.state.apellidos,
                edad: this.state.edad
            }
    
            Axios.put('https://app-alumnos-backend.herokuapp.com/api/v1/alumnos/'+this.state.id, jsonAlumnoEditado)
            .then((success) => { //success = Alumno guardado
                console.log('Alumno editado', success);
                alert('Alumno editado');
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        }


    }

    render(){
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
            <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
        );
    }
}

export default EditarAlumnos;