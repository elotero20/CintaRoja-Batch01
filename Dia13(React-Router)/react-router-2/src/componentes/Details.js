import React from 'react';

class Detail extends React.Component{
    constructor(props){
        super(props);  
        console.log(props.match.params)     
    }

    render(){
        return(
            <div>
             <h1>Detail ID: {this.props.match.params.id}</h1>
            </div>
        );
    }
}
export default Detail;