import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
         <div className="col-6">
            <div className="card col-6">
            <img className="card-img-top" src="https://picsum.photos/420/320?random" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.nombre}</h5>
                <p className="card-text">{this.props.bio}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
        );
    }

}

export default Card;